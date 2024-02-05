<template>
    <q-toolbar>
        <q-btn flat round dense :icon="drawer ? 'close' : 'menu'" @click="modifyDrawer" />
        <q-toolbar-title>
          <router-link to="/" class="text-white">.WMS</router-link>
        </q-toolbar-title>
      </q-toolbar>
</template>

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
  }
})
</script>
