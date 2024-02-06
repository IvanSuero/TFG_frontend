<template>
  <div class="q-pa-md">
    <q-table
      class="sticky-header-table"
      flat bordered
      title="Products"
      :rows="rows"
      :columns="columns"
      :row-key="name"
      :visible-columns="visibleColumns">

      <template v-slot:top>
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
  </div>
</template>

<style>
.sticky-header-table {
  overflow-x: auto;
  max-height: 500px;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.q-table__top, .q-table__bottom, thead tr:first-child th{
  background-color: whitesmoke;
}
thead tr th{
  position: sticky;
  z-index: 1;
}
thead tr:first-child th{
  top: 0;
}
tbody{
  scroll-margin-top: 48px;
}
</style>

<script>

import { defineComponent } from 'vue'
import { rows, columns } from '../../utils/columns/ProductColumns'

export default defineComponent({
  name: 'TableActions',
  data: () => {
    return {
      rows,
      columns,
      visibleColumns: columns.map(col => col.name)
    }
  }
})
</script>
