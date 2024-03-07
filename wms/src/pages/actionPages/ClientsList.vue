<template>
  <q-page padding>
    <q-table
      v-model:selected="selected"
      class="sticky-header-table"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      :visible-columns="visibleColumns"
      :selection="selection"
    >
      <template #top>
        <TableHeader
          :selection="selection"
          :selected="selected"
          @activate-selection="onActivateSelection"
          @clear-selection="onClearSelection"
          @open-popup="onOpenPopup"
        />
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

    <CommonPopup
      v-if="alert!==null"
      :alert="alert"
      :cols="columns"
      :selected="selected"
      @close-popup="alert = null"
    />
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
import TableHeader from 'src/components/table/TableHeader.vue'
import CommonPopup from 'src/components/CommonPopup.vue'

export default defineComponent({
  name: 'ActionLayout',

  components: {
    TableHeader,
    CommonPopup
  },

  data () {
    return {
      alert: null,
      selection: 'none',
      selected: [],
      rows: [],
      columns: [],
      visibleColumns: []
    }
  },

  watch: {
    $route () {
      this.rows = this.rows[this.$route.name]
      this.columns = this.columns[this.$route.name]
    }
  },

  async mounted () {
    this.getColumns()
    this.getTableData()
  },

  methods: {
    onActivateSelection (button) {
      this.selection = button.selection
    },
    onClearSelection () {
      this.selection = 'none'
      this.selected = []
      this.alert = null
    },
    onOpenPopup (button) {
      if (button.functionType === 'popup') {
        this.alert = button.popup
      } else if (button.functionType === 'action') {
        this.callFunction()
      }
    },
    callFunction () {
      // call function
      this.alert = null
      this.onClearSelection()
    },
    getColumns () {
      const self = this
      const url = 'https://backend-api-test-nine.vercel.app/api/columns/'
      this.$axios
        .get(url, {})
        .then(function (response) {
          self.columns = response.data.columns.columns.clientsList
          self.visibleColumns = response.data.columns.columns.clientsList.map(column => column.name)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getTableData () {
      const self = this
      const url = 'https://backend-api-test-nine.vercel.app/api/data/clientsList'
      this.$axios
        .get(url, {})
        .then(function (response) {
          self.rows = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
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

</style>
