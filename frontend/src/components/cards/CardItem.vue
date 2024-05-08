<template>
  <q-card class="card" clickable @click="goToRoute()">
    <q-card-section>
      <q-icon :name="item.icon" size="50px"/>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">{{ props.item.name }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const props = defineProps({
  item: Object
})

const goToRoute = () => {
  if (props.item.url) {
    router.push({ name: props.item.url })
  } else {
    $q.notify({
      type: 'warning',
      message: 'This feature is not available yet.'
    })
  }
}
</script>

<style scoped>
.card{
  width: 300px;
  height: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--success-color);
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  color: var(--primary-color);
}
.card:hover{
  background-color: var(--info-color);
  cursor: pointer;
}
</style>
