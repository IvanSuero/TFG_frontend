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
import mainMenuItemsList from 'src/utils/menuItemsList'

export default defineComponent({
  name: 'CommonHeader',
  components: {
    NavBar,
    SideBar
  },
  data () {
    return {
      drawer: false,
      linksList: mainMenuItemsList
    }
  },
  methods: {
    onDrawerModify () {
      this.drawer = !this.drawer
    }
  }
})
</script>
