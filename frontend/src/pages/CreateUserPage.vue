<template>
  <div class="q-pa-md" style="max-width: 400px; margin-left: 35%">
    <h4>Create User</h4>
    <CreateUserForm />
  </div>
</template>

<script setup>
import CreateUserForm from '../components/forms/CreateUserForm.vue'
</script>

<style scoped>
.addFormButtons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
}
</style>
