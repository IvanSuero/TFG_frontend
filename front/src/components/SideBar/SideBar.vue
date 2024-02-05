<template>
  <h3 id="logo">.WMS</h3>
  <q-list>
      <SideBarItem
          v-for="item in linksList"
          :key="item.title"
          :item="item"
          :active="item.title === active"
      />
  </q-list>
</template>

<style scoped>
.q-list {
  margin-top: 20px;
}
#logo{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 45px;
  color: black;
}
</style>

<script>
import { defineComponent } from 'vue'
import SideBarItem from './SideBarItem.vue'

export default defineComponent({
  name: 'SideBar',
  components: {
    SideBarItem
  },
  props: {
    linksList: {
      type: Array,
      default: () => []
    },
    active: {
      type: String,
      default: ''
    }
  }
})
</script>
