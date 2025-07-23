<template>
  <NuxtLayout>
    <h3 class="text-gray-700 text-3xl font-medium">Charts</h3>

    <div>
      <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12 xl:col-span-6">
          <div class="rounded-md shadow-sm border border-gray-200 bg-white p-5 sm:p-6">
            <BasicChart />
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6">
          <div class="rounded-md shadow-sm border border-gray-200 bg-white p-5 sm:p-6">
            <CompareChart />
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6">
          <div class="rounded-md shadow-sm border border-gray-200 bg-white p-5 sm:p-6">
            <MapChart />
          </div>
        </div>

        <div class="col-span-12 xl:col-span-6">
          <div class="rounded-md shadow-sm border border-gray-200 bg-white p-5 sm:p-6">
            <PipeChart />
          </div>
        </div>
      </div>

    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import BasicChart from "~/components/charts/Basic.vue";
import CompareChart from "~/components/charts/Compare.vue";
import MapChart from "~/components/charts/Map.vue";
import PipeChart from "~/components/charts/Pie.vue";

</script>