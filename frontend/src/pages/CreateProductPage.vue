<template>
  <div class="q-pa-md" style="max-width: 400px">
    <h4>Create Product</h4>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input v-model="reference" label="Reference" filled lazy-rules />
      <q-input v-model="description" label="Description" type="text" filled lazy-rules />
      <q-input v-model="stock" label="Initial stock" type="number" filled lazy-rules />
      <div class="addFormButtons">
        <q-btn label="Submit" color="green" type="submit" />
        <q-btn label="Reset" color="warning" type="reset" />
      </div>
    </q-form>
  </div>
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
      name: '',
      price: 0,
      image: '',
      brand: '',
      category: '',
      countInStock: 0,
      description: ''
    }
  },
  methods: {
    async submitForm () {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          price: this.price,
          image: this.image,
          brand: this.brand,
          category: this.category,
          countInStock: this.countInStock,
          description: this.description
        })
      })
      const product = await response.json()
      console.log(product)
    }
  }
}
</script>
