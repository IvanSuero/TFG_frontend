<template>
  <div class="stats">
    <div class="statsCards">
      <StatCardItem :item="itemProducts" :stats=true />
      <StatCardItem :item="itemMovements" :stats=true />
      <StatCardItem :item="itemInventory" :stats=true />
    </div>
    <div class="graphs">
      <apexcharts class="chart" :width="getHeight()*1.5" :height="getHeight()" type="line" :options="lineOptions" :series="lineSeries" title="Inventory per month"></apexcharts>
      <apexcharts class="chart" :width="getHeight()*1.5" :height="getHeight()" type="donut" :options="donutOptions" :series="donutSeries"></apexcharts>
    </div>
</div>
</template>

<script setup>
import axios from 'axios'
import apiPathUrl from 'src/config/apiPathUrl'
import StatCardItem from 'src/components/cards/StatCardItem.vue'
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import apexcharts from 'vue3-apexcharts'

const $q = useQuasar()

const itemProducts = ref({
  name: 'Products',
  url: 'inventory',
  value: {
    type: 'number',
    value: 0
  }
})

const itemInventory = ref({
  name: 'Inventory',
  url: 'inventory',
  value: {
    type: 'percentage',
    value: 100
  }
})

const itemMovements = ref({
  name: 'Movements',
  url: 'inventory',
  value: {
    type: 'number',
    value: 0
  }
})

const lineSeries = ref([
  {
    name: 'Inventories',
    type: 'line',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'Positive',
    type: 'column',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: 'Negative',
    type: 'column',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
])

const lineOptions = ref({
  chart: {
    type: 'line',
    id: 'inventory-bar',
    stacked: true
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  title: {
    text: 'Inventory per month'
  },
  stroke: {
    width: [2, 2, 2]
  }
})

const donutSeries = ref([0, 0])
const donutOptions = ref({
  chart: {
    id: 'inventory-pie'
  },
  labels: ['Positive', 'Negative'],
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  },
  colors: ['#02808D', '#E27E23'],
  title: {
    text: 'Inventory changes'
  }
})

const getItems = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.getHistory}`
  await axios.get(url)
    .then(response => {
      const data = response.data.data
      data.forEach(row => {
        const month = new Date(row.date).getMonth()
        lineSeries.value[0].data[month]++
        if (row.old_stock > row.new_stock) {
          donutSeries.value[1]++
          lineSeries.value[2].data[month]++
        } else {
          donutSeries.value[0]++
          lineSeries.value[1].data[month]++
        }
      })
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error
      })
    })
}

const getProducts = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.getProducts}`
  await axios.get(url)
    .then(response => {
      itemProducts.value.value.value = response.data.data.length
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error
      })
    })
}

const getMovements = async () => {
  const url = `${apiPathUrl.backend}/${apiPathUrl.getHistory}`
  await axios.get(url)
    .then(response => {
      itemMovements.value.value.value = response.data.data.length
    })
    .catch(error => {
      $q.notify({
        type: 'error',
        message: error
      })
    })
}

const getHeight = () => {
  if (window.innerWidth < 600) return window.innerWidth / 2
  else if (window.innerWidth < 1200) return window.innerWidth / 2.3
  else return window.innerWidth / 3.5
}

onMounted(() => {
  getItems()
  getProducts()
  getMovements()
})
</script>

<style scoped>
.stats {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 35px;
  margin-bottom: 35px;
}
.statsCards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.graphs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.chart {
  padding: 10px;
  border: 1px solid #026874;
  box-shadow: 0 0 10px #026874;
}
</style>
