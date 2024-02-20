<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <q-form @submit="submit">
        <div class="inputForm">
          <q-input
            v-for="column in columns"
            :key="column.name"
            v-model="newItem[column.name]"
            :placeholder="item[column.name]"
            :hint="column.field"
            :disable="!column.modifiable"
            outlined
            dense
            clearable
          />
        </div>
        <div class="formBtns">
          <q-btn
            v-close-popup
            class="btnForm"
            type="submit"
            label="Submit"
            color="primary"
          />
          <q-btn
            v-close-popup
            class="btnForm"
            type="cancel"
            label="Cancel"
            color="warning"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: 'EditPopup',

  props: {
    cols: {
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      columns: this.cols,
      newItem: this.item
    }
  },

  methods: {
    submit () {
      console.log(this.newItem)
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
