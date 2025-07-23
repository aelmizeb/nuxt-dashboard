<template>
  <VChart :option="options" style="height: 400px;" />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TooltipComponent,
  TitleComponent,
  GridComponent // 👈 REQUIRED FOR xAxis/yAxis TO WORK
} from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, LineChart, TooltipComponent, TitleComponent, GridComponent]) // 👈 include GridComponent

const options = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 190, 180, 260],
      type: 'line'
    }
  ]
}
</script>