<template>
  <q-layout view="hHh Lpr lFf">
    <CommonHeader />
    <q-page-container>
      <CardList v-bind:mainMenuItemsList="getAreaItemsList()"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import CommonHeader from 'src/components/CommonHeader.vue'
import CardList from 'src/components/Cards/CardList.vue'
import menuItemsList from 'src/utils/menuItemsList'

export default defineComponent({
  name: 'ClientsLayout',
  components: {
    CommonHeader,
    CardList
  },
  data () {
    return {
      menuItemsList
    }
  },
  methods: {
    getAreaItemsList () {
      return this.menuItemsList.areaItemsList.filter(item => item.area === this.$route.name)
    }
  }
})
</script>
