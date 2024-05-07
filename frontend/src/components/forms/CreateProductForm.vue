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
import apiPathUrl from '../../config/apiPathUrl'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  data () {
    return {
      reference: '',
      stock: 0,
      description: '',
      weight: 0,
      volume: 0,
      products: ref([]),
      $q: useQuasar()
    }
  },
  methods: {
    async onSubmit () {
      const map = this.products.map(product => product.reference)
      const exists = map.includes(this.reference)

      if (!exists) {
        const url = `${apiPathUrl.backend}/${apiPathUrl.createProduct}`
        const body = {
          reference: this.reference,
          stock: this.stock,
          description: this.description,
          weight: this.weight,
          volume: this.volume
        }
        await (axios.post(url, body))
          .then(() => {
            this.$router.push({ name: 'inventory' })
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'check',
              message: 'Product created successfully'
            })
          })
      } else if (exists) {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'report_problem',
          message: 'Product already exists'
        })
      } else {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'report_problem',
          message: 'Please fill all fields'
        })
      }
    },

    onReset () {
      this.reference = ''
      this.stock = 0
      this.description = ''
      this.weight = 0
      this.volume = 0
    },

    async getItems () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getProducts}`
      await axios.get(url)
        .then(response => {
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.getItems()
  }
}
</script>
