<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-select v-model="type" filled :options="options" label="Type" lazy-rules></q-select>
      <q-input v-show="activeForm" v-model="zoneName" label="Zone Name" type="text" filled lazy-rules/>
      <q-input v-show="!activeForm" v-model="LocationName" label="Location Name" type="text" filled lazy-rules/>
      <q-input v-show="!activeForm" v-model="LocationVolume" label="Volume" type="number" filled lazy-rules/>
      <q-select v-model="locationZone" v-show="!activeForm" label="Location Zone" filled lazy-rules :options="zoneOptions"></q-select>
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
</style>

<script>
export default {
  data () {
    return {
      activeForm: false,
      type: 'Location',
      zoneName: '',
      LocationName: '',
      LocationVolume: 0,
      options: [
        {
          label: 'Zone',
          value: 'Zone'
        },
        {
          label: 'Location',
          value: 'Location'
        }
      ],
      zoneOptions: [
        {
          label: 'Zone 1',
          value: 'Zone 1'
        },
        {
          label: 'Zone 2',
          value: 'Zone 2'
        }
      ],
      locationZone: ''
    }
  },
  methods: {
    async onSubmit () {
      console.log(this.type, this.zoneName, this.LocationName, this.LocationVolume)
    },

    onReset () {
      this.type = ''
      this.zoneName = ''
      this.LocationName = ''
      this.LocationVolume = 0
    },

    validateForm () {
      if (this.type === 'Zone' && this.zoneName === '') {
        return false
      } else if (this.type === 'Location' && (this.LocationName === '' || this.LocationVolume === 0)) {
        return false
      }
      return true
    }
  },

  watch: {
    type () {
      this.activeForm = !this.activeForm
    }
  }
}
</script>
