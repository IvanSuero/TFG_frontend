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

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LocationsPage',
  setup () {
    const locations = ref([
      {
        name: 'Location 1',
        description: 'Description 1',
        image: 'https://via.placeholder.com/400'
      },
      {
        name: 'Location 2',
        description: 'Description 2',
        image: 'https://via.placeholder.com/400'
      },
      {
        name: 'Location 3',
        description: 'Description 3',
        image: 'https://via.placeholder.com/400'
      },
      {
        name: 'Location 4',
        description: 'Description 4',
        image: 'https://via.placeholder.com/400'
      }
    ])

    return {
      locations
    }
  }
})
</script>
