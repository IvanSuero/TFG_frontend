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
    ></q-btn>
    <q-btn
      v-show="selection!=='none'"
      color="secondary"
      label="Submit"
      @click="submitSelection()"
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
      buttons: areas[area].actions[action].buttons,
      selectedBtn: null
    }
  },

  emit: ['activateSelection', 'clearSelection', 'submitSelection', 'openPopup'],

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
