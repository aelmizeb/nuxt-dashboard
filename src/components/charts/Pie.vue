<template>
  <highchart :options="pieChartOptions" />
</template>

<script setup lang="ts">
// Pie chart options
const pieChartOptions = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Pie Chart Example'
  },
  subtitle: {
    text: 'A simple pie chart example with Highcharts'
  },
  series: [{
    name: 'Brands',
    data: [
      { name: 'Apple', y: 50 },
      { name: 'Samsung', y: 30 },
      { name: 'Huawei', y: 20 }
    ]
  }]
}
</script>