<template>
  <div class="q-pa-md q-gutter-md">
    <q-btn-dropdown
      color="primary"
      label="Actions"
      v-show="selection==='none'"
    >

    <q-list>
      <q-item
        v-for="button in buttons"
        :key="button.label"
        clickable
        v-close-popup
        @click="activateSelection(button)"
      >
        <q-item-section>
          <q-item-label>{{ button.field }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    </q-btn-dropdown>
    <q-btn
      v-show="selection!=='none'"
      color="amber"
      label="Clear"
      @click="clearSelection"
    ></q-btn>
    <q-btn
      v-show="selection!=='none'"
      color="secondary"
      label="Submit"
      @click="submitSelection"
    ></q-btn>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
import areas from 'src/utils/areas'

export default defineComponent({
  name: 'TableHeader',

  props: {
    selection: String,
    selected: Array
  },

  data () {
    const area = this.$route.meta.area.toUpperCase()
    const action = this.$route.name.toUpperCase()
    return {
      buttons: areas[area].actions[action].buttons
    }
  },

  emit: ['activateSelection', 'clearSelection', 'submitSelection'],

  methods: {
    activateSelection (button) {
      this.$emit('activateSelection', button)
    },
    clearSelection () {
      this.$emit('clearSelection')
    },
    submitSelection () {
      this.$emit('submitSelection')
    }
  }
})
</script>
