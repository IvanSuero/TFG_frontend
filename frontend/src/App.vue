<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { Cookies } from 'quasar'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'App',

  data () {
    const router = useRouter()
    return {
      router
    }
  },

  methods: {
    checkCookies () {
      console.log(Cookies.get('token'))
      if (!Cookies.has('token')) {
        this.router.push('/login')
      } else {
        axios.defaults.headers.common = { 'auth-token': Cookies.get('token') }
      }
    }
  },

  beforeMount () {
    this.checkCookies()
  },

  watch: {
    $route () {
      this.checkCookies()
    }
  }
})
</script>
