<template>
  <q-header class="bg-primary text-white">
    <NavBar :drawer="drawer" @drawer-modify="onDrawerModify"/>
  </q-header>

  <q-drawer v-model="drawer" side="right" overlay behavior="mobile" bordered content-class="bg-grey-2">
    <SideBar ref="sideBar" v-bind:linksList="linksList" active="Home" @drawer-modify="onDrawerModify"/>
  </q-drawer>
</template>

<script>

import { defineComponent } from 'vue'
import NavBar from 'src/components/NavBar.vue'
import SideBar from 'src/components/sidebar/SideBar.vue'

export default defineComponent({
  name: 'CommonHeader',
  components: {
    NavBar,
    SideBar
  },
  data () {
    return {
      drawer: false,
      linksList: [
        { name: 'Home', icon: 'home', to: '/' },
        { name: 'About', icon: 'info', to: '/about' },
        { name: 'Contact', icon: 'mail', to: '/contact' }
      ]
    }
  },
  methods: {
    onDrawerModify () {
      this.drawer = !this.drawer
    }
  }
})
</script>
