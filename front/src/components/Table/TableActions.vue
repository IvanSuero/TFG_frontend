<template>
  <div class="q-pa-md">
    <q-table
      class="sticky-header-table"
      flat bordered
      title="Products"
      :rows="rows"
      :columns="columns.columns"
      :row-key="columns.name"
      :visible-columns="visibleColumns"
    >

      <template v-slot:top-left>
        <q-input dense debounce="300" v-model="filter" label="Search" outlined>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-right>
        <q-btn-dropdown
          square
          outline
          :label="actions"
          style="color: black"
          menu-anchor="bottom start"
          menu-self="top start"
          content-style="margin-top: 0.5rem !important; border-radius: 0px !important"
          content-class="border-almostBlack"
          unelevated
          class="commonTableTop__dropdown topBar__button"
        >
          <q-list class="dropdownBtn__container">
            <div
              v-for="button in columns.actions"
              :key="button.name"
              class="bg-waiting"
            >
              <q-btn
                class="dropdown__btn justify_start text_start"
                :label="button.label"
                :key="button.name"
                flat
                @click="activeAction(button)"
              >
              </q-btn>

            </div>
          </q-list>
        </q-btn-dropdown>
        <q-select
          class="q-ml-md"
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns.columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>

    </q-table>
    <div class="q-mt-md">
      <CommonPopup v-if="showAddPopup" isOpen="showPopup" popupTitle="Add" @closePopup="closePopup">
        <q-form>
          <q-input v-for="item in columns.columns" :key="item.name" :label="item.label" />
          <div style="display: flex; gap: 1rem; padding-top: 1.5rem;">
            <q-btn
              :label="getLabelBtn('add', false)"
              color="negative"
              @click="closePopup"
            ></q-btn>
            <q-btn
              :label="getLabelBtn('add', true)"
              color="secondary"
              @click="closePopup"
            ></q-btn>
          </div>
        </q-form>
      </CommonPopup>
      <CommonPopup v-if="showViewPopup" isOpen="showPopup" popupTitle="View" @closePopup="closePopup">
        <q-form>
          <q-input v-for="item in columns.columns" :key="item.name" :label="item.label" class="non-editable"
            :readonly="true"/>
          <div style="display: flex; gap: 1rem; padding-top: 1.5rem;">
            <q-btn
              :label="getLabelBtn('view', true)"
              color="warning"
              @click="closePopup"
            ></q-btn>
          </div>
        </q-form>
      </CommonPopup>
    </div>
  </div>
</template>

<style>
.sticky-header-table {
  overflow-x: auto;
  max-height: 500px;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.q-table__top, .q-table__bottom, thead tr:first-child th{
  background-color: whitesmoke;
}
thead tr th{
  position: sticky;
  z-index: 1;
}
thead tr:first-child th{
  top: 0;
}
tbody{
  scroll-margin-top: 48px;
}
.topBar__button{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.dropdownBtn__container > div:last-child{
  border-bottom: 0px;
}
.dropdownBtn__container > div{
  border-bottom: 0.7px solid black;
}
.bg-waiting{
  background-color: white;
}
.dropdown__btn{
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.justify_start{
  justify-content: flex-start;
}
</style>

<script>

import { defineComponent, ref } from 'vue'
import CommonPopup from 'src/components/CommonPopup.vue'

export default defineComponent({
  name: 'TableActions',
  components: {
    CommonPopup
  },
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      visibleColumns: this.columns.columns.map(col => col.name),
      filter: ref(''),
      actions: ref('Actions'),
      showAddPopup: ref(false),
      showViewPopup: ref(false)
    }
  },
  methods: {
    activeAction (button) {
      if (button.name === 'add') {
        this.showAddPopup = true
      } else if (button.name === 'view') {
        this.showViewPopup = true
      }
    },
    closePopup () {
      this.showAddPopup = false
      this.showViewPopup = false
    },
    getLabelBtn (title, confirm) {
      if (confirm) return this.columns.actions.filter(action => action.name === title)[0].buttons[0].confirmBtn
      else return this.columns.actions.filter(action => action.name === title)[0].buttons[0].cancelBtn
    }
  },
  emits: ['closePopup']
})
</script>
