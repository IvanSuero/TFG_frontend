<template>
  <q-page padding>
    <div>
      <CardList :items="areas"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardList from 'src/components/cards/CardList.vue'
import areas from 'src/utils/areas'

export default defineComponent({
  name: 'AreasPage',

  components: {
    CardList
  },

  data () {
    return {
      areas
    }
  }
})
</script>
