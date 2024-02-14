<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container padding>
      <q-btn
        v-for="button in buttons"
        :key="button.name"
        :label="button.name"
        @click="() =>console.log(button.name)"
      >

      </q-btn>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import areas from 'src/utils/areas'

export default defineComponent({
  name: 'ActionLayout',

  data () {
    const area = this.$route.meta.area.toUpperCase()
    const action = this.$route.name.toUpperCase()
    return {
      buttons: areas[area].actions[action].buttons
    }
  }
})
</script>
