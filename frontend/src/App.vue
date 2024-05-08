<template>
  <router-view />
</template>

<script setup>
import { watch, onBeforeMount } from 'vue'
import { Cookies } from 'quasar'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const route = useRoute()

const checkCookies = () => {
  if (!Cookies.has('token')) router.push('/login')
  else axios.defaults.headers.common = { 'auth-token': Cookies.get('token') }
}

onBeforeMount(() => {
  checkCookies()
})

watch(route, () => {
  checkCookies()
})
</script>
