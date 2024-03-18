<template>
  <div class="q-pa-md q-gutter-md">
    <q-btn-dropdown
      color="primary"
      label="Actions"
    >
      <q-list>
        <q-item
          v-for="button in buttons"
          :key="button.label"
          v-close-popup
          clickable
          @click="handleSelection(button)"
        >
          <q-item-section>
            <q-item-label>{{ button.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn
      v-show="selection!=='none'"
      color="amber"
      label="Clear"
      @click="clearSelection"
    />
    <q-btn
      v-show="selection!=='none'"
      color="secondary"
      label="Submit"
      @click="submitSelection()"
    />
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableHeader',

  props: {
    selection: String,
    selected: Array,
    buttons: Array
  },

  data () {
    return {
      button: {}
    }
  },

  emits: ['activateSelection', 'clearSelection', 'openPopup'],

  methods: {
    handleSelection (button) {
      this.button = button
      if (button.selection !== 'none') {
        this.$emit('activateSelection', button)
      }
    },
    clearSelection () {
      this.$emit('clearSelection')
    },
    submitSelection () {
      this.$emit('openPopup', this.button)
    }
  }
})
</script>
