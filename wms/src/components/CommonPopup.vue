<template>
    <q-dialog v-model="addPopup">
      <AddPopup />
    </q-dialog>

    <q-dialog v-model="editPopup">
      <EditPopup />
    </q-dialog>

    <q-dialog v-model="viewPopup">
      <ViewPopup />
    </q-dialog>

    <q-dialog v-model="inventoryPopup">
      <InventoryPopup />
    </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import AddPopup from 'src/components/popups/AddPopup.vue'
import EditPopup from 'src/components/popups/EditPopup.vue'
import ViewPopup from 'src/components/popups/ViewPopup.vue'
import InventoryPopup from 'src/components/popups/InventoryPopup.vue'

export default defineComponent({
  name: 'ActionLayout',

  components: {
    AddPopup,
    EditPopup,
    ViewPopup,
    InventoryPopup
  },

  props: {
    alert: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      addPopup: this.alert === 'add',
      editPopup: this.alert === 'edit',
      viewPopup: this.alert === 'view',
      inventoryPopup: this.alert === 'inventory'
    }
  }
})

</script>
