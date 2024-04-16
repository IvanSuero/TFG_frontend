<template>
  <div class="graphs">
    <apexcharts class="chart" width="500" height="350" type="line" :options="lineOptions" :series="lineSeries" title="Inventory per month"></apexcharts>
    <apexcharts class="chart" width="500" height="350" type="donut" :options="donutOptions" :series="donutSeries"></apexcharts>
  </div>
</template>

<style>
.graphs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

export default {
  name: 'StatisticsPage',
  components: {
    apexcharts: VueApexCharts
  },
  data () {
    return {
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
    }
  },

  mounted () {
    this.getItems()
  }
}
</script>
