<template>
  <q-card
    class="q-ma-md"
  >
    <q-card-section>
      <q-table
        :columns="getColumns()"
        :rows="items"
        row-key="id"
      >
        <template #body="props">
          <q-tr :props="props">
            <q-td
              v-for="col in props.cols.filter(column => column.name !== 'inventory')"
              :key="col.name"
              :props="props"
            >
              {{ props.row[col.name] }}
            </q-td>
            <q-td
              key="inventory"
              :props="props"
            >
              <q-badge
                :color="props.row.inventory < props.row.stock ? 'red' : 'green'"
                :label="props.row.inventory"
                class="cursor-pointer"
              />
              <q-popup-edit
                v-slot="scope"
                v-model="props.row.inventory"
                title="Inventory"
                buttons
                @save="() => console.log(props.row.inventory)"
              >
                <q-input
                  v-model="scope.value"
                  type="number"
                  dense
                  autofocus
                />
              </q-popup-edit>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <div class="formBtns">
        <q-btn
          v-close-popup
          class="btnForm"
          type="submit"
          label="Submit"
          color="green"
        />
        <q-btn
          v-close-popup
          class="btnForm"
          type="cancel"
          label="Close"
          color="warning"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: 'InventoryPopup',

  props: {
    cols: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    getColumns () {
      const columns = [...this.cols]
      columns.push({ name: 'inventory', label: 'Inventory', field: 'inventory', align: 'left' })
      return columns
    }
  }
}

</script>
