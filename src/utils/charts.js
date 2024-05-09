const inventoryPerMonthChart = {
  series: {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  options: {
    chart: {
      id: 'inventory-bar'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }
}

const donutChart = {
  series: {
    data: [60, 40]
  },
  options: {
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
    }
  }
}

export default { inventoryPerMonthChart, donutChart }
