<template>
  <q-item :id="item.name==='Disconnect' ? 'logout' : ''" @click="goToRoute()" clickable>
      <q-item-section avatar>
          <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
          <q-item-label v-if="item.type==='link'">{{ item.name }}</q-item-label>
          <q-select v-else v-model="languageActive" :options="languages" label="Language" color="black" borderless hide-bottom-space dense></q-select>
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
background-color: #C5D7DD;
border-radius: 5px;
transition: 0.3s;
scale: 1.05;
}
</style>

<script>
export default {
  name: 'SideBarItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      languages: [
        { label: 'English', value: 'en' },
        { label: 'Español', value: 'es' }
      ],
      languageActive: 'English'
    }
  },
  methods: {
    goToRoute () {
      if (this.item.type !== 'link') return
      this.$router.push(this.item.url)
    }
  }
}
</script>
