<template>
    <q-item :active="active" :id="item.title==='Disconnect' ? 'logout' : ''">
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
  }
}
</script>
