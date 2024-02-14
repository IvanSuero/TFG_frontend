<template>
  <q-page>
    <div>
      <CardList :items="getItems()" :showBackButton="showBackButton" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import areas from '../../utils/areas'
import CardList from 'src/components/cards/CardList.vue'

export default defineComponent({
  name: 'TasksPage',
  components: {
    CardList
  },
  data () {
    return {
      showBackButton: true
    }
  },

  methods: {
    getItems () {
      const items = []
      const area = this.$route.name.toUpperCase()
      Object.entries(areas[area].actions).forEach(([key, value]) => {
        items.push({ name: value.field, icon: value.icon, path: value.path })
      })
      return items
    }
  }
})
</script>
