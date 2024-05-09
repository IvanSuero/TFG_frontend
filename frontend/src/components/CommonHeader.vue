<template>
  <q-header class="bg-primary text-white">
    <CommonNavBar :drawer="drawer" @drawer-modify="onDrawerModify"/>
  </q-header>

  <q-drawer v-model="drawer" side="right" overlay behavior="mobile" bordered content-class="bg-grey-2">
    <SideBar ref="sideBar" v-bind:linksList="linksList" @drawer-modify="onDrawerModify"/>
  </q-drawer>
</template>

<script setup>

import { ref } from 'vue'
import CommonNavBar from 'src/components/CommonNavBar.vue'
import SideBar from 'src/components/sidebar/SideBar.vue'
import sideBarItems from 'src/utils/sideBarItems'

const drawer = ref(false)
const linksList = ref(sideBarItems)

const onDrawerModify = () => {
  drawer.value = !drawer.value
}
</script>

<style scoped>
.q-header {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  border-bottom: 3px solid #01535c;
}

.q-drawer {
  border-left: 2px solid #ccd3d5;
  border-radius: 50px !important;
}
</style>
