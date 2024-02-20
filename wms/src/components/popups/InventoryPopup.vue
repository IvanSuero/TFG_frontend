<template>
  <q-card
    class="q-ma-md"
  >
    <q-card-section>
      <q-table
        :columns="getColumns()"
        :rows="items"
        row-key="id"
      />
      <div class="formBtns">
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

  data () {
    return {
      columns: []
    }
  },

  methods: {
    getColumns () {
      this.columns = this.cols
    }
  }
}

</script>
