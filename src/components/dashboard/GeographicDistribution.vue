<template>
  <!-- ====== Map One Start -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
    <div class="flex justify-between">
      <div>
        <h3 class="text-lg font-semibold text-gray-800">
          Geographic Distribution of Clients
        </h3>
        <p class="mt-1 text-theme-sm text-gray-500">
          Number of customer based on country
        </p>
      </div>

      <div x-data="{openDropDown: false}" class="relative h-fit">
        <button @click="openDropDown = !openDropDown"
          :class="openDropDown ? 'text-gray-700' : 'text-gray-400 hover:text-gray-700'"
          class="text-gray-400 hover:text-gray-700">
          <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z"
              fill=""></path>
          </svg>
        </button>
        <div x-show="openDropDown" @click.outside="openDropDown = false"
          class="absolute right-0 top-full z-40 w-40 space-y-1 rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg"
          style="display: none;">
          <button
            class="flex w-full rounded-lg px-3 py-2 text-left text-theme-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            View More
          </button>
          <button
            class="flex w-full rounded-lg px-3 py-2 text-left text-theme-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Delete
          </button>
        </div>
      </div>
    </div>
    <div class="border-gary-200 my-6 overflow-hidden rounded-2xl border bg-gray-50">
      <ClientOnly>
        <LMap style="height: 250px" :zoom="1" :center="[38, -1]" :use-global-leaflet="false">
          <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base" name="OpenStreetMap" />

          <LMarker :lat-lng="[36.966428, -95.844032]" />
          <LMarker :lat-lng="[34.668138, 104.165802]" />
          <LMarker :lat-lng="[54, 2]" />
        </LMap>
      </ClientOnly>
    </div>

    <div class="space-y-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-full max-w-8 items-center rounded-full">
            <img src="@/assets/img/flags/us.svg" alt="USA">
          </div>
          <div>
            <p class="text-theme-sm font-semibold text-gray-800">
              USA
            </p>
            <span class="block text-theme-xs text-gray-500">
              5,828 Customers
            </span>
          </div>
        </div>

        <div class="flex w-full max-w-[140px] items-center gap-3">
          <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200">
            <div
              class="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white">
            </div>
          </div>
          <p class="text-theme-sm font-medium text-gray-800">
            77%
          </p>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-full max-w-8 items-center rounded-full">
            <img src="@/assets/img/flags/cn.svg" alt="China">
          </div>
          <div>
            <p class="text-theme-sm font-semibold text-gray-800">
              China
            </p>
            <span class="block text-theme-xs text-gray-500">
              984 Customers
            </span>
          </div>
        </div>

        <div class="flex w-full max-w-[140px] items-center gap-3">
          <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200">
            <div
              class="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white">
            </div>
          </div>
          <p class="text-theme-sm font-medium text-gray-800">
            13%
          </p>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-full max-w-8 items-center rounded-full">
            <img src="@/assets/img/flags/uk.svg" alt="UK">
          </div>
          <div>
            <p class="text-theme-sm font-semibold text-gray-800">
              UK
            </p>
            <span class="block text-theme-xs text-gray-500">
              757 Customers
            </span>
          </div>
        </div>

        <div class="flex w-full max-w-[140px] items-center gap-3">
          <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200">
            <div
              class="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white">
            </div>
          </div>
          <p class="text-theme-sm font-medium text-gray-800">
            10%
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- ====== Map One End -->
</template>

<script setup lang="ts">
const openDropDown = ref(true);

</script>
