<template>
  <q-page padding>
    <div class="mainContainer">
      <div class="text-h6">Login | .WMS</div>
      <q-form @submit="submit" class="loginForm">
        <q-input
          v-model="username"
          label="Username"
          lazy-rules
          :rules="[
            val => !!val || 'Please enter a username'
          ]"
        />
        <q-input
          v-model="password"
          label="Password"
          type="password"
          lazy-rules
          :rules="[
            val => !!val || 'Please enter a password'
          ]"
        />
        <q-btn
          type="submit"
          label="Login"
          color="primary"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import apiPathUrl from '../config/apiPathUrl'

export default defineComponent({
  name: 'LoginPage',

  data () {
    return {
      username: ref(''),
      password: ref('')
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
              message: 'Inventory updated',
              icon: 'check',
              timeout: 1000
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
</script>

<style>
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 30px
}

.loginForm {
  width: 300px;
  padding: 20px;
}

.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
