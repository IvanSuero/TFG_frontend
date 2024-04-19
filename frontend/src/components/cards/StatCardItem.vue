<template>
  <q-card class="stat" clickable @click="goToRoute()">
    <q-card-section>
      <!--number of products-->
      <div class="text-h6"
        :style="{color: item.value.type==='percentage' ? (item.value.value>=90 ? 'green' :  (item.value.value>=70 ? 'orange' : 'red')) : '' }"
      >
        <span>{{ item.value.value }}</span>
        <span v-if="item.value.type === 'percentage'">%</span>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">{{ item.name }}</div>
    </q-card-section>
  </q-card>
</template>

<style>
.stat{
  width: 200px;
  height: 80px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  color: black;
}
</style>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StatCardItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})
</script>
