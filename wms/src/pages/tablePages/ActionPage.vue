<template>
  <q-page padding>
    <TableHeader
      @activate-selection="onActivateSelection"
      @clear-selection="onClearSelection"
      @open-popup="onOpenPopup"
      :selection="selection"
      :selected="selected"
    />
    <q-table
      class="sticky-header-table"
      flat bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
      :selection="selection"
      v-model:selected="selected"
    >
    </q-table>

    <CommonPopup v-if="alert!==''" :alert="alert"/>
  </q-page>
</template>

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
    return {
      alert: '',
      selection: 'none',
      selected: [],
      rows: rows[this.$route.name],
      columns: columns[this.$route.name]
    }
  },

  methods: {
    onActivateSelection (button) {
      this.selection = button.selection
    },
    onClearSelection () {
      this.selection = 'none'
      this.selected = []
      this.alert = ''
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
      this.alert = ''
      this.onClearSelection()
    }
  },

  watch: {
    $route () {
      this.rows = rows[this.$route.name]
      this.columns = columns[this.$route.name]
    }
  }
})
</script>
