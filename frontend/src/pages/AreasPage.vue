<template>
  <q-page padding>
    <div>
      <CardList :items="areasWithPermission"/>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CardList from 'src/components/cards/CardList.vue'
import areas from 'src/utils/areas'
import { useQuasar } from 'quasar'

const areasWithPermission = ref({})
const $q = useQuasar()

onMounted(() => {
  areasWithPermission.value = areas.filter(area => area.permission <= 3)
  if (areasWithPermission.value.length === 0) {
    $q.notify({
      type: 'error',
      message: 'You do not have permission to view any areas.'
    })
  }
})
</script>
