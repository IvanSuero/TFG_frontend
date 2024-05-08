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

<style>
.addFormButtons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
}
</style>

<script>
import axios from 'axios'
import apiPathUrl from '../../config/apiPathUrl'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  data () {
    return {
      username: ref(''),
      email: ref(''),
      role: ref(''),
      password: ref(''),
      roles: [
        'Admin',
        'Staff',
        'User'
      ],
      users: [],
      $q: useQuasar()
    }
  },
  methods: {
    async onSubmit () {
      const map = this.users.map(user => user.username)
      const exists = map.includes(this.username)

      if (!exists && this.validateForm()) {
        const url = `${apiPathUrl.backend}/${apiPathUrl.createUser}`
        const body = {
          username: this.username,
          email: this.email,
          permissions: this.role === 'Admin' ? 3 : this.role === 'Staff' ? 2 : 1,
          password: this.password
        }
        console.log(body)
        await axios.post(url, body)
          .then(() => {
            this.$q.notify({
              type: 'success',
              message: 'User created successfully'
            })
            this.$router.push({ name: 'users' })
          })
      } else if (exists) {
        this.$q.notify({
          type: 'warning',
          message: 'User already exists'
        })
      } else {
        this.$q.notify({
          type: 'warning',
          message: 'Please fill all fields'
        })
      }
    },

    onReset () {
      this.username = ''
      this.email = ''
      this.role = ''
      this.password = ''
    },

    validateForm () {
      if (this.username === '' || this.email === '' || this.role === '' || this.password === '') {
        return false
      }
      return true
    },

    async getUsers () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getUsers}`
      await axios.get(url)
        .then(response => {
          this.users = response.data.data
        })
        .catch(error => {
          this.$q.notify({
            type: 'error',
            message: error
          })
        })
    }
  },

  mounted () {
    this.getUsers()
  }
}
</script>
