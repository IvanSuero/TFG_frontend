<template>
  <div class="card-list">
    <CardItem v-for="item in mainMenuItemsList" :key="item.name" :item="item" />
  </div>
</template>

<style>
.card-list{
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
</style>

<script>
import { defineComponent } from 'vue'
import CardItem from './CardItem.vue'

export default defineComponent({
  name: 'CardList',
  components: {
    CardItem
  },
  props: {
    mainMenuItemsList: {
      type: Array[Object],
      default: () => []
    }
  },
  setup () {
    return {
      CardItem
    }
  }
})
</script>
