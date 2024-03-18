<template>
  <q-header class="bg-primary text-white">
    <CommonNavBar :drawer="drawer" @drawer-modify="onDrawerModify"/>
  </q-header>

  <q-drawer v-model="drawer" side="right" overlay behavior="mobile" bordered content-class="bg-grey-2">
    <SideBar ref="sideBar" v-bind:linksList="linksList" @drawer-modify="onDrawerModify"/>
  </q-drawer>
</template>

<script>

import { defineComponent } from 'vue'
import CommonNavBar from 'src/components/CommonNavBar.vue'
import SideBar from 'src/components/sidebar/SideBar.vue'
import sideBarItems from 'src/utils/sideBarItems'

export default defineComponent({
  name: 'CommonHeader',
  components: {
    CommonNavBar,
    SideBar
  },
  data () {
    return {
      drawer: false,
      linksList: sideBarItems
    }
  },
  methods: {
    onDrawerModify () {
      this.drawer = !this.drawer
    }
  }
})
</script>
