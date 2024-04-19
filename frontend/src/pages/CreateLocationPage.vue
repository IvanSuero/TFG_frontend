<template>
  <div class="q-pa-md" style="max-width: 400px; margin-left: 35%">
    <h4>Create Location</h4>
    <CreateLocationForm />
  </div>
</template>

<style>
.addFormButtons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
}
</style>

<script>
import CreateLocationForm from '../components/forms/CreateLocationForm.vue'

export default {
  components: {
    CreateLocationForm
  }
}
</script>
