<template>
  <q-page padding>
    <TableHeader
      :selection="selection"
      :selected="selected"
      @activate-selection="onActivateSelection"
      @clear-selection="onClearSelection"
      @open-popup="onOpenPopup"
    />
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
      :cols="getColumns()"
      :selected="selected"
      @close-popup="alert = null"
    />
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
import TableHeader from 'src/components/table/TableHeader.vue'
import CommonPopup from 'src/components/CommonPopup.vue'
import rows from 'src/utils/sample/rows.json'
import columns from 'src/utils/sample/columns.json'

export default defineComponent({
  name: 'ActionLayout',

  components: {
    TableHeader,
    CommonPopup
  },

  data () {
    const cols = columns[this.$route.name]
    return {
      alert: null,
      selection: 'none',
      selected: [],
      rows: rows[this.$route.name],
      columns: cols,
      visibleColumns: cols.filter(column => column.visible).map(column => column.name)
    }
  },

  watch: {
    $route () {
      this.rows = rows[this.$route.name]
      this.columns = columns[this.$route.name]
    }
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
      return this.columns
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
