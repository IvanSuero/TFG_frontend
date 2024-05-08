<template>
  <q-page padding class="q-page-main-form">
    <div class="mainContainerForm">
      <div class="text-h6">Login | .WMS</div>
      <q-form @submit="submit" class="loginForm">
        <q-input
          v-model="username"
          label="Username"
          lazy-rules
          rounded
          :rules="[
            val => !!val || 'Please enter a username'
          ]"
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          rounded
          lazy-rules
          :rules="[
            val => !!val || 'Please enter a password'
          ]"
        />
        <div class="buttons">
          <q-btn
            type="submit"
            label="Login"
            color="primary"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import apiPathUrl from '../config/apiPathUrl'
import { useRouter } from 'vue-router'
import { Cookies, useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()
const username = ref('')
const password = ref('')

const submit = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.login}`
  const body = {
    username: username.value,
    password: password.value
  }
  await axios.post(url, body)
    .then(response => {
      if (response.status === 200) {
        Cookies.set('token', response.data.token)
        Cookies.set('username', username.value)
        axios.defaults.headers.common = { 'auth-token': Cookies.get('token') }
        router.push('/')
        $q.notify({
          type: 'positive',
          message: 'Welcome ' + username.value
        })
      }
    })
    .catch(error => {
      if (error.response.status === 401) {
        $q.notify({
          type: 'error',
          message: 'Invalid username or password'
        })
      } else {
        $q.notify({
          type: 'other',
          message: error + ' - Could not login.'
        })
      }
    })
}
</script>

<style>
.mainContainerForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #8DB4B9;
  color: black;
  padding: 30px
}

.loginForm {
  width: 300px;
  padding: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.q-page-main-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
