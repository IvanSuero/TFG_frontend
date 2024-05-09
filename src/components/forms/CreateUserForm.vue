<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input type="text" v-model="username" label="Username" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="email" label="Email" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="password" label="Password" type="password" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-select v-model="role" label="Role" filled lazy-rules :options="roles" :rules="[val => val !== '' || 'Please fill all fields']"></q-select>
      <div class="addFormButtons">
        <q-btn label="Submit" color="green" type="submit" />
        <q-btn label="Reset" color="warning" type="reset" />
      </div>
    </q-form>
</template>

<script setup>
import axios from 'axios'
import apiPathUrl from '../../config/apiPathUrl'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const role = ref('')
const password = ref('')
const roles = [
  'Admin',
  'Staff',
  'User'
]
const $q = useQuasar()
const router = useRouter()

const onSubmit = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.createUser}`
  const body = {
    username: username.value,
    email: email.value,
    permissions: role.value === 'Admin' ? 3 : role.value === 'Staff' ? 2 : 1,
    password: password.value
  }
  await (axios.post(url, body))
    .then(() => {
      $q.notify({
        type: 'success',
        message: 'User created successfully'
      })
      router.push({ name: 'users' })
    }).catch(error => {
      $q.notify({
        type: 'error',
        message: error.message
      })
    })
}

const onReset = () => {
  username.value = ''
  email.value = ''
  role.value = ''
  password.value = ''
}
</script>

<style scoped>
.addFormButtons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
}
</style>
