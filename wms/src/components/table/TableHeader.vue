<template>
  <div class="q-pa-md q-gutter-md">
    <q-btn-dropdown
      v-show="selection==='none'"
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
import areas from 'src/utils/areas'

export default defineComponent({
  name: 'TableHeader',

  props: {
    selection: String,
    selected: Array
  },

  emits: ['activateSelection', 'clearSelection', 'submitSelection', 'openPopup'],

  data () {
    const area = this.$route.meta.area.toUpperCase()
    const action = this.$route.name.toUpperCase()
    return {
      buttons: areas[area].actions[action].buttons,
      selectedBtn: null
    }
  },

  methods: {
    handleSelection (button) {
      this.selectedBtn = button
      if (button.selection !== 'none') {
        this.$emit('activateSelection', button)
      } else {
        this.$emit('openPopup', button)
      }
    },
    clearSelection () {
      this.$emit('clearSelection')
    },
    submitSelection (button) {
      this.$emit('openPopup', this.selectedBtn)
    }
  }
})
</script>
