<!-- TABLE WITH ALL PRODUCTS AND STOCK WITH A NEW COLUMN TO WRITE THE NEW STOCK -->
<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        style="height: 600px"
        class="sticky-header-table"
        flat
        bordered
        :rows="rows"
        :columns="columns"
        :row-key="row => row.date"
        :pagination="pagination"
        virtual-scroll
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="date" :props="props">{{ props.row.date.toLocaleString() }}</q-td>
          <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="inventory" :props="props">{{ props.row.inventory }}</q-td>
          <q-td key="comments" :props="props">{{ props.row.comments }}</q-td>
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
      const url = `${apiPathUrl.backend}/${apiPathUrl.getHistory}`
      await axios.get(url)
        .then(response => {
          this.rows = response.data.data
          // for each ro in rows insert an attribute called difference
          this.rows.forEach(row => {
            const old = row.old_stock
            const newStock = row.new_stock
            row.inventory = newStock - old
            row.date = new Date(row.date)
          })
          this.originalRows = response.data.data
          console.log(this.rows)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getColumns () {
      this.columns = [
        {
          name: 'date',
          required: true,
          label: 'Date and time',
          align: 'left',
          field: 'date',
          sortable: true
        },
        {
          name: 'reference',
          required: true,
          label: 'Reference',
          align: 'left',
          field: 'reference',
          sortable: true
        },
        {
          name: 'description',
          required: true,
          label: 'Description',
          align: 'left',
          field: 'description',
          sortable: true
        },
        {
          name: 'inventory',
          required: true,
          label: 'Inventory',
          align: 'left',
          field: 'inventory',
          sortable: true
        },
        {
          name: 'comments',
          required: true,
          label: 'Comments',
          align: 'left',
          field: 'comments',
          sortable: true,
          format: val => (val === null || val === undefined) ? '' : val
        }
      ]
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
.sticky-header-table {
  height: 100%;
}

.sticky-header-table .q-table__top, .q-table__bottom, thead tr:first-child th {
  background-color: #f5f5f5;
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
