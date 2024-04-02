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
  background-color: var(--success-color);
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  color: var(--primary-color);
}
.card:hover{
  background-color: var(--info-color);
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
      this.$router.push({ name: this.item.url })
    }
  },
  mounted () {
    console.log(this.item)
  }
})
</script>
