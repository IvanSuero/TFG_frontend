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
