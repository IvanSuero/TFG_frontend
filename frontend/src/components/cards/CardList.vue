<template>
  <div class="card-list">
    <CardItem v-for="item in items" :key="item.name" :item="item" />
  </div>
</template>

<style>
.card-list{
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
      type: Object,
      default: () => {}
    }
  },
  setup () {
    return {
      CardItem
    }
  },

  mounted () {
    console.log(this.items)
  }
})
</script>
