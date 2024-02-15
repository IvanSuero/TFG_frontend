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
        clickable
        v-close-popup
        @click="activateSelection"
      >
        <q-item-section>
          <q-item-label>{{ button.field }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    </q-btn-dropdown>
    <q-btn
      v-show="selection"
      color="amber"
      label="Clear"
      @click="clearSelection"
    ></q-btn>
    <q-btn
      v-show="selection"
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
    selection: Boolean
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
    activateSelection () {
      this.$emit('activateSelection')
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
