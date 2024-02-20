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
      <div class="formBtns">
        <q-btn
          v-close-popup
          class="btnForm"
          type="submit"
          label="Delete"
          style="background-color: red; color: white;"
        />
        <q-btn
          v-close-popup
          class="btnForm"
          type="cancel"
          label="Cancel"
          color="warning"
        />
      </div>
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
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.inputForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.formBtns {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
}
.btnForm {
  width: 100%;
  margin-top: 10px;
}
</style>
