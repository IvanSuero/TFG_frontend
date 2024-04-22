<template>
  <div class="q-pa-md" style="max-width: 400px; margin-left: 35%">
    <h4>Create User</h4>
    <CreateUserForm />
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
import CreateUserForm from '../components/forms/CreateUserForm.vue'

export default {
  components: {
    CreateUserForm
  }
}
</script>
