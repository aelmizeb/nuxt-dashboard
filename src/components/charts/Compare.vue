<template>
  <highstock :options="chartOpts" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const series = ref<any[]>([])

const chartOpts = computed(() => ({
  rangeSelector: {
    selected: 4
  },
  yAxis: {
    labels: {
      formatter() {
        return (this.value > 0 ? ' + ' : '') + this.value + '%'
      }
    },
    plotLines: [{
      value: 0,
      width: 2,
      color: 'silver'
    }]
  },
  plotOptions: {
    series: {
      compare: 'percent',
      showInNavigator: true
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
    valueDecimals: 2,
    split: true
  },
  series: series.value
}))

async function fetchData(symbol: string) {
  const baseUrl = process.env.BASE_URL || window.location.origin
  const filePath = `${baseUrl}/data/${symbol}.json`

  try {
    const res = await fetch(filePath)
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${filePath}`)
    }

    const data = await res.json()
    
    series.value.push({
      name: symbol,
      data
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  const symbols = ['test-1', 'test-2']
  symbols.forEach(symbol => fetchData(symbol))
})
</script>
