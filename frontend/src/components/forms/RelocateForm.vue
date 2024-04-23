<template>
  <q-form @submit="onSubmit" @reset="onReset" class="formHeader">
    <q-input
      outlined
      filled
      label="Label"
      v-model="relocateLabel"
      lazy-rules
      :rules="[val => val !== '' || 'Please fill all fields']"
    />
    <q-input
      outlined
      filled
      label="Location"
      v-model="relocateLocation"
      lazy-rules
      :rules="[val => val !== '' || 'Please fill all fields']"
    />
    <q-btn
      label="Relocate"
      color="green"
      @click="relocate"
    />
  </q-form>
</template>

<script>
import axios from 'axios'
import apiPathUrl from 'src/config/apiPathUrl'

export default {
  data () {
    return {
      relocateLabel: '',
      relocateLocation: ''
    }
  },
  methods: {
    async relocate () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.relocate}`
      const body = {
        label: this.relocateLabel,
        location: this.relocateLocation
      }
      await axios.post(url, body)
        .then(response => {
          if (response.status === 200) {
            this.$q.notify({
              color: 'positive',
              message: 'Located correctly',
              icon: 'check',
              timeout: 1000
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.formHeader {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
