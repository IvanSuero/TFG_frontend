<template>
  <q-card
    class="q-ma-md"
  >
    <q-card-section>
      <q-table
        :columns="columns"
        :rows="items"
        row-key="id"
      />
      <q-btn
        v-close-popup
        class="btnForm"
        type="cancel"
        label="Close"
        color="warning"
      />
      <q-btn
        v-close-popup
        class="btnForm"
        style="background: red;"
        type="submit"
        label="Delete"
        color="error"
      />
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: 'DeletePopup',

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
      columns: this.cols
    }
  }
}
</script>

<style>
.q-form{
  padding: 10px;
}
.inputForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btnForm {
  width: 100%;
  margin-top: 10px;
}
</style>
