<template>
  <div class="locations-page">
    <!-- Table for location zones -->
    <q-table
      :rows="locationZones"
      :columns="zoneColumns"
      row-key="id"
    >
      <!-- Table content for location zones -->
    </q-table>

    <!-- Table for locations of the selected zone -->
    <q-table
      :rows="selectedZoneLocations"
      :columns="locationColumns"
      row-key="id"
    >
      <!-- Table content for locations of the selected zone -->
    </q-table>

    <!-- Table for items inside the selected location -->
    <q-table
      :rows="selectedLocationItems"
      :columns="itemColumns"
      row-key="id"
    >
      <!-- Table content for items inside the selected location -->
    </q-table>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LocationsPage',
  setup () {
    // Data for location zones
    const locationZones = [
      { id: 1, name: 'Zone 1' },
      { id: 2, name: 'Zone 2' }
    ]
    // Columns for location zones table
    const zoneColumns = [
      { name: 'name', label: 'Name', align: 'left', field: 'name' }
    ]
    // Data for locations of the selected zone
    const selectedZoneLocations = [
      { id: 1, name: 'Location 1' },
      { id: 2, name: 'Location 2' }
    ]
    // Columns for locations of the selected zone table
    const locationColumns = [
      { name: 'name', label: 'Name', align: 'left', field: 'name' }
    ]
    // Data for items inside the selected location
    const selectedLocationItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ]
    // Columns for items inside the selected location table
    const itemColumns = [
      { name: 'name', label: 'Name', align: 'left', field: 'name' }
    ]

    return {
      locationZones,
      locationColumns,
      selectedZoneLocations,
      selectedLocationItems,
      zoneColumns,
      itemColumns
    }
  }
})
</script>
