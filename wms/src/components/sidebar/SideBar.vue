<template>
  <div class="sideBar">
    <q-btn flat round :icon="'close'" class="closeBtn" size="20px" @click="closeDrawer()"/>
    <h3 id="logo">.WMS</h3>
    <q-list>
      <SideBarItem
        v-for="item in linksList"
        :key="item.name"
        :item="item"
        :active="item.name === active"
      />
    </q-list>
  </div>
</template>

<style scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  background-color: #f5f5f5;
}
.closeBtn{
  padding: 25px;
  align-self: flex-end;
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
    },
    active: {
      type: String,
      default: ''
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
