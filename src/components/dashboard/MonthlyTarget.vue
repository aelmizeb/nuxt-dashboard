<template>
  <div class="rounded-md shadow-sm border border-gray-200 bg-gray-100">
    <div class="shadow-default rounded-md shadow-sm bg-white px-5 pb-11 pt-5 sm:px-6 sm:pt-6">
      <div class="flex justify-between">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">
            Monthly Target
          </h3>
          <p class="mt-1 text-theme-sm text-gray-500">
            Target you’ve set for each month
          </p>
        </div>
      </div>
      <div class="relative">
        <PipeChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PipeChart from "~/components/charts/Solidgauge.vue";
</script>