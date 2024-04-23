<template>
  <div class="labels-page">
    <!-- Table for location zones -->
    <div class="tableHeader">
      <q-btn
        label="Reset filters"
        color="orange"
        @click="resetFilters"
      />
      <q-btn
        label="Relocate"
        color="blue"
        @click="relocate"
      />
      <q-btn
        label="New"
        color="green"
        @click="goToNewLocation"
      />
    </div>
    <div class="row-tables">
    <q-table
        style="height: 200px"
        class="zones-table cursor-pointer"
        flat
        bordered
        :rows="zoneRows"
        :pagination="pagination"
        :columns="zoneColumns"
        :row-key="row => row.id"
        virtual-scroll
        hide-bottom
      >
      <!-- Table content for location zones -->
      <template #body="props">
        <q-tr :props="props" @click="clickRowZones(props.row)"
            :style="{ backgroundColor: props.row.name === selectedZone ? '#D2E3E0' : '' }">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
        </q-tr>
      </template>

    </q-table>

      <!-- Table for locations of the selected zone -->
      <q-table
        style="height: 200px"
        class="locations-table cursor-pointer"
        flat
        bordered
        :rows="locationRows"
        :pagination="pagination"
        :columns="locationColumns"
        :row-key="row => row.id"
        virtual-scroll
        hide-bottom
      >
        <!-- Table content for locations of the selected zone -->
        <template #body="props">
        <q-tr :props="props" @click="clickRowLocations(props.row)"
            :style="{ backgroundColor: props.row.location === selectedLocation ? '#D2E3E0' : '' }">
          <q-td key="location" :props="props">
            {{ props.row.location }}
          </q-td>
          <q-td key="zone" :props="props">
            {{ props.row.zone }}
          </q-td>
          <q-td key="volume" :props="props">
            {{ props.row.volume }}
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
      <!-- Table for items inside the selected location-->
      <q-table
        style="height: 400px"
        :rows="labelRows"
        :columns="labelColumns"
        :pagination="pagination"
        row-key="id"
        class="labels-table cursor-pointer"
        flat
        hide-bottom
        bordered
        virtual-scroll
      >
      </q-table>

    <q-dialog v-model="createPopup">
      <CommonPopup title="Create Location" type="location"/>
    </q-dialog>

    <q-dialog v-model="relocatePopup">
      <CommonPopup title="Relocate Label" type="relocate"/>
    </q-dialog>
  </div>
</template>

<style>
.sticky-header-table {
  height: 100%;
  font-size: 14px;
  background-color: #f5f5f5;
}

.sticky-header-table .q-table__top, .q-table__bottom, thead tr:first-child th {
  background-color: #EBF1F3;
  font-size: 14px;
}

thead tr th{
  position: sticky;
  z-index: 1;
}

thead tr:first-child th{
  top: 0;
}

.tableHeader {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5rem;
  gap: 1rem;
  align-items: flex-start;
}

.labels-page {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.row-tables {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 40%;
}

.zones-table{
  width: 15%;
}
.locations-table{
  width: 75%;
  box-shadow: none;
}

.labels-table {
  width: 90%;
  height: 50%;
  box-shadow: none;
}

.buttonsList {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-right: 5rem;
  gap: 1rem;
}

</style>

<script>

import { defineComponent, ref } from 'vue'
import apiPathUrl from '../config/apiPathUrl'
import axios from 'axios'
import CommonPopup from '../components/CommonPopup.vue'

export default defineComponent({
  name: 'LabelsPage',
  components: {
    CommonPopup
  },
  setup () {
    // Data for location zones
    const zoneRows = ref([])
    // Columns for location zones table
    const zoneColumns = [
      { name: 'name', label: 'Zone', align: 'center', field: 'name' }
    ]
    // Data for locations of the selected zone
    const allLocations = ref([])
    // Columns for locations of the selected zone table
    const locationColumns = [
      { name: 'location', label: 'Location', align: 'left', field: 'location' },
      { name: 'zone', label: 'Zone', align: 'left', field: 'zone' },
      { name: 'volume', label: 'Volume', align: 'center', field: 'volume' }
    ]

    const locationRows = ref([])

    const allLabels = ref([])

    const labelColumns = [
      { name: 'label', label: 'Label', align: 'left', field: 'label' },
      { name: 'product', label: 'Product', align: 'left', field: 'product' },
      { name: 'location', label: 'Location', align: 'left', field: 'location' },
      { name: 'quantity', label: 'Quantity', align: 'center', field: 'quantity' }
    ]

    const labelRows = ref([])

    return {
      zoneRows,
      locationColumns,
      allLocations,
      zoneColumns,
      locationRows,
      labelColumns,
      allLabels,
      labelRows,
      selectedZone: '',
      selectedLocation: '',
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      },
      createPopup: ref(false),
      relocatePopup: ref(false)
    }
  },

  methods: {
    clickRowZones (row) {
      if (this.selectedZone === row.name) {
        this.selectedZone = ''
        this.selectedLocation = ''
        this.locationRows = this.allLocations
        this.labelRows = this.allLabels
        return
      }
      if (this.selectedLocation !== '') {
        this.selectedLocation = ''
        this.labelRows = this.allLabels
      }
      this.locationRows = this.allLocations.filter(location => location.zone === row.name)
      this.labelRows = this.allLabels.filter(label => this.locationRows.find(location => location.location === label.location))
      this.selectedZone = row.name
    },

    clickRowLocations (row) {
      if (this.selectedLocation === row.location) {
        this.selectedLocation = ''
        this.labelRows = this.allLabels
        return
      }
      this.labelRows = this.allLabels.filter(label => label.location === row.location)
      this.selectedLocation = row.location
    },

    resetFilters () {
      this.selectedZone = ''
      this.selectedLocation = ''
      this.locationRows = this.allLocations
      this.labelRows = this.allLabels
    },

    relocate () {
      this.relocatePopup = true
    },

    goToNewLocation () {
      this.createPopup = true
    },

    async getZones () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getZones}`
      await axios.get(url)
        .then(response => {
          this.zoneRows = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getLocations () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getLocations}`
      await axios.get(url)
        .then(response => {
          this.locationRows = response.data.data
          this.allLocations = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getLabels () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getLabels}`
      await axios.get(url)
        .then(response => {
          this.labelRows = response.data.data
          this.allLabels = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.getZones()
    this.getLocations()
    this.getLabels()
  }
})

</script>
