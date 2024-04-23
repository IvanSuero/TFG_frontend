<template>
  <q-card class="q-pa-lg popup">
    <h5>{{ title }}</h5>
    <CreateLocationForm v-if="type==='location'" />
    <CreateProductForm v-else-if="type==='product'" />
    <CreateUserForm v-else-if="type==='user'" />
    <RelocateForm v-else-if="type==='relocate'" />
  </q-card>
</template>

<script>
import CreateLocationForm from '../components/forms/CreateLocationForm.vue'
import CreateProductForm from './forms/CreateProductForm.vue'
import CreateUserForm from './forms/CreateUserForm.vue'
import RelocateForm from './forms/RelocateForm.vue'

export default {
  components: {
    CreateLocationForm,
    CreateProductForm,
    CreateUserForm,
    RelocateForm
  },
  props: {
    title: String,
    type: String
  }
}
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
