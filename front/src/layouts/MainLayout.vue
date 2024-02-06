<template>
  <q-layout view="lHh Lpr lFf">
    <CommonHeader />
    <q-page-container padding>
      <CardList v-bind:mainMenuItemsList="menuItemsList.mainMenuItemsList"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import CardList from 'src/components/Cards/CardList.vue'
import menuItemsList from 'src/utils/menuItemsList'
import CommonHeader from 'src/components/CommonHeader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    CardList,
    CommonHeader
  },
  data () {
    return {
      menuItemsList
    }
  }
})
</script>
