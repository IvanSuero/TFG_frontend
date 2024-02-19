<template>
  <q-page>
    <div>
      <q-dialog
        v-model="addPopup"
        @update:model-value="$emit('closePopup')"
      >
        <AddPopup :cols="columns" /> <!--editable and empty-->
      </q-dialog>

      <q-dialog
        v-model="editPopup"
        @update:model-value="$emit('closePopup')"
      >
        <!--editable and filled with data-->
        <EditPopup
          :cols="columns"
          :item="items[0]"
        />
      </q-dialog>

      <q-dialog
        v-model="viewPopup"
        @update:model-value="$emit('closePopup')"
      >
        <!--not editable and filled with data-->
        <ViewPopup
          :cols="columns"
          :items="items"
        />
      </q-dialog>

      <q-dialog
        v-model="inventoryPopup"
        @update:model-value="$emit('closePopup')"
      >
        <!--custom popup-->
        <InventoryPopup />
      </q-dialog>
    </div>
  </q-page>
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
  emits: ['closePopup'],

  data () {
    return {
      addPopup: this.alert === 'add',
      editPopup: this.alert === 'edit',
      viewPopup: this.alert === 'view',
      inventoryPopup: this.alert === 'inventory',
      columns: this.cols,
      items: this.selected,
      title: this.alert.toUpperCase()
    }
  }
})

</script>
