<template>
  <q-layout view="hHh Lpr lFf">
    <CommonHeader />
    <q-page-container>
      <TableActions :rows="rows" :columns="getColumns(columns)" />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import CommonHeader from 'src/components/CommonHeader.vue'
import TableActions from 'src/components/Table/TableActions.vue'
import { columns } from 'src/utils/columns/ProductColumns'
import { rows } from 'src/utils/rows'

export default defineComponent({
  name: 'TaskTableLayout',
  components: {
    CommonHeader,
    TableActions
  },
  data () {
    return {
      rows,
      columns
    }
  },
  methods: {
    getColumns (columns) {
      return this.columns.filter(column => column.areaColumns === this.$route.name.toLowerCase())[0].columns
    }
  }
})
</script>
