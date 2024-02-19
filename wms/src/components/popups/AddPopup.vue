<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <q-form @submit="submit">
        <div class="inputForm">
          <q-input
            v-for="column in columns"
            :key="column.name"
            :label="column.label"
            v-model="newItem[column.name]"
            outlined
            dense
            clearable
          />
        </div>
        <q-btn
          class="btnForm"
          type="submit"
          label="Submit"
          color="primary"
          v-close-popup
        />
        <q-btn
          class="btnForm"
          type="cancel"
          label="Cancel"
          color="warning"
          v-close-popup
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

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
