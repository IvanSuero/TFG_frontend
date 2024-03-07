<template>
  <q-layout view="hHh lpR fFf">
    <CommonHeader />

    <q-page-container padding>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import CommonHeader from 'src/components/CommonHeader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    CommonHeader
  }
})
</script>
