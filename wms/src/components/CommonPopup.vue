<template>
  <div>
    <q-dialog v-model="addPopup" persistent>
      <AddPopup :cols="columns"/> <!--editable and empty-->
    </q-dialog>

    <q-dialog v-model="editPopup"> <!--editable and filled with data-->
      <EditPopup :cols="columns" :item="items[0]"/>
    </q-dialog>

    <q-dialog v-model="viewPopup"> <!--not editable and filled with data-->
      <ViewPopup />
    </q-dialog>

    <q-dialog v-model="inventoryPopup"> <!--custom popup-->
      <InventoryPopup />
    </q-dialog>
  </div>
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
    },
    cols: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      addPopup: this.alert === 'add',
      editPopup: this.alert === 'edit',
      viewPopup: this.alert === 'view',
      inventoryPopup: this.alert === 'inventory',
      columns: this.cols,
      items: this.selected
    }
  }
})

</script>
