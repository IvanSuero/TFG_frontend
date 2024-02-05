<template>
    <q-item :active="active" :id="item.title==='Disconnect' ? 'logout' : ''" @click="goToRoute()" clickable>
        <q-item-section avatar>
            <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<style>
#logout {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
}
.q-item:hover{
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 5px;
  transition: 0.3s;
  scale: 1.1;
}
</style>

<script>
export default {
  name: 'SideBarItem',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToRoute () {
      this.$router.push(this.item.link)
    }
  }
}
</script>
