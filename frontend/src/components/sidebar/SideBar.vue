<template>
  <div class="sideBar">
    <q-btn flat round :icon="'close'" class="closeBtn" size="20px" @click="closeDrawer()"/>
    <h3 id="logo">.WMS</h3>
    <q-list class="sidebarList">
      <SideBarItem
        v-for="item in linksList"
        :key="item.name"
        :item="item"
      />
    </q-list>
  </div>
</template>

<style scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  background-color: #EBF1F3;
}
.closeBtn{
  padding: 25px;
  align-self: flex-end;
}

.sidebarList *:last-child {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
}

.sideBar * {
  margin: 0;
}

.q-list{
  margin-top: 20px;
}

#logo{
  text-align: center;
  font-size: 45px;
  font-weight: bold;
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
      type: Object,
      default: () => {}
    }
  },
  emit: ['drawerModify'],
  methods: {
    closeDrawer () {
      this.$emit('drawerModify')
    }
  }
})
</script>
