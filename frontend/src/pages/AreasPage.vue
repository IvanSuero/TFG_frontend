<template>
  <q-page padding>
    <div>
      <CardList :items="areasWithPermission"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CardList from 'src/components/cards/CardList.vue'
import areas from 'src/utils/areas'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'AreasPage',

  components: {
    CardList
  },

  data () {
    return {
      areasWithPermission: {},
      $q: useQuasar()
    }
  },

  mounted () {
    this.areasWithPermission = areas.filter(area => area.permission <= 3)
    if (this.areasWithPermission.length === 0) {
      this.$q.notify({
        type: 'error',
        message: 'You do not have permission to view any areas.'
      })
    }
  }
})
</script>
