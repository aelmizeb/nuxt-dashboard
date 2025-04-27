<template>
  <highchart :options="pieChartOptions" />
</template>

<script setup lang="ts">
// Pie chart options
const pieChartOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: '',
    align: 'center',
    verticalAlign: 'middle',
    y: 60,
    style: {
      fontSize: '1em'
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Percentage',
    innerSize: '50%',
    data: [
      ['Completed', 75.5],
      ['In progress', 24.5],
    ]
  }]

}
</script>