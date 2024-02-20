<template>
  <q-page>
    <div>
      <q-dialog
        v-model="openPopup"
        @update:model-value="$emit('closePopup')"
      >
        <q-card class="popup">
          <!--q-section title-->
          <q-card-section class="title">
            {{ title }}
          </q-card-section>
          <q-card-section class="card-section">
            <component
              :is="popup"
              :cols="columns"
              :item="items[0]"
              :items="items"
            />
          </q-card-section>
        </q-card>
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
import DeletePopup from 'src/components/popups/DeletePopup.vue'

export default defineComponent({
  name: 'ActionLayout',

  components: {
    AddPopup,
    EditPopup,
    ViewPopup,
    InventoryPopup,
    DeletePopup
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
      columns: this.cols,
      items: this.selected,
      openPopup: this.alert !== '',
      popup: this.getPopup(),
      title: this.alert.toUpperCase() + ' ' + this.$route.meta.title.toUpperCase()
    }
  },

  methods: {
    getPopup () {
      switch (this.alert) {
        case 'add':
          return 'AddPopup'
        case 'edit':
          return 'EditPopup'
        case 'view':
          return 'ViewPopup'
        case 'inventory':
          return 'InventoryPopup'
        case 'delete':
          return 'DeletePopup'
        default:
          return ''
      }
    }
  }
})

</script>

<style>
.popup {
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 20px;
  padding: 10px;
  text-align: center;
  padding: 20px 0 0 0;
}
</style>
