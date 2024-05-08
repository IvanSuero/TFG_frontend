<template>
  <q-card class="q-pa-lg popup">
    <h5>{{ props.title }}</h5>
    <CreateProductForm v-if="props.type==='product'" />
    <CreateUserForm v-else-if="props.type==='user'" />
  </q-card>
</template>

<script setup>
import CreateProductForm from './forms/CreateProductForm.vue'
import CreateUserForm from './forms/CreateUserForm.vue'

const props = defineProps({
  title: String,
  type: String
})
</script>

<style>
.popup {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popup h5 {
  margin: 1rem 1rem 0rem 0rem;
}
</style>
