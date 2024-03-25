<template>
  <q-card class="cardForm">
    <q-card-section>
      <q-card-section class="text-h6">New Product</q-card-section>
      <q-card-section>
        <q-form @submit="submitPopup" class="q-gutter-md popupForm">
          <div class="input-container">
            <q-input
              v-for="column in columns"
              :key="column.name"
              v-model="item[column.name]"
              :label="column.label"
              :disable="disabled"
              outlined
              dense
              clearable
              :rules="[val => !!val || 'Required']"
            />
          </div>
          <q-card-actions align="center" style="margin-bottom: 10px">
            <q-btn label="Cancel" type="Cancel" color="primary" @click="closePopup"/>
            <q-btn label="Submit" type="Submit" color="secondary"/>
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddPopup',

  props: {
    columns: {
      type: Array
    },
    disabled: {
      type: Boolean
    }
  },

  data () {
    return {
      item: {}
    }
  },

  emits: ['submitPopup', 'close-popup'],

  methods: {
    submitPopup () {
      this.$emit('submitPopup', this.item)
    },

    closePopup () {
      this.$emit('close-popup')
    }
  }
})
</script>

<style>
.input-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}

@media (max-width: 768px) {
  .input-container {
    grid-template-columns: 1fr;
  }
}
</style>
