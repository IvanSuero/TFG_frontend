<template>
  <q-page padding>
    <div class="q-pa-md">
      <CommonTable selection="single" @submit-selection="onSubmit" label="View"/>
    </div>

    <q-dialog v-model="popup">
      <CommonPopup :selected="selected" :columns="columns" @submit-popup="onSubmitPopup" @close-popup="onClosePopup" :disabled="true"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CommonTable from '../components/CommonTable.vue'
import CommonPopup from '../components/CommonPopup.vue'

export default defineComponent({
  name: 'ProductsPage',

  components: {
    CommonTable,
    CommonPopup
  },

  data () {
    return {
      popup: false,
      selected: [],
      columns: []
    }
  },

  methods: {
    onSubmit (selected, columns) {
      this.selected = selected
      this.columns = columns
      this.popup = true
    },

    onSubmitPopup () {
      console.log('a')
      this.popup = false
    },

    onClosePopup () {
      this.popup = false
    }
  }

})
</script>

<style>
.input-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}

@media (max-width: 768px) {
  .input-container {
    grid-template-columns: 1fr;
  }
}
</style>
