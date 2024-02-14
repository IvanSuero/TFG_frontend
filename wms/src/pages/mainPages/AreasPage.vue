<template>
  <q-page class="flex flex-center">
    <div>
      <h1 class="text-h6">Areas Page</h1>
      <p class="text-subtitle1">This is the areas page</p>
      <q-btn
        v-for="area in areas"
        :key="area.name"
        :label="area.name"
        @click="() => $router.push({ name: area.path })"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import areas from '../../utils/areas'

export default defineComponent({
  name: 'AreasPage',
  data () {
    return {
      areas
    }
  }
})
</script>
