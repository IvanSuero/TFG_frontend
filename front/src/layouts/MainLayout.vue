<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <NavBar :drawer="drawer" @drawer-modify="onDrawerModify"/>
    </q-header>

    <q-drawer v-model="drawer" side="left" content-class="bg-grey-2">
      <SideBar ref="sideBar" v-bind:linksList="linksList" active="Home"/>
    </q-drawer>

    <q-page-container padding>

    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import SideBar from 'src/components/SideBar/SideBar.vue'
import NavBar from 'src/components/NavBar.vue'
import linksList from 'src/utils/sideBarItemsList.js'

export default defineComponent({
  name: 'MainLayout',
  components: {
    SideBar,
    NavBar
  },
  data () {
    return {
      drawer: true,
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
