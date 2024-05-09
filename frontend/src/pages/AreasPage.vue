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
import { useQuasar } from 'quasar'
import apiPathUrl from 'src/config/apiPathUrl'
import axios from 'axios'
import { useUserStore } from 'src/stores/user.store'

const areasWithPermission = ref({})
const $q = useQuasar()
const userStore = useUserStore()

const getAreas = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.areas}`
  const body = {
    username: userStore.getUsername
  }
  await axios.post(url, body)
    .then(response => {
      areasWithPermission.value = response.data.areas
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error + ' - Could not get areas.'
      })
    })
}

onMounted(async () => {
  await getAreas()

  if (areasWithPermission.value.length === 0) {
    $q.notify({
      type: 'error',
      message: 'You do not have permission to view any areas.'
    })
  }
})
</script>
