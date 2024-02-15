<template>
  <q-page padding>
    <TableHeader
      @activate-selection="onActivateSelection"
      @clear-selection="onClearSelection"
      @submit-selection="onSubmitSelection"
      :selection="selection"
      :selected="selected"
    />
    <q-table
      class="sticky-header-table"
      flat bordered
      :rows="rows"
      :columns="columns"
      row-key="reference"
      :selection="selection"
      v-model:selected="selected"
    >
    </q-table>

    <q-dialog
      v-model="alert"
    >
      <q-card>
        <q-card-section class="text-h6">{{ this.$route.meta.area.toUpperCase() }}</q-card-section>
        <q-card-section>
          <q-list bordered>
            <q-item v-for="row in selected" :key="row.reference">
              <q-item-section>{{ row.reference }}</q-item-section>
              <q-item-section>{{ row.name }}</q-item-section>
              <q-item-section>{{ row.age }}</q-item-section>
              <q-item-section>{{ row.country }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Close" color="primary" @click="onClearSelection" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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

import { defineComponent, ref } from 'vue'
import TableHeader from 'src/components/table/TableHeader.vue'

export default defineComponent({
  name: 'ActionLayout',

  components: {
    TableHeader
  },

  data () {
    return {
      alert: false,
      selection: 'none',
      selected: ref([]),
      rows: [
        {
          reference: 'REF-0001',
          name: 'John Doe',
          age: 25,
          country: 'USA'
        },
        {
          reference: 'REF-0002',
          name: 'Jane Doe',
          age: 22,
          country: 'Canada'
        },
        {
          reference: 'REF-0003',
          name: 'Joe Bloggs',
          age: 30,
          country: 'UK'
        }
      ],
      columns: [
        {
          name: 'reference',
          label: 'Reference',
          align: 'left',
          field: 'reference',
          sortable: true
        },
        {
          name: 'name',
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true
        },
        {
          name: 'age',
          label: 'Age',
          align: 'left',
          field: 'age',
          sortable: true
        },
        {
          name: 'country',
          label: 'Country',
          align: 'left',
          field: 'country',
          sortable: true
        }
      ]
    }
  },

  methods: {
    onActivateSelection (button) {
      this.selection = button.selection
    },
    onClearSelection () {
      this.selection = 'none'
      this.selected = []
      this.alert = false
    },
    onSubmitSelection () {
      this.alert = true
    }
  }
})
</script>
