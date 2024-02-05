<template>
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
