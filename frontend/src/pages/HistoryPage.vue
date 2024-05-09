<!-- TABLE WITH ALL PRODUCTS AND STOCK WITH A NEW COLUMN TO WRITE THE NEW STOCK -->
<template>
  <q-page>
    <div>
      <q-table
        style="height: 650px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;"
        class="sticky-header-table"
        flat
        :rows="rows"
        :columns="columns"
        :row-key="row => row.date"
        :pagination="pagination"
        virtual-scroll
        hide-bottom
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="date" :props="props">{{ props.row.date.toLocaleString() }}</q-td>
          <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="inventory" :props="props">{{ props.row.inventory }}</q-td>
          <q-td key="comments" :props="props">{{ props.row.comments }}</q-td>
          <q-td key="username" :props="props">{{ props.row.username }}</q-td>
        </q-tr>
      </template>
      <template #top-right>
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
        </div>
      </template>
    </q-table>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'
import historyColumns from 'src/utils/historyColumns'
import { useQuasar } from 'quasar'

const rows = ref([])
const columns = ref([])
const pagination = ref({
  sortBy: 'date',
  descending: true,
  rowsPerPage: 0
})
const filter = ref('')
const filterDescription = ref('')
const originalRows = ref([])
const $q = useQuasar()

const getItems = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.getHistory}`
  await axios.get(url)
    .then(response => {
      rows.value = response.data.data
      // for each ro in rows insert an attribute called inventory
      rows.value.forEach(row => {
        row.inventory = row.new_stock - row.old_stock
        row.date = new Date(row.date)
      })
      originalRows.value = response.data.data
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error + ' - Could not get history data.'
      })
    })
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
  getItems()
  columns.value = historyColumns
})
</script>

<style>
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
