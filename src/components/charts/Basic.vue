<template>
  <highchart :options="chartOptions" :modules="['exporting']" :update="watchers" style="width: 100%;" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Refs (reactive variables)
const caption = ref('Chart caption')
const title = ref('Basic Chart')
const subtitle = ref('Basic chart details')
const points = ref([10, 3, 8, 3, 6, 4, 5, 7, 16, 7, 15, 14])
const seriesColor = ref('')
const chartType = ref('')
const seriesName = ref('My Data')
const yAxisLabel = ref('My Values')
const sexy = ref(false)
const lastPointClicked = ref({
  timestamp: '',
  x: '',
  y: ''
})

const watchers = [
  'options.title',
  'options.series'
]

const colors = [
  'Red', 'Green', 'Blue', 'Pink', 'Orange', 'Brown', 'Black', 'Purple'
]

// Fake function for inverted color, to match your old code (define it properly)
function invertedColor(index: number) {
  return '#FFFFFF' // Change this based on your logic
}

// Computed chart options
const chartOptions = computed(() => ({
  accessibility: { enabled: false },
  caption: {
    text: caption.value,
    style: {
      color: sexy.value ? invertedColor(0) : '#000000'
    }
  },
  chart: {
    backgroundColor: sexy.value
      ? {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, seriesColor.value],
            [0.5, '#ffffff'],
            [1, seriesColor.value]
          ]
        }
      : '#ffffff',
    className: 'my-chart',
    type: chartType.value.toLowerCase()
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
      point: {
        events: {
          click() {
            // You can emit a global event if needed with `useNuxtApp()`
            console.log('Point clicked:', this)
          }
        }
      }
    }
  },
  yAxis: [{
    title: {
      text: yAxisLabel.value,
      style: {
        color: '#000000'
      }
    }
  }],
  title: {
    style: {
      color: sexy.value ? invertedColor(0) : '#000000'
    },
    text: `${title.value}` +
      (lastPointClicked.value.timestamp
        ? ` (Point clicked: ${lastPointClicked.value.timestamp})`
        : '')
  },
  subtitle: {
    style: {
      color: sexy.value ? invertedColor(0) : '#000000'
    },
    text: subtitle.value
  },
  legend: {
    itemStyle: {
      color: sexy.value ? invertedColor(0) : '#000000'
    }
  },
  series: [{
    type: 'line',
    name: seriesName.value,
    data: [...points.value],
    color: seriesColor.value
  }]
}))
</script>
