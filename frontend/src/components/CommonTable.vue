<template>
  <q-table
        v-model:selected="selected"
        class="sticky-header-table"
        flat
        bordered
        :rows="rows"
        :columns="columns"
        :row-key="row => row.reference"
        :selection="selection"
        :visible-columns="visibleColumns"
        :pagination="pagination"
      >
      <template #top-left>
        <!-- search box with a select for the column to filter-->
        <div class="q-gutter-md tableHeader">
        <q-select
          v-model="filteredColumn"
          outlined
          dense
          options-dense
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
          label="FIlter by:"
        />
        <q-input
          outlined
          dense
          placeholder="Search reference"
          v-model="filter"
          style="min-width: 150px"
          :disable="filteredColumn === '' || selected.length > 0"
        />
        </div>
      </template>
        <template #top-right>
          <div class="q-gutter-md tableHeader">
            <q-btn
              v-show="selected.length"
              color="amber"
              label="Clear"
              @click="clearSelection()"
            />
            <q-btn
              v-show="selection!=='none' && selected.length"
              color="secondary"
              :label="label"
              @click="submitSelection()"
            />
            <q-btn
              color="primary"
              label="Reset columns"
              @click="getColumns()"
            />
            <q-btn
              color="primary"
              label="Show all columns"
              @click="visibleColumns = columns.map(column => column.name ? column.name : null).filter(column => column !== null)"
            />
          </div>
          <q-select
            v-model="visibleColumns"
            multiple
            outlined
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            options-cover
            style="min-width: 150px"
          />
        </template>
    </q-table>
</template>

<script>
import { defineComponent } from 'vue'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'

export default defineComponent({
  name: 'CommonTable',

  props: {
    selection: {
      type: String,
      default: 'none'
    },
    label: {
      type: String,
      default: 'Submit'
    }
  },

  data () {
    return {
      rows: [],
      columns: [],
      originalRows: [],
      visibleColumns: [],
      selected: [],
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      },
      filter: '',
      filteredColumn: ''
    }
  },

  methods: {
    clearSelection () {
      this.selected = []
    },

    submitSelection () {
      this.$emit('submitSelection', this.selected, this.columns)
    },

    async getColumns () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.columns}`
      const columnsKey = apiPathUrl[this.$route.meta.apiPath].columns
      await axios.get(url)
        .then(response => {
          this.columns = response.data.columns.columns[columnsKey]
          this.visibleColumns = response.data.columns.columns[columnsKey].map(column => column.name ? column.name : null).filter(column => column !== null)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getItems () {
      const url = `${apiPathUrl.backend}/${apiPathUrl[this.$route.meta.apiPath].route}`
      await axios.get(url)
        .then(response => {
          this.rows = response.data.data
          this.originalRows = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  emits: ['submitSelection'],

  watch: {
    filter (val) {
      if (val === '' || val === null || val === undefined) {
        this.rows = this.originalRows
      } else {
        this.rows = this.rows.filter(row => row[this.filteredColumn].toLowerCase().includes(val.toLowerCase()))
        console.log(this.rows)
      }
    }
  },

  mounted () {
    this.getColumns()
    this.getItems()
  }
}
)
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
}
</style>
