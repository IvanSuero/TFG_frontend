<template>
  <q-form @submit="submit">
    <div class="inputForm">
      <q-input
        v-for="column in columns"
        :key="column.name"
        v-model="newItem[column.name]"
        :label="column.label"
        outlined
        dense
        clearable
      />
    </div>
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
  </q-form>
</template>

<script>

export default {
  name: 'AddPopup',

  props: {
    cols: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      columns: this.cols,
      newItem: {}
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
