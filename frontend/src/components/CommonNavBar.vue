<template>
  <q-toolbar class="header">
    <q-toolbar-title>
      <div class="title">
        <h6 v-if="title !== 'Areas'"><a @click="router.push('/')">Home</a> / {{ title }}</h6>
        <h6 v-else>.WMS</h6>
      </div>
    </q-toolbar-title>
    <q-btn flat round dense :icon="props.drawer ? 'close' : 'menu'" @click="modifyDrawer" size="20px" />
  </q-toolbar>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  drawer: Boolean
})

const title = ref('')
const route = useRoute()
const router = useRouter()

const emit = defineEmits(['drawerModify'])

const modifyDrawer = () => {
  emit('drawerModify')
}

onMounted(() => {
  title.value = route.meta.title
})

watch(route, () => {
  title.value = route.meta.title
})
</script>

<style>
.header {
  background-color: var(--success-color);

  /* Azul claro */
  color: var(--primary-color);
  /* Texto blanco */
}

.title{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  width: 100%;
  padding: 0;
  color: white;
}

.q-toolbar{
  height: 75px;
  padding: 0 20px 0 50px ;
}
.title{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.title h6{
  width: fit-content;
  padding: 0 10px;
}
.title a:hover{
  cursor: pointer;
}
</style>
