<template>
  <div class="q-pa-md" style="max-width: 400px; margin-left: 35%">
    <h4>Create Product</h4>
    <CreateForm />
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
import CreateForm from '../components/CreateForm.vue'

export default {
  components: {
    CreateForm
  }
}
</script>
