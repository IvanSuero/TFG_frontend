<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input type="text" v-model="reference" label="Reference" filled lazy-rules mask="X-###-###-###" />
      <q-input v-model="description" label="Description" type="text" filled lazy-rules/>
      <q-input v-model="stock" label="Initial stock" type="number" filled lazy-rules/>
      <q-input v-model="stock" label="Initial stock" type="number" filled lazy-rules/>
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
import axios from 'axios'
import apiPathUrl from '../config/apiPathUrl'
import { useQuasar } from 'quasar'

export default {
  data () {
    return {
      reference: '',
      stock: 0,
      description: '',
      products: [],
      $q: useQuasar()
    }
  },
  methods: {
    async onSubmit () {
      this.getItems()
      const exists = this.products.find(product => product.reference === this.reference)

      console.log(exists)

      if (!exists && this.validateForm()) {
        const url = 'http://localhost:3000/products'
        const body = {
          reference: this.reference,
          stock: this.stock,
          description: this.description
        }
        console.log(body)
        await axios.post(url, body)
          .then(() => {
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'check',
              message: 'Product created successfully'
            })
          })
      } else if (this.products.find(product => product.reference === this.reference)) {
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
    },

    validateForm () {
      if (this.reference === '' || this.description === '' || this.stock === '') {
        return false
      }
      return true
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
  }
}
</script>
