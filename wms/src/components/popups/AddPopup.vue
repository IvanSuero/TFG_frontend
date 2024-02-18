<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <q-form @submit="submit">
        <q-input
          v-model="reference"
          label="Reference"
          outlined
          dense
          clearable
        />
        <q-input
          v-model="name"
          label="Name"
          outlined
          dense
          clearable
        />
        <q-input
          v-model="age"
          label="Age"
          outlined
          dense
          clearable
        />
        <q-input
          v-model="country"
          label="Country"
          outlined
          dense
          clearable
        />
        <q-btn
          type="submit"
          label="Submit"
          color="primary"
          class="q-mt-md"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  data () {
    return {
      reference: '',
      name: '',
      age: '',
      country: ''
    }
  },
  methods: {
    submit () {
      const newAdd = {
        reference: this.reference,
        name: this.name,
        age: this.age,
        country: this.country
      }
      console.log(newAdd)
    }
  }
}
</script>
