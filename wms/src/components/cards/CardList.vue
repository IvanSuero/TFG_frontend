<template>
  <div class="card-list">
    <CardItem v-for="item in items" :key="item.name" :item="item" />
    <CardItem v-show="showBackButton" :item="{name: 'Back', icon: 'arrow_left', path: 'areas'}" />
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
    items: {
      type: Array[Object],
      default: () => []
    },
    showBackButton: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {
      CardItem
    }
  }
})
</script>
