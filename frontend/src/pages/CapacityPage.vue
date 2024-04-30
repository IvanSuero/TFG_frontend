<template>
  <q-page style="margin: 1.5rem;">
    <div class="tablesCapacity">
      <q-table
        style="height: 680px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;"
        class="sticky-header-table"
        flat
        bordered
        :rows="zoneRows"
        :columns="zoneColumns"
        :row-key="row => row.zone"
        :pagination="pagination"
        virtual-scroll
        hide-bottom
      >
      <template #body="props">
        <q-tr :props="props" @click="clickRowZones(props.row)"
            :style="{ backgroundColor: props.row.zone === selectedZone ? '#D2E3E0' : '' }">
          <q-td key="zone" :props="props">{{ props.row.zone }}</q-td>
          <q-td key="ocupation" :props="props">{{ props.row.ocupation.toFixed(2) }} %</q-td>
        </q-tr>
      </template>
      </q-table>
      <q-table
        style="height: 680px; width: 100%; margin-top: 15px; background-color: #EBF1F3; padding: 15px;"
        class="sticky-header-table"
        flat
        bordered
        :rows="locationRows"
        :columns="locationColumns"
        :row-key="row => row.location"
        :pagination="pagination"
        virtual-scroll
        hide-bottom
      >
        <template #body="props">
          <q-tr :props="props">
            <q-td key="location" :props="props">{{ props.row.location }}</q-td>
            <q-td key="ocupation" :props="props">{{ props.row.ocupation.toFixed(2) }} %</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import apiPathUrl from 'src/config/apiPathUrl'

export default defineComponent({
  data () {
    return {
      locationColumns: [
        { name: 'location', label: 'Location', align: 'left', field: 'location', sortable: true },
        { name: 'ocupation', label: 'Ocupation', align: 'left', field: 'ocupation', sortable: true }
      ],
      locationRows: ref([]),
      originalRows: ref([]),
      zoneColumns: [
        { name: 'zone', label: 'Zone', align: 'left', field: 'zone', sortable: true },
        { name: 'ocupation', label: 'Ocupation', align: 'left', field: 'ocupation', sortable: true }
      ],
      zoneRows: ref([]),
      pagination: {
        sortBy: 'id',
        descending: false,
        rowsPerPage: 0
      },
      selectedZone: ref(''),
      zones: ref([]),
      locations: ref([]),
      labels: ref([]),
      products: ref([])
    }
  },

  methods: {
    clickRowZones (row) {
      if (this.selectedZone === row.zone) {
        this.selectedZone = ''
        this.locationRows = this.originalRows
        return
      }
      this.locationRows = this.locationRows.filter(location => location.zone === row.zone)
      this.selectedZone = row.zone
    },

    async getZones () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getZones}`
      await axios.get(url)
        .then(response => {
          this.zones = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getLocations () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getLocations}`
      await axios.get(url)
        .then(response => {
          this.locations = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getLabels () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getLabels}`
      await axios.get(url)
        .then(response => {
          this.labels = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProducts () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getProducts}`
      await axios.get(url)
        .then(response => {
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    calculateOcupancy () {
      this.locations.forEach(location => {
        const locationLabels = this.labels.filter(label => label.location === location.location)
        const capacity = location.volume
        let ocupation = 0
        locationLabels.forEach(label => {
          const product = this.products.find(product => product.reference === label.product)
          ocupation = ocupation + (label.quantity * product.volume)
        })
        const pctOcupation = (ocupation / capacity) * 100
        this.locationRows.push({ location: location.location, ocupation: pctOcupation, capacity, volume: ocupation })
      })

      this.zones.forEach(zone => {
        const zoneLocations = this.locations.filter(location => location.zone === zone.name)
        let ocupation = 0
        let capacity = 0

        zoneLocations.forEach(location => {
          const locationRows = this.locationRows.find(row => row.location === location.location)
          ocupation = ocupation + locationRows.volume
          capacity = capacity + locationRows.capacity
        })
        const zonePctOcupation = (ocupation / capacity) * 100
        this.zoneRows.push({ zone: zone.name, ocupation: zonePctOcupation })
        console.log(this.zoneRows)
      })
    }

  },

  async mounted () {
    this.getZones()
    await this.getLocations()
    await this.getLabels()
    await this.getProducts()
    await this.calculateOcupancy()
  }
})
</script>

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
  margin-right: 15px;
  display: flex;
  flex-direction: row;
}

.tablesCapacity {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>
