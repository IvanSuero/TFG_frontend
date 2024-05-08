<template>
  <q-card class="stat" clickable @click="goToRoute()">
    <q-card-section>
      <!--number of products-->
      <div class="text-h6"
        :style="{color: props.item.value.type==='percentage' ? (props.item.value.value>=90 ? 'green' :  (props.item.value.value>=70 ? 'orange' : 'red')) : '' }"
      >
        <span>{{ props.item.value.value }}</span>
        <span v-if="props.item.value.type === 'percentage'">%</span>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">{{ props.item.name }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

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
