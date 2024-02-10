<template>
  <q-layout view="lHh Lpr lFf">
    <CommonHeader />
    <q-page-container padding>
      <TableActions :rows="getRows(rows)" :columns="getColumns(columns)" />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import CommonHeader from 'src/components/CommonHeader.vue'
import TableActions from 'src/components/Table/TableActions.vue'
import { columns } from 'src/utils/Columns'
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
      return this.columns.filter(column => column.areaColumns === this.$route.name.toLowerCase())[0]
    },
    getRows (rows) {
      return this.rows.filter(row => row.areaRows === this.$route.name.toLowerCase())[0].rows
    }
  }
})
</script>
