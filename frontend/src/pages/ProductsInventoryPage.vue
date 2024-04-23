<!-- TABLE WITH ALL PRODUCTS AND STOCK WITH A NEW COLUMN TO WRITE THE NEW STOCK -->
<template>
  <q-page>
    <div>
      <q-table
        style="height: 680px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;"
        class="sticky-header-table"
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
          <q-td key="stock" :props="props">
            {{ props.row.stock }}
            <q-popup-edit v-model.number="props.row.stock" auto-save v-slot="scope" @save="oldStock=props.row.stock" @update:model-value="openPopup(props.row)">
              <q-input type="number" v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
            <q-icon
              class="edit__icon"
            >
              <img src="src/assets/edit.svg" alt="edit" />
            </q-icon>
          </q-td>
        </q-tr>
      </template>
      <template #top-left>
        <!-- search box with a select for the column to filter-->
        <div class="q-gutter-md tableHeader">
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
          <q-btn
            v-if="selection==='none'"
            color="green"
            :label="this.noStockFilter ? 'Show all' : '0 stock'"
            @click="filterNoStock"
          />
          <q-btn
            v-if="selection==='none'"
            color="blue"
            label="New Product"
            @click="goToNewProduct"
          />
          <q-btn
            v-if="selection==='none'"
            color="red"
            label="Delete"
            @click="activeDeleteMode"
          />
          <q-btn
            v-if="selected.length > 0"
            color="red"
            label="Delete"
            @click="deleteItems"
          />
          <q-btn
            v-if="selection==='multiple' || selection==='single'"
            color="yellow"
            label="Cancel"
            @click="cancelDeleteMode"
          />
        </div>
      </template>
    </q-table>
    </div>

    <!-- popup to add a comment to the inventory update -->
    <q-dialog v-model="popup" persistent>
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
    <q-dialog v-model="createPopup">
      <q-card class="q-pa-md popupCreate">
        <h5>Create Product</h5>
        <CreateForm />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'
import CreateForm from 'src/components/forms/CreateProductForm.vue'

export default defineComponent({
  name: 'ProductsInventoryPage',
  components: {
    CreateForm
  },

  data () {
    return {
      rows: [],
      columns: [],
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      },
      filter: '',
      filterDescription: '',
      originalRows: [],
      $q: useQuasar(),
      oldStock: 0,
      body: {},
      popup: false,
      noStockFilter: false,
      selection: 'none',
      selected: [],
      createPopup: ref(false)
    }
  },

  methods: {
    async getItems () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getProducts}`
      await axios.get(url)
        .then(response => {
          this.rows = response.data.data
          this.originalRows = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getColumns () {
      this.columns = [
        {
          name: 'reference',
          label: 'Reference',
          align: 'left',
          field: 'reference',
          sortable: true
        },
        {
          name: 'description',
          label: 'Description',
          align: 'left',
          field: 'description',
          sortable: true
        },
        {
          name: 'stock',
          label: 'Stock',
          align: 'left',
          field: 'stock',
          sortable: true
        }
      ]
    },

    openPopup (row) {
      this.body = {
        reference: row.reference,
        description: row.description,
        stock: row.stock,
        oldStock: this.oldStock
      }
      this.popup = true
    },

    async saveInventory (row) {
      console.log(row)
      const url = `${apiPathUrl.backend}/${apiPathUrl.updateProduct}`
      if (this.body.comments === undefined) {
        this.body.comments = ''
      }
      await axios.post(url, this.body)
        .then(response => {
          if (response.status === 200) {
            this.$q.notify({
              color: 'positive',
              message: 'Inventory updated',
              icon: 'check',
              timeout: 1000
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
      this.popup = false
      this.body = {}
    },

    filterNoStock () {
      if (this.rows.filter(row => row.stock === 0).length === 0) {
        this.$q.notify({
          color: 'negative',
          message: 'No products with 0 stock',
          icon: 'warning',
          timeout: 1000
        })
      } else {
        this.noStockFilter = !this.noStockFilter
        if (this.noStockFilter) {
          this.rows = this.rows.filter(row => row.stock === 0)
        } else {
          this.rows = this.originalRows
        }
      }
    },

    activeDeleteMode () {
      this.selection = 'single'
      this.noStockFilter = false
      this.rows = this.originalRows
    },

    cancelDeleteMode () {
      this.selection = 'none'
      this.selected = []
    },

    async deleteItems () {
      if (this.selected[0].stock !== 0) {
        this.$q.notify({
          color: 'red',
          message: 'Product has stock',
          icon: 'warning',
          timeout: 3000
        })
        return
      }
      const url = `${apiPathUrl.backend}/${apiPathUrl.deleteProduct}`
      const body = {
        reference: this.selected[0].reference
      }
      console.log(body)
      await axios.post(url, body)
        .then(response => {
          if (response.status === 200) {
            this.$q.notify({
              color: 'positive',
              message: 'Product deleted correctly',
              icon: 'check',
              timeout: 1000
            })
          }
        })
        .catch(error => {
          console.log(error)
        })

      this.selection = 'none'
      this.selected = []
      this.getItems()
    },

    goToNewProduct () {
      this.createPopup = true
    }
  },

  watch: {
    filter (val) {
      if (val === '' || val === null || val === undefined) {
        this.rows = this.originalRows
      } else {
        this.rows = this.rows.filter(row => row.reference.toLowerCase().includes(val.toLowerCase()))
      }
    },
    filterDescription (val) {
      if (val === '' || val === null || val === undefined) {
        this.rows = this.originalRows
      } else {
        this.rows = this.rows.filter(row => row.description.toLowerCase().includes(val.toLowerCase()))
      }
    }
  },

  mounted () {
    this.getColumns()
    this.getItems()
  }
})
</script>

<style>
.popupCreate {
  width: 30%;
}
.popupCreate h5 {
  margin: 1rem 1rem 2rem 1rem;
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
  margin-right: 15px;
  display: flex;
  flex-direction: row;
}

.edit__icon {
  height: 1rem;
  float: right;
}
</style>
