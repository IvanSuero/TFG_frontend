<!-- TABLE WITH ALL PRODUCTS AND STOCK WITH A NEW COLUMN TO WRITE THE NEW STOCK -->
<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        class="sticky-header-table"
        flat
        bordered
        :rows="rows"
        :columns="columns"
        :row-key="row => row.reference"
        :pagination="pagination"
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="stock" :props="props">
            {{ props.row.stock }}
            <q-popup-edit v-model.number="props.row.stock" auto-save v-slot="scope" @save="oldStock=props.row.stock" persistent @update:model-value="openPopup(props.row)">
              <q-input type="number" v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
            <q-icon
              class="edit__icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              ><path
                d="M0 0h24v24H0V0z"
                fill="none"
              /><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></svg>
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
            color="green"
            :label="this.noStockFilter ? 'Show all' : '0 stock'"
            @click="filterNoStock"
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
            dense
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
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'

export default defineComponent({
  name: 'ProductsInventoryPage',

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
      selection: 'none'
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
      const url = `${apiPathUrl.backend}/${apiPathUrl.update}`
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
  font-size: 14px;
  background-color: #f5f5f5;
}

.sticky-header-table .q-table__top, .q-table__bottom, thead tr:first-child th {
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
