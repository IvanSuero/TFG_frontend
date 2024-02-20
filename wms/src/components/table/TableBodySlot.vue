<template>
  <q-tr :props="props">
    <q-td
      v-for="col in props.cols.filter(column => !column.editable )"
      :key="col.name"
      :props="props"
    >
      {{ props.row[col.name] }}
    </q-td>
    <q-td
      key="stock"
      :props="props"
    >
      <q-badge
        :color="stockColor[props.key-1]"
        :label="props.row.stock"
        class="cursor-pointer"
      />
      <q-popup-edit
        v-slot="scope"
        v-model="props.row.stock"
        title="Inventory"
        buttons
        @save=" (val) => { updateColor(val, props.key-1) }"
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

<script>

export default {
  props: {
    properties: {
      type: Object,
      required: true
    },
    initialStocks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      stockColor: ['green', 'green', 'green'],
      props: this.properties
    }
  },
  methods: {
    updateColor (val, index) {
      this.stockColor[index] = +val === +this.initialStocks[index] ? 'green' : 'orange'
    }
  }
}
</script>
