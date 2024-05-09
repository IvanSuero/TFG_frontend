<template>
  <q-form @submit="onSubmit" @reset="onReset" class="formHeader">
      <q-input type="text" v-model="reference" label="Reference" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="description" label="Description" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="stock" label="Initial stock" type="number" filled lazy-rules :rules="[val => val >= 0 || 'Please enter a positive number']" />
      <q-input v-model="weight" label="Weight" type="number" filled lazy-rules :rules="[val => val >= 0 || 'Please enter a positive number']" />
      <q-input v-model="volume" label="Volume" type="number" filled lazy-rules :rules="[val => val >= 0 || 'Please enter a positive number']" />
      <div class="addFormButtons">
        <q-btn label="Submit" color="green" type="submit" />
        <q-btn label="Reset" color="warning" type="reset" />
      </div>
    </q-form>
</template>

<script setup>
import axios from 'axios'
import apiPathUrl from '../../config/apiPathUrl'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const reference = ref('')
const stock = ref(0)
const description = ref('')
const weight = ref(0)
const volume = ref(0)
const $q = useQuasar()

const onSubmit = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.createProduct}`
  const body = {
    reference: reference.value,
    stock: stock.value,
    description: description.value,
    weight: weight.value,
    volume: volume.value
  }
  await (axios.post(url, body))
    .then(() => {
      $q.notify({
        type: 'success',
        message: 'Product created successfully'
      })
    }).catch(error => {
      $q.notify({
        type: 'error',
        message: error.message
      })
    })
}

const onReset = () => {
  reference.value = ''
  stock.value = 0
  description.value = ''
  weight.value = 0
  volume.value = 0
}
</script>

<style scoped>
.addFormButtons {
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
}
.formHeader {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
