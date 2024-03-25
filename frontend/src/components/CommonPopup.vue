<template>
  <q-card class="cardForm">
    <q-card-section>
      <q-card-section class="text-h6">Selected Product - {{ selected[0].reference }}</q-card-section>
      <q-card-section>
        <q-form @submit="onSubmitPopup()" class="q-gutter-md popupForm">
          <div class="input-container">
            <q-input
              v-for="column in columns"
              :key="column.name"
              v-model="items[0][column.name]"
              :label="column.label"
              :disable="disabled"
              outlined
              dense
              clearable
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card-section>
    <q-card-actions align="center" style="margin-bottom: 10px">
      <q-btn label="Close" color="primary" @click="closePopup()"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonPopup',

  props: {
    selected: {
      type: Array
    },
    columns: {
      type: Array
    },
    disabled: {
      type: Boolean
    }
  },

  data () {
    return {
      items: this.selected
    }
  },

  emits: ['submit-popup', 'close-popup'],

  methods: {
    onSubmitPopup () {
      this.$emit('submit-popup')
    },

    closePopup () {
      this.$emit('close-popup')
    }
  }
})
</script>
