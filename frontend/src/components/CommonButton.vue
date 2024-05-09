<template>
  <div>
    <q-btn color="blue-grey-5" :icon="props.icon">
      <q-tooltip>{{ props.message }}</q-tooltip>
    </q-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  icon: String
})
</script>
