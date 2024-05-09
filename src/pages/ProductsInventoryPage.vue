<!-- TABLE WITH ALL PRODUCTS AND STOCK WITH A NEW COLUMN TO WRITE THE NEW STOCK -->
<template>
  <q-page>
    <div>
      <q-table
        :style="`height: 700px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;'`"
        class="sticky-header-table sticky-first-column"
        flat
        :rows="rows"
        :columns="columns"
        :row-key="row => row.reference"
        :pagination="pagination"
        :selection="selection"
        virtual-scroll
        v-model:selected="selected"
        hide-bottom
      >
      <template #header-selection="scope">
        <q-checkbox v-model="scope.selected" />
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td v-if="selection === 'single' || selection ==='multiple'" auto-width>
            <q-checkbox
              :model-value="props.selected"
              @update:model-value="(val) => {
                props.selected = val;
              }"
            />
          </q-td>
          <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="stock" :props="props" class="editInput">
            <q-icon
              class="edit__icon"
            >
              <img src="src/assets/edit.svg" alt="edit" />
            </q-icon>
            {{ props.row.stock }}
            <q-popup-edit v-model.number="props.row.stock" auto-save v-slot="scope" @save="oldStock=props.row.stock" @update:model-value="openPopup(props.row)">
              <q-input type="number" v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="weight" :props="props">{{ props.row.weight }}</q-td>
          <q-td key="volume" :props="props">{{ props.row.volume }}</q-td>
        </q-tr>
      </template>
      <template #top>
        <!-- search box with a select for the column to filter-->
        <div class="q-gutter-md tableHeader">
          <div class="filterInputs">
            <q-input
              color="secondary"
              outlined
              dense
              placeholder="Search reference"
              v-model="filter"
              style="min-width: 150px"
            />
            <q-input
              color="secondary"
              outlined
              dense
              placeholder="Search description"
              v-model="filterDescription"
              style="min-width: 150px"
            />
          </div>
          <div class="buttonsList">
            <CommonButton v-if="selection==='none'" message="Filter products with no stock" icon="filter_list" @click="filterNoStock"/>
            <CommonButton v-if="selection==='none'" message="Add new product" icon="add" @click="goToNewProduct"/>
            <CommonButton v-if="selection==='none'" message="Delete product" icon="delete" @click="activeDeleteMode"/>
            <CommonButton v-if="selection!=='none'" message="Cancel" icon="cancel" @click="cancelDeleteMode"/>
            <CommonButton v-if="selected.length > 0" message="Confirm deletion" icon="check" @click="deleteItems"/>
          </div>
        </div>
      </template>
    </q-table>
    </div>

    <!-- popup to add a comment to the inventory update -->
    <q-dialog v-model="popup" rounded persistent>
      <q-card>
        <q-card-section>
          <q-input
            v-model="body.comments"
            label="Comments"
            type="text"
            filled
            autofocus
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            color="primary"
            label="Save"
            @click="saveInventory(body)"
          />
          <q-btn
            color="secondary"
            label="Cancel"
            @click="popup = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="createPopup" rounded @hide="getItems">
      <CommonPopup title="Create Product" type="product"/>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Cookies, useQuasar } from 'quasar'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'
import CommonPopup from 'src/components/CommonPopup.vue'
import CommonButton from 'src/components/CommonButton.vue'
import productColumns from 'src/utils/productsColumns'
import { getProducts } from 'src/helpers/getProducts'

const rows = ref([])
const columns = ref([])
const pagination = ref({
  sortBy: 'id',
  descending: false,
  rowsPerPage: 0
})
const filter = ref('')
const filterDescription = ref('')
const originalRows = ref([])
const $q = useQuasar()
const oldStock = ref(0)
const body = ref({})
const popup = ref(false)
const noStockFilter = ref(false)
const selection = ref('none')
const selected = ref([])
const createPopup = ref(false)

const getItems = async () => {
  const data = await getProducts($q)
  rows.value = originalRows.value = data
}

const openPopup = (row) => {
  body.value = {
    reference: row.reference,
    description: row.description,
    weight: row.weight,
    volume: row.volume,
    oldStock: oldStock.value,
    newStock: row.stock
  }
  popup.value = true
}

const saveInventory = async (row) => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.updateProduct}`
  if (body.value.comments === undefined) {
    body.value.comments = ''
    body.value.user = Cookies.get('username')
  }
  await axios.post(url, body.value)
    .then(response => {
      if (response.status === 200) {
        $q.notify({
          type: 'positive',
          message: response.data.message
        })
      }
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error + ' - Could not update inventory.'
      })
    })
  popup.value = false
  body.value = {}
}

const filterNoStock = () => {
  if (rows.value.filter(row => row.stock === 0).length === 0) {
    $q.notify({
      type: 'warning',
      message: 'No products with 0 stock'
    })
  } else {
    noStockFilter.value = !noStockFilter.value
    if (noStockFilter.value) rows.value = rows.value.filter(row => row.stock === 0)
    else rows.value = originalRows.value
  }
}

const activeDeleteMode = () => {
  selection.value = 'single'
}

const cancelDeleteMode = () => {
  selection.value = 'none'
  selected.value = []
}

const deleteItems = async () => {
  if (selected.value[0].stock !== 0) {
    $q.notify({
      type: 'warning',
      message: 'Only products with 0 stock can be deleted'
    })
    return
  }
  const url = `${apiPathUrl.backend}/${apiPathUrl.deleteProduct}`
  const body = {
    reference: selected.value[0].reference
  }
  await axios.post(url, body)
    .then(response => {
      if (response.status === 200) {
        $q.notify({
          type: 'positive',
          message: response.data.message
        })
      }
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error + ' - Could not delete product.'
      })
    })

  selected.value = []
  selection.value = 'none'
  getItems()
}

const goToNewProduct = () => {
  createPopup.value = true
}

watch(filter, (val) => {
  if (val === '' || val === null || val === undefined) rows.value = originalRows.value
  else rows.value = rows.value.filter(row => row.reference.toLowerCase().includes(val.toLowerCase()))
})

watch(filterDescription, (val) => {
  if (val === '' || val === null || val === undefined) rows.value = originalRows.value
  else rows.value = rows.value.filter(row => row.description.toLowerCase().includes(val.toLowerCase()))
})

onMounted(() => {
  columns.value = productColumns
  getItems()
})
</script>

<style>
.editInput {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.popupCreate {
  width: 30%;
}
.popupCreate h5 {
  margin: 1rem 1rem 2rem 0rem;
}
.sticky-header-table {
  height: 100%;
  font-size: 14px;
  background-color: #f5f5f5;
}

.sticky-header-table .q-table__top, .q-table__bottom, thead tr:first-child th {
  background-color: #EBF1F3;
  font-size: 14px;
}

thead tr th{
  position: sticky;
  z-index: 1;
}

thead tr:first-child th{
  top: 0;
}

.tableHeader {
  width: 100%;
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tableHeader .buttonsList {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.edit__icon {
  height: 1rem;
  float: right;
}

.tableHeader .filterInputs {
  display: flex;
  flex-direction: row;
  gap: 140px;
}

@media screen and (max-width: 600px) {
  .tableHeader {
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    gap: 15px;
    margin-top: 0;;
  }

  .tableHeader .filterInputs {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

}
</style>
