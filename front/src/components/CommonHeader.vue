<template>
  <q-header elevated>
      <NavBar :drawer="drawer" @drawer-modify="onDrawerModify"/>
    </q-header>

    <q-drawer v-model="drawer" side="left" content-class="bg-grey-2">
      <SideBar ref="sideBar" v-bind:linksList="linksList" active="Home"/>
    </q-drawer>
</template>

<script>

import { defineComponent } from 'vue'
import NavBar from 'src/components/NavBar.vue'
import SideBar from 'src/components/SideBar/SideBar.vue'
import linksList from 'src/utils/sideBarItemsList'

export default defineComponent({
  name: 'CommonHeader',
  components: {
    NavBar,
    SideBar
  },
  data () {
    return {
      drawer: false,
      linksList
    }
  },
  methods: {
    onDrawerModify () {
      this.drawer = !this.drawer
    }
  }
})
</script>
