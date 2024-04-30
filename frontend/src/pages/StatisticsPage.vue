<template>
  <div class="stats">
    <div class="statsCards">
      <StatCardItem :item="itemProducts" :stats=true />
      <StatCardItem :item="itemLabels" :stats=true />
      <StatCardItem :item="itemInventory" :stats=true />
    </div>
    <div class="graphs">
      <apexcharts class="chart" width="500" height="350" type="line" :options="lineOptions" :series="lineSeries" title="Inventory per month"></apexcharts>
      <apexcharts class="chart" width="500" height="350" type="donut" :options="donutOptions" :series="donutSeries"></apexcharts>
    </div>
</div>
</template>

<style>
.stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
}
.statsCards {
  display: flex;
  flex-direction: row;
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

<script>
import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'
import apiPathUrl from 'src/config/apiPathUrl'
import StatCardItem from 'src/components/cards/StatCardItem.vue'

export default {
  name: 'StatisticsPage',
  components: {
    apexcharts: VueApexCharts,
    StatCardItem
  },
  data () {
    return {
      itemProducts: {
        name: 'Products',
        url: 'inventory',
        value: {
          type: 'number',
          value: 0
        }
      },
      itemLabels: {
        name: 'Labels',
        url: 'labels',
        value: {
          type: 'number',
          value: 0
        }
      },
      itemInventory: {
        name: 'Inventory',
        url: 'inventory',
        value: {
          type: 'percentage',
          value: 100
        }
      },
      lineSeries: [
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
      ],
      lineOptions: {
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
      },
      donutSeries: [0, 0],
      donutOptions: {
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
      }
    }
  },

  methods: {
    async getItems () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getHistory}`
      await axios.get(url)
        .then(response => {
          const data = response.data.data
          console.log(data)
          data.forEach(row => {
            const month = new Date(row.date).getMonth()
            this.lineSeries[0].data[month]++
            if (row.old_stock > row.new_stock) {
              this.donutSeries[1]++
              this.lineSeries[2].data[month]++
            } else {
              this.donutSeries[0]++
              this.lineSeries[1].data[month]++
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProducts () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getProducts}`
      await axios.get(url)
        .then(response => {
          this.itemProducts.value.value = response.data.data.length
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getLabels () {
      const url = `${apiPathUrl.backend}/${apiPathUrl.getLabels}`
      await axios.get(url)
        .then(response => {
          this.itemLabels.value.value = response.data.data.length
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.getItems()
    this.getProducts()
    this.getLabels()
  }
}
</script>
