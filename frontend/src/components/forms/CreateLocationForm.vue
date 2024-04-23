<template>
  <q-form @submit="onSubmit" @reset="onReset" class="formHeader">
    <q-select v-model="type" filled :options="options" label="Type" lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"></q-select>
    <div v-show="zoneForm">
      <q-input v-model="zoneName" label="Zone Name" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
    </div>
    <div v-show="locationForm" class="q-gutter-md">
      <q-input v-model="locationName" label="Location Name" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="locationVolume" label="Volume" type="number" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-select v-model="locationZone" label="Location Zone" filled lazy-rules :options="zoneOptions" :rules="[val => val !== '' || 'Please fill all fields']"></q-select>
    </div>
    <div v-show="labelForm" class="q-gutter-md">
      <q-input v-model="label" label="Label" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="labelProduct" label="Product" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="labelLocation" label="Location" type="text" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
      <q-input v-model="labelQuantity" label="Quantity" type="number" filled lazy-rules :rules="[val => val !== '' || 'Please fill all fields']"/>
    </div>
      <div class="addFormButtons">
        <q-btn label="Submit" color="green" type="submit" />
        <q-btn label="Reset" color="warning" type="reset" />
      </div>
    </q-form>
</template>

<style>
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

<script>
import axios from 'axios'
import apiPathUrl from 'src/config/apiPathUrl'
import { ref } from 'vue'

export default {
  data () {
    return {
      zoneForm: false,
      labelForm: false,
      locationForm: true,
      type: 'Location',
      zoneName: '',
      locationName: '',
      locationVolume: 0,
      locationZone: '',
      label: '',
      labelProduct: '',
      labelLocation: '',
      labelQuantity: 0,
      options: [
        'Zone',
        'Location',
        'Label'
      ],
      zoneOptions: ref([])
    }
  },
  methods: {
    onSubmit () {
      console.log(this.type)
      switch (this.type) {
        case 'Zone':
          this.submitZone()
          break
        case 'Location':
          this.submitLocation()
          break
        case 'Label':
          this.submitLabel()
          break
      }
    },

    async submitZone () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.createZone}`
      const body = {
        name: this.zoneName
      }
      await axios.post(url, body)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async submitLocation () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.createLocation}`
      const body = {
        name: this.locationName,
        zone: this.locationZone,
        volume: this.locationVolume
      }
      await axios.post(url, body)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async submitLabel () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.createLabel}`
      const body = {
        label: this.label,
        product: this.labelProduct,
        location: this.labelLocation,
        quantity: this.labelQuantity
      }
      await axios.post(url, body)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },

    onReset () {
      this.type = ''
      this.zoneName = ''
      this.locationName = ''
      this.locationVolume = 0
    },

    validateForm () {
      if (this.type === 'Zone' && this.zoneName === '') {
        return false
      } else if (this.type === 'Location' && (this.locationName === '' || this.locationVolume === 0)) {
        return false
      }
      return true
    }
  },

  watch: {
    type (val) {
      console.log(val)
      this.zoneForm = val === 'Zone'
      this.locationForm = val === 'Location'
      this.labelForm = val === 'Label'
    }
  }
}
</script>
