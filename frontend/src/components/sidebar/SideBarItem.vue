<template>
  <q-item @click="goToRoute()" clickable>
      <q-item-section avatar>
          <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
          <q-item-label v-if="item.type!=='profile'">{{ item.name }}</q-item-label>
          <q-item-label v-else>{{ username }}</q-item-label>
      </q-item-section>
  </q-item>
</template>

<script setup>
import { Cookies } from 'quasar'
import { useRouter } from 'vue-router'

const props = defineProps({
  item: Object
})

const username = Cookies.get('username')
const router = useRouter()

const goToRoute = () => {
  switch (props.item.type) {
    case 'link':
      router.push(props.item.url)
      break
    case 'logout':
      Cookies.remove('token')
      Cookies.remove('username')
      router.push('/login')
      break
    case 'profile':
      break
    default:
      router.push(props.item.url)
  }
}
</script>

<style scoped>
.q-item:hover{
  cursor: pointer;
  background-color: #C5D7DD;
  border-radius: 20px;
  transition: 0.3s;
  scale: 1.05;
}
</style>
