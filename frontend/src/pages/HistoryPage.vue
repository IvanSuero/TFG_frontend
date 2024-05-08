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
      <template #top-left>
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

<script>
import { defineComponent } from 'vue'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'
import historyColumns from 'src/utils/historyColumns'

export default defineComponent({
  name: 'ProductsInventoryPage',

  data () {
    return {
      rows: [],
      columns: [],
      pagination: {
        sortBy: 'date',
        descending: true,
        rowsPerPage: 0
      },
      filter: '',
      filterDescription: '',
      originalRows: []
    }
  },

  methods: {
    async getItems () {
      try {
        const url = `${apiPathUrl.backend}/${apiPathUrl.getHistory}`
        await axios.get(url)
          .then(response => {
            this.rows = response.data.data
            // for each ro in rows insert an attribute called inventory
            this.rows.forEach(row => {
              row.inventory = row.new_stock - row.old_stock
              row.date = new Date(row.date)
            })
            this.originalRows = response.data.data
            console.log(this.rows)
          })
          .catch(error => {
            this.$q.notify({
              type: 'error',
              message: error + ' - Could not get history data.'
            })
          })
      } catch (error) {
        this.$q.notify({
          type: 'error',
          message: error + ' - Could not get history data.'
        })
      }
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
    this.columns = historyColumns
    this.getItems()
  }
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
