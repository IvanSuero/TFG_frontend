<template>
  <q-item @click="goToRoute()" clickable>
      <q-item-section avatar>
          <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
          <q-item-label v-if="item.type!=='profile'">{{ item.name }}</q-item-label>
          <q-item-label v-else>{{ username }}</q-item-label>
      </q-item-section>
  </q-item>
</template>

<style>
.q-item:hover{
  cursor: pointer;
  background-color: #C5D7DD;
  border-radius: 20px;
  transition: 0.3s;
  scale: 1.05;
}
</style>

<script>
import { Cookies } from 'quasar'

export default {
  name: 'SideBarItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      username: Cookies.get('username')
    }
  },
  methods: {
    goToRoute () {
      switch (this.item.type) {
        case 'link':
          this.$router.push(this.item.url)
          break
        case 'logout':
          Cookies.remove('token')
          Cookies.remove('username')
          this.$router.push('/login')
          break
        case 'profile':
          break
        default:
          this.$router.push(this.item.url)
      }
    }
  }
}
</script>
