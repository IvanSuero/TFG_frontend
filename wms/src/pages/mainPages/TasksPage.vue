<template>
  <q-page class="flex flex-center">
    <div>
      <h1 class="text-h6">Tasks Page</h1>
      <p class="text-subtitle1">This is the tasks page</p>
      <q-btn
        v-for="action in actions"
        :key="action.name"
        :label="action.name"
        @click="() => $router.push({ name: action.path })"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import areas from '../../utils/areas'

export default defineComponent({
  name: 'TasksPage',
  data () {
    const area = this.$route.name.toUpperCase()
    return {
      actions: areas[area].actions
    }
  }
})
</script>
