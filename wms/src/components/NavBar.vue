<template>
  <q-toolbar>
    <q-toolbar-title>
      <h6>{{ title }}</h6>
    </q-toolbar-title>
    <q-btn flat round dense :icon="drawer ? 'close' : 'menu'" @click="modifyDrawer" />
  </q-toolbar>
</template>

<style>
.q-toolbar{
  height: 75px;
  padding: 0 20px 0 50px ;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  emit: ['drawerModify'],
  methods: {
    modifyDrawer () {
      this.$emit('drawerModify')
    }
  },
  data () {
    return {
      title: this.$route.name.toUpperCase()
    }
  }
})
</script>
