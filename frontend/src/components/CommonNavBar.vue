<template>
  <q-toolbar class="header">
    <q-toolbar-title>
      <div class="title">
        <h6 v-if="title !== 'Areas'"><a @click="this.$router.push('/')">Home</a> / {{ title }}</h6>
        <h6 v-else>.WMS</h6>
      </div>
    </q-toolbar-title>
    <q-btn flat round dense :icon="drawer ? 'close' : 'menu'" @click="modifyDrawer" size="20px" />
  </q-toolbar>
</template>

<style>
.header {
  background-color: var(--success-color);

  /* Azul claro */
  color: var(--primary-color);
  /* Texto blanco */
}

.title{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  width: 100%;
  padding: 0;
  color: white;
}

.q-toolbar{
  height: 75px;
  padding: 0 20px 0 50px ;
}
.title{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.title h6{
  width: fit-content;
  padding: 0 10px;
}
.title a:hover{
  cursor: pointer;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonNavBar',
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
      title: ''
    }
  },

  mounted () {
    this.title = this.$route.meta.title
  },

  watch: {
    $route () {
      this.title = this.$route.meta.title
    }
  }
})
</script>
