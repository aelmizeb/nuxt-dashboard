<template>
  <div class="overflow-hidden rounded-md shadow-sm border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-gray-800">
        Monthly Sales
      </h3>
    </div>

    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <BasicChart />
    </div>
  </div>
</template>
<script setup lang="ts">
import BasicChart from "~/components/charts/Basic.vue";
</script>