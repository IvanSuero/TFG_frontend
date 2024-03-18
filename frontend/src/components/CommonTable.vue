<template>
  <q-table
        v-model:selected="selected"
        class="sticky-header-table"
        flat
        bordered
        :rows="rows"
        :columns="columns"
        row-key="id"
        :selection="selection"
        :visible-columns="visibleColumns"
        :pagination="pagination"
      >
      <template #top-left>
        <!-- search box -->
        <q-input
          outlined
          dense
          placeholder="Search"
          v-model="filter"
          style="min-width: 150px"
        />
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
      columns: [
        {
          name: 'id',
          label: 'ID',
          align: 'left',
          field: 'id',
          sortable: true,
          visible: false
        },
        {
          name: 'name',
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true,
          visible: true
        },
        {
          name: 'buy_price',
          label: 'Buy Price',
          align: 'left',
          field: 'buy_price',
          sortable: true,
          visible: true
        },
        {
          name: 'sell_price',
          label: 'Sell Price',
          align: 'left',
          field: 'sell_price',
          sortable: true,
          visible: true
        },
        {
          name: 'stock',
          label: 'Stock',
          align: 'left',
          field: 'stock',
          sortable: true,
          visible: true
        },
        {
          name: 'category',
          label: 'Category',
          align: 'left',
          field: 'category',
          sortable: true,
          visible: true
        },
        {
          name: 'weight',
          label: 'Weight',
          align: 'left',
          field: 'weight',
          sortable: true,
          visible: false
        },
        {
          name: 'volume',
          label: 'Volume',
          align: 'left',
          field: 'volume',
          sortable: true,
          visible: false
        }
      ],
      visibleColumns: [],
      selected: [],
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      }
    }
  },

  methods: {
    getVisibleColumns () {
      this.visibleColumns = this.columns.map(column => column.visible ? column.name : null).filter(column => column !== null)
    },

    clearSelection () {
      this.selected = []
    },

    submitSelection () {
      this.$emit('submitSelection', this.selected, this.columns)
    },

    getItems () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.products.getProducts}`
      this.$axios.get(url)
        .then(response => {
          console.log(response.data)
          this.rows = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  emits: ['submitSelection'],

  mounted () {
    this.getVisibleColumns()
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
