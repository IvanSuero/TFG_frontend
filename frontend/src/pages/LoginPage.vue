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

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import apiPathUrl from '../config/apiPathUrl'
import { useRouter } from 'vue-router'
import { Cookies } from 'quasar'

export default defineComponent({
  name: 'LoginPage',

  data () {
    const router = useRouter()
    return {
      username: ref(''),
      password: ref(''),
      router
    }
  },

  methods: {
    async submit () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.login}`
      const body = {
        username: this.username,
        password: this.password
      }
      await axios.post(url, body)
        .then(response => {
          if (response.status === 200) {
            this.$q.notify({
              color: 'positive',
              message: 'Welcome!',
              icon: 'check',
              timeout: 1000
            })
            Cookies.set('token', response.data.token)
            Cookies.set('username', this.username)
            axios.defaults.headers.common = { 'auth-token': Cookies.get('token') }
            this.$router.push('/')
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.$q.notify({
              color: 'negative',
              message: 'Invalid username or password',
              icon: 'warning',
              timeout: 1000
            })
          }
        })
    }
  }
})
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
