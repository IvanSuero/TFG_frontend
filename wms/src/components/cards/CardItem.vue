<template>
  <q-card class="card" clickable @click="goToRoute()">
    <q-card-section>
      <q-icon :name="item.icon" size="50px"/>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">{{ item.name }}</div>
    </q-card-section>
  </q-card>
</template>

<style>
.card{
  width: 300px;
  height: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.card:hover{
  background-color: #e0e0e0;
  cursor: pointer;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToRoute () {
      this.$router.push(this.item.path)
    }
  }
})
</script>
