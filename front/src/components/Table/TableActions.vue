<template>
  <div class="q-pa-md">
    <q-table
      class="sticky-header-table"
      flat bordered
      title="Products"
      :rows="rows"
      :columns="columns"
      :row-key="columns.name"
      :filters="filter"
      :visible-columns="visibleColumns"
    >
      <template v-slot:top>
        <q-select
          v-model="model"
          class="q-ml-md"
          outlined color="primary"
          dense
          options-dense
          :options="options"
        />
        <q-btn
          outline color="primary"
          class="q-ml-md"
          label="Download"
          @click="() => console.log('Download')"
        />
        <q-space />
        <q-input class="q-ml-md" dense debounce="300" v-model="filter" label="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />
        <q-select
          class="q-ml-md"
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

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TableActions',
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      visibleColumns: this.columns.map(col => col.name),
      options: [
        'Add', 'Remove', 'View detail', 'Edit', 'Test'
      ],
      model: ref('Actions')
    }
  }
})
</script>
