<template>
  <VChart :option="options" style="height: 350px;" />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TooltipComponent, TitleComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, PieChart, TooltipComponent, TitleComponent])

const options = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Progress',
      type: 'pie',
      radius: ['50%', '100%'],
      center: ['50%', '70%'],
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 7500, name: 'Done', itemStyle: { color: '#4CAF50' } }, // Green for Done
        { value: 2500, name: 'In Progress', itemStyle: { color: '#FF9800' } }, // Orange for In Progress
      ]
    }
  ]
}
</script>