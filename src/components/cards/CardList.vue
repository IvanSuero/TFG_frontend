<template>
  <div class="card-list">
    <CardItem v-for="item in props.items" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import CardItem from './CardItem.vue'

const props = defineProps({
  items: Object
})
</script>

<style scoped>
.card-list{
  margin: 20px 40PX;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
}
</style>
