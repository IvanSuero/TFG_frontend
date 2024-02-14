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
  name: 'AreasPage',
  components: {
    CardList
  },
  data () {
    return {
      showBackButton: false
    }
  },

  methods: {
    getItems () {
      const items = []
      Object.entries(areas).forEach(([key, value]) => {
        items.push({ name: value.name, icon: value.icon, path: value.path })
      })
      return items
    }
  }
})
</script>
