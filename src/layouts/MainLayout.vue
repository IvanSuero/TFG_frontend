<template>
  <q-layout view="hHh lpR fFf">
    <CommonHeader />
    <q-page-container padding class="q-gutter-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import CommonHeader from 'src/components/CommonHeader.vue'
</script>
