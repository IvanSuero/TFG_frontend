<template>
  <q-layout view="hHh Lpr lFf">
    <CommonHeader />
    <q-page-container>
      <TableActions />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import CommonHeader from 'src/components/CommonHeader.vue'
import TableActions from 'src/components/Table/TableActions.vue'

export default defineComponent({
  name: 'TaskTableLayout',
  components: {
    CommonHeader,
    TableActions
  }
})
</script>
