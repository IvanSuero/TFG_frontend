<template>
  <div class="labels-page">
    <!-- Table for location zones -->
    <div class="tableHeader">
      <q-btn
        label="Reset filters"
        color="green"
        @click="resetFilters"
      />
      <q-btn
        label="Relocate"
        color="blue"
        @click="relocate"
      />
      <q-btn
        label="New Label"
        color="blue"
        @click="newLabel"
      />
      <q-btn
        label="New Location"
        color="blue"
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
            :style="{ backgroundColor: props.row.name === selectedLocation ? '#D2E3E0' : '' }">
          <q-td key="name" :props="props">
            {{ props.row.name }}
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
  margin-left: 6rem;
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

export default defineComponent({
  name: 'LabelsPage',
  setup () {
    // Data for location zones
    const zoneRows = [
      { id: 1, name: 'Zone 1' },
      { id: 2, name: 'Zone 2' },
      { id: 3, name: 'Zone 3' },
      { id: 4, name: 'Zone 4' },
      { id: 5, name: 'Zone 5' },
      { id: 6, name: 'Zone 6' }
    ]
    // Columns for location zones table
    const zoneColumns = [
      { name: 'name', label: 'Zone', align: 'center', field: 'name' }
    ]
    // Data for locations of the selected zone
    const allLocations = [
      { id: 1, name: 'Location 1', zone: 'Zone 1', volume: 100 },
      { id: 2, name: 'Location 2', zone: 'Zone 2', volume: 200 },
      { id: 3, name: 'Location 3', zone: 'Zone 3', volume: 300 },
      { id: 4, name: 'Location 4', zone: 'Zone 1', volume: 400 },
      { id: 5, name: 'Location 5', zone: 'Zone 2', volume: 500 },
      { id: 6, name: 'Location 6', zone: 'Zone 3', volume: 600 }
    ]
    // Columns for locations of the selected zone table
    const locationColumns = [
      { name: 'name', label: 'Location', align: 'left', field: 'name' },
      { name: 'zone', label: 'Zone', align: 'left', field: 'zone' },
      { name: 'volume', label: 'Volume', align: 'center', field: 'volume' }
    ]

    const locationRows = ref([
      { id: 1, name: 'Location 1', zone: 'Zone 1', volume: 100 },
      { id: 2, name: 'Location 2', zone: 'Zone 2', volume: 200 },
      { id: 3, name: 'Location 3', zone: 'Zone 3', volume: 300 },
      { id: 4, name: 'Location 4', zone: 'Zone 1', volume: 400 },
      { id: 5, name: 'Location 5', zone: 'Zone 2', volume: 500 },
      { id: 6, name: 'Location 6', zone: 'Zone 3', volume: 600 }
    ])

    const allLabels = [
      { id: 1, label: '12345678', product: 'R-001', location: 'Location 1', quantity: 10 },
      { id: 2, label: '36274637', product: 'R-002', location: 'Location 2', quantity: 20 },
      { id: 3, label: '12345678', product: 'R-001', location: 'Location 3', quantity: 30 },
      { id: 4, label: '36274637', product: 'R-002', location: 'Location 4', quantity: 40 },
      { id: 5, label: '12345678', product: 'R-001', location: 'Location 5', quantity: 50 },
      { id: 6, label: '36274637', product: 'R-002', location: 'Location 6', quantity: 60 },
      { id: 7, label: '12345678', product: 'R-001', location: 'Location 1', quantity: 10 },
      { id: 8, label: '36274637', product: 'R-002', location: 'Location 2', quantity: 20 },
      { id: 9, label: '12345678', product: 'R-001', location: 'Location 3', quantity: 30 },
      { id: 10, label: '36274637', product: 'R-002', location: 'Location 4', quantity: 40 },
      { id: 11, label: '12345678', product: 'R-001', location: 'Location 5', quantity: 50 },
      { id: 12, label: '36274637', product: 'R-002', location: 'Location 6', quantity: 60 }
    ]

    const labelColumns = [
      { name: 'label', label: 'Label', align: 'left', field: 'label' },
      { name: 'product', label: 'Product', align: 'left', field: 'product' },
      { name: 'location', label: 'Location', align: 'left', field: 'location' },
      { name: 'quantity', label: 'Quantity', align: 'center', field: 'quantity' }
    ]

    const labelRows = ref([
      { id: 1, label: '12345678', product: 'R-001', location: 'Location 1', quantity: 10 },
      { id: 2, label: '36274637', product: 'R-002', location: 'Location 2', quantity: 20 },
      { id: 3, label: '12345678', product: 'R-001', location: 'Location 3', quantity: 30 },
      { id: 4, label: '36274637', product: 'R-002', location: 'Location 4', quantity: 40 },
      { id: 5, label: '12345678', product: 'R-001', location: 'Location 5', quantity: 50 },
      { id: 6, label: '36274637', product: 'R-002', location: 'Location 6', quantity: 60 },
      { id: 7, label: '12345678', product: 'R-001', location: 'Location 1', quantity: 10 },
      { id: 8, label: '36274637', product: 'R-002', location: 'Location 2', quantity: 20 },
      { id: 9, label: '12345678', product: 'R-001', location: 'Location 3', quantity: 30 },
      { id: 10, label: '36274637', product: 'R-002', location: 'Location 4', quantity: 40 },
      { id: 11, label: '12345678', product: 'R-001', location: 'Location 5', quantity: 50 },
      { id: 12, label: '36274637', product: 'R-002', location: 'Location 6', quantity: 60 }
    ])

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
      }
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
      this.labelRows = this.allLabels.filter(label => this.locationRows.find(location => location.name === label.location))
      this.selectedZone = row.name
    },

    clickRowLocations (row) {
      if (this.selectedLocation === row.name) {
        this.selectedLocation = ''
        this.labelRows = this.allLabels
        return
      }
      this.labelRows = this.allLabels.filter(label => label.location === row.name)
      this.selectedLocation = row.name
    },

    resetFilters () {
      this.selectedZone = ''
      this.selectedLocation = ''
      this.locationRows = this.allLocations
      this.labelRows = this.allLabels
    },

    relocate () {
      console.log('Relocate')
    },

    goToNewLocation () {
      this.$router.push({ name: 'create-location' })
    },

    newLabel () {
      console.log('New Label')
    }
  }
})

</script>
