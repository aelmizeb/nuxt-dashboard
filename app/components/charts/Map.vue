<template>
  <VChart :option="options" style="height: 400px;" />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, GridComponent])

const options = {
  title: { text: 'Sales' },
  tooltip: {},
  xAxis: { data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'] },
  yAxis: { type: 'value' },
  series: [{ type: 'bar', data: [5, 20, 36, 55, 43, 33, 22] }]
}
</script>
