<template>
  <div class="sideBar">
    <q-btn flat round :icon="'close'" class="closeBtn" size="20px" @click="closeDrawer()"/>
    <h3 id="logo">.WMS</h3>
    <q-list class="sidebarList">
      <SideBarItem
        v-for="item in props.linksList"
        :key="item.name"
        :item="item"
      />
    </q-list>
  </div>
</template>

<script setup>
import SideBarItem from './SideBarItem.vue'

const props = defineProps({
  linksList: Object
})

const emit = defineEmits(['drawerModify'])

const closeDrawer = () => {
  emit('drawerModify')
}
</script>

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
