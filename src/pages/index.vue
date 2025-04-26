<template>
  <NuxtLayout>
    <div>
      <h3 class="text-3xl font-medium text-gray-700">Dashboard</h3>

      <div class="mt-4">
        <div class="flex flex-wrap -mx-6">
          <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                <svg class="w-8 h-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                    fill="currentColor" />
                  <path
                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                    fill="currentColor" />
                  <path
                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                    fill="currentColor" />
                  <path
                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                    fill="currentColor" />
                  <path
                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                    fill="currentColor" />
                  <path
                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                    fill="currentColor" />
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">7,569</h4>
                <div class="text-gray-500">New Users</div>
              </div>
            </div>
          </div>

          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
                <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                    fill="currentColor" />
                  <path
                    d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                    fill="currentColor" />
                  <path
                    d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                    fill="currentColor" />
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">10,490</h4>
                <div class="text-gray-500">Total Orders</div>
              </div>
            </div>
          </div>

          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
              <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                <svg class="w-8 h-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor"
                    stroke-width="2" stroke-linejoin="round" />
                  <path
                    d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                    stroke="currentColor" stroke-width="2" />
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700">215,542</h4>
                <div class="text-gray-500">Available Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8"></div>

      <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12 space-y-6 xl:col-span-7">
          <!-- Metric Group One -->
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <!-- Metric Item Start -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                <svg class="fill-gray-800" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.80443 5.60156C7.59109 5.60156 6.60749 6.58517 6.60749 7.79851C6.60749 9.01185 7.59109 9.99545 8.80443 9.99545C10.0178 9.99545 11.0014 9.01185 11.0014 7.79851C11.0014 6.58517 10.0178 5.60156 8.80443 5.60156ZM5.10749 7.79851C5.10749 5.75674 6.76267 4.10156 8.80443 4.10156C10.8462 4.10156 12.5014 5.75674 12.5014 7.79851C12.5014 9.84027 10.8462 11.4955 8.80443 11.4955C6.76267 11.4955 5.10749 9.84027 5.10749 7.79851ZM4.86252 15.3208C4.08769 16.0881 3.70377 17.0608 3.51705 17.8611C3.48384 18.0034 3.5211 18.1175 3.60712 18.2112C3.70161 18.3141 3.86659 18.3987 4.07591 18.3987H13.4249C13.6343 18.3987 13.7992 18.3141 13.8937 18.2112C13.9797 18.1175 14.017 18.0034 13.9838 17.8611C13.7971 17.0608 13.4132 16.0881 12.6383 15.3208C11.8821 14.572 10.6899 13.955 8.75042 13.955C6.81096 13.955 5.61877 14.572 4.86252 15.3208ZM3.8071 14.2549C4.87163 13.2009 6.45602 12.455 8.75042 12.455C11.0448 12.455 12.6292 13.2009 13.6937 14.2549C14.7397 15.2906 15.2207 16.5607 15.4446 17.5202C15.7658 18.8971 14.6071 19.8987 13.4249 19.8987H4.07591C2.89369 19.8987 1.73504 18.8971 2.05628 17.5202C2.28015 16.5607 2.76117 15.2906 3.8071 14.2549ZM15.3042 11.4955C14.4702 11.4955 13.7006 11.2193 13.0821 10.7533C13.3742 10.3314 13.6054 9.86419 13.7632 9.36432C14.1597 9.75463 14.7039 9.99545 15.3042 9.99545C16.5176 9.99545 17.5012 9.01185 17.5012 7.79851C17.5012 6.58517 16.5176 5.60156 15.3042 5.60156C14.7039 5.60156 14.1597 5.84239 13.7632 6.23271C13.6054 5.73284 13.3741 5.26561 13.082 4.84371C13.7006 4.37777 14.4702 4.10156 15.3042 4.10156C17.346 4.10156 19.0012 5.75674 19.0012 7.79851C19.0012 9.84027 17.346 11.4955 15.3042 11.4955ZM19.9248 19.8987H16.3901C16.7014 19.4736 16.9159 18.969 16.9827 18.3987H19.9248C20.1341 18.3987 20.2991 18.3141 20.3936 18.2112C20.4796 18.1175 20.5169 18.0034 20.4837 17.861C20.2969 17.0607 19.913 16.088 19.1382 15.3208C18.4047 14.5945 17.261 13.9921 15.4231 13.9566C15.2232 13.6945 14.9995 13.437 14.7491 13.1891C14.5144 12.9566 14.262 12.7384 13.9916 12.5362C14.3853 12.4831 14.8044 12.4549 15.2503 12.4549C17.5447 12.4549 19.1291 13.2008 20.1936 14.2549C21.2395 15.2906 21.7206 16.5607 21.9444 17.5202C22.2657 18.8971 21.107 19.8987 19.9248 19.8987Z"
                    fill=""></path>
                </svg>
              </div>

              <div class="mt-5 flex items-end justify-between">
                <div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Customers</span>
                  <h4 class="mt-2 text-title-sm font-bold text-gray-800">
                    7,569
                  </h4>
                </div>

                <span
                  class="flex items-center gap-1 rounded-full bg-success-50 py-0.5 pl-2 pr-2.5 text-sm font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                  <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                      fill=""></path>
                  </svg>

                  15.61%
                </span>
              </div>
            </div>
            <!-- Metric Item End -->

            <!-- Metric Item Start -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                <svg class="fill-gray-800" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.665 3.75621C11.8762 3.65064 12.1247 3.65064 12.3358 3.75621L18.7807 6.97856L12.3358 10.2009C12.1247 10.3065 11.8762 10.3065 11.665 10.2009L5.22014 6.97856L11.665 3.75621ZM4.29297 8.19203V16.0946C4.29297 16.3787 4.45347 16.6384 4.70757 16.7654L11.25 20.0366V11.6513C11.1631 11.6205 11.0777 11.5843 10.9942 11.5426L4.29297 8.19203ZM12.75 20.037L19.2933 16.7654C19.5474 16.6384 19.7079 16.3787 19.7079 16.0946V8.19202L13.0066 11.5426C12.9229 11.5844 12.8372 11.6208 12.75 11.6516V20.037ZM13.0066 2.41456C12.3732 2.09786 11.6277 2.09786 10.9942 2.41456L4.03676 5.89319C3.27449 6.27432 2.79297 7.05342 2.79297 7.90566V16.0946C2.79297 16.9469 3.27448 17.726 4.03676 18.1071L10.9942 21.5857L11.3296 20.9149L10.9942 21.5857C11.6277 21.9024 12.3732 21.9024 13.0066 21.5857L19.9641 18.1071C20.7264 17.726 21.2079 16.9469 21.2079 16.0946V7.90566C21.2079 7.05342 20.7264 6.27432 19.9641 5.89319L13.0066 2.41456Z"
                    fill=""></path>
                </svg>
              </div>

              <div class="mt-5 flex items-end justify-between">
                <div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Orders</span>
                  <h4 class="mt-2 text-title-sm font-bold text-gray-800">
                    10,490
                  </h4>
                </div>

                <span
                  class="flex items-center gap-1 rounded-full bg-error-50 py-0.5 pl-2 pr-2.5 text-sm font-medium text-error-600">
                  <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.31462 10.3761C5.45194 10.5293 5.65136 10.6257 5.87329 10.6257C5.8736 10.6257 5.8739 10.6257 5.87421 10.6257C6.0663 10.6259 6.25845 10.5527 6.40505 10.4062L9.40514 7.4082C9.69814 7.11541 9.69831 6.64054 9.40552 6.34754C9.11273 6.05454 8.63785 6.05438 8.34486 6.34717L6.62329 8.06753L6.62329 1.875C6.62329 1.46079 6.28751 1.125 5.87329 1.125C5.45908 1.125 5.12329 1.46079 5.12329 1.875L5.12329 8.06422L3.40516 6.34719C3.11218 6.05439 2.6373 6.05454 2.3445 6.34752C2.0517 6.64051 2.05185 7.11538 2.34484 7.40818L5.31462 10.3761Z"
                      fill=""></path>
                  </svg>

                  6.58%
                </span>
              </div>
            </div>
            <!-- Metric Item End -->
          </div>
          <!-- Metric Group One -->

          <!-- ====== Chart One Start -->
          <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-800">
                Monthly Sales
              </h3>

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
                  class="absolute right-0 z-40 w-40 p-2 space-y-1 bg-white border border-gray-200 shadow-theme-lg top-full rounded-2xl"
                  style="display: none;">
                  <button
                    class="flex w-full px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-theme-xs hover:bg-gray-100 hover:text-gray-700">
                    View More
                  </button>
                  <button
                    class="flex w-full px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-theme-xs hover:bg-gray-100 hover:text-gray-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div class="max-w-full overflow-x-auto custom-scrollbar">
              <div id="chartOne" class="-ml-5 h-full min-w-[690px] pl-2 xl:min-w-full" style="min-height: 195px;">
                <div id="apexchartswqswubs6" class="apexcharts-canvas apexchartswqswubs6 apexcharts-theme-"
                  style="width: 820px; height: 180px;"><svg id="SvgjsSvg1745" width="820" height="180"
                    xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)">
                    <foreignObject x="0" y="0" width="820" height="180">
                      <div xmlns="http://www.w3.org/1999/xhtml" style="position: relative; height: 100%; width: 100%;">
                        <div class="apexcharts-legend" style="max-height: 90px;"></div>
                      </div>
                    </foreignObject>
                    <g id="SvgjsG1758" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g>
                    <g id="SvgjsG1759" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g>
                    <g id="SvgjsG1840" class="apexcharts-yaxis" rel="0" transform="translate(19.793899536132812, 0)">
                      <g id="SvgjsG1841" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1843"
                          font-family="Outfit, sans-serif" x="20" y="33.666666666666664" text-anchor="end"
                          dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: Outfit, sans-serif;">
                          <tspan id="SvgjsTspan1844">400</tspan>
                          <title>400</title>
                        </text><text id="SvgjsText1846" font-family="Outfit, sans-serif" x="20" y="61.34916666666666"
                          text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: Outfit, sans-serif;">
                          <tspan id="SvgjsTspan1847">300</tspan>
                          <title>300</title>
                        </text><text id="SvgjsText1849" font-family="Outfit, sans-serif" x="20" y="89.03166666666667"
                          text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: Outfit, sans-serif;">
                          <tspan id="SvgjsTspan1850">200</tspan>
                          <title>200</title>
                        </text><text id="SvgjsText1852" font-family="Outfit, sans-serif" x="20" y="116.71416666666667"
                          text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: Outfit, sans-serif;">
                          <tspan id="SvgjsTspan1853">100</tspan>
                          <title>100</title>
                        </text><text id="SvgjsText1855" font-family="Outfit, sans-serif" x="20" y="144.39666666666668"
                          text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                          class="apexcharts-text apexcharts-yaxis-label " style="font-family: Outfit, sans-serif;">
                          <tspan id="SvgjsTspan1856">0</tspan>
                          <title>0</title>
                        </text></g>
                    </g>
                    <g id="SvgjsG1747" class="apexcharts-inner apexcharts-graphical"
                      transform="translate(49.79389953613281, 30)">
                      <defs id="SvgjsDefs1746">
                        <linearGradient id="SvgjsLinearGradient1750" x1="0" y1="0" x2="0" y2="1">
                          <stop id="SvgjsStop1751" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0">
                          </stop>
                          <stop id="SvgjsStop1752" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1">
                          </stop>
                          <stop id="SvgjsStop1753" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1">
                          </stop>
                        </linearGradient>
                        <clipPath id="gridRectMaskwqswubs6">
                          <rect id="SvgjsRect1755" width="747.5500411987305" height="110.72999999999999" x="0" y="0"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                        <clipPath id="gridRectBarMaskwqswubs6">
                          <rect id="SvgjsRect1756" width="755.5500411987305" height="118.72999999999999" x="-4" y="-4"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                        <clipPath id="gridRectMarkerMaskwqswubs6">
                          <rect id="SvgjsRect1757" width="747.5500411987305" height="110.72999999999999" x="0" y="0"
                            rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                          </rect>
                        </clipPath>
                        <clipPath id="forecastMaskwqswubs6"></clipPath>
                        <clipPath id="nonForecastMaskwqswubs6"></clipPath>
                      </defs>
                      <rect id="SvgjsRect1754" width="24.29537633895874" height="110.72999999999999" x="0" y="0" rx="0"
                        ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1750)"
                        class="apexcharts-xcrosshairs" y2="110.72999999999999" filter="none" fill-opacity="0.9"></rect>
                      <g id="SvgjsG1789" class="apexcharts-grid">
                        <g id="SvgjsG1790" class="apexcharts-gridlines-horizontal">
                          <line id="SvgjsLine1794" x1="0" y1="27.682499999999997" x2="747.5500411987305"
                            y2="27.682499999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1795" x1="0" y1="55.364999999999995" x2="747.5500411987305"
                            y2="55.364999999999995" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                          <line id="SvgjsLine1796" x1="0" y1="83.04749999999999" x2="747.5500411987305"
                            y2="83.04749999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                            class="apexcharts-gridline"></line>
                        </g>
                        <g id="SvgjsG1791" class="apexcharts-gridlines-vertical"></g>
                        <line id="SvgjsLine1799" x1="0" y1="110.72999999999999" x2="747.5500411987305"
                          y2="110.72999999999999" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
                        </line>
                        <line id="SvgjsLine1798" x1="0" y1="1" x2="0" y2="110.72999999999999" stroke="transparent"
                          stroke-dasharray="0" stroke-linecap="butt"></line>
                      </g>
                      <g id="SvgjsG1792" class="apexcharts-grid-borders">
                        <line id="SvgjsLine1793" x1="0" y1="0" x2="747.5500411987305" y2="0" stroke="#e0e0e0"
                          stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                        <line id="SvgjsLine1797" x1="0" y1="110.72999999999999" x2="747.5500411987305"
                          y2="110.72999999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                          class="apexcharts-gridline"></line>
                      </g>
                      <g id="SvgjsG1760" class="apexcharts-bar-series apexcharts-plot-series">
                        <g id="SvgjsG1761" class="apexcharts-series" rel="1" seriesName="Sales" data:realIndex="0">
                          <path id="SvgjsPath1766"
                            d="M 21.000230213801068 108.731 L 21.000230213801068 71.2244 C 21.000230213801068 68.7244 23.500230213801068 66.2244 26.000230213801068 66.2244 L 36.29560655275981 66.2244 C 38.79560655275981 66.2244 41.29560655275981 68.7244 41.29560655275981 71.2244 L 41.29560655275981 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 21.000230213801068 108.731 L 21.000230213801068 71.2244 C 21.000230213801068 68.7244 23.500230213801068 66.2244 26.000230213801068 66.2244 L 36.29560655275981 66.2244 C 38.79560655275981 66.2244 41.29560655275981 68.7244 41.29560655275981 71.2244 L 41.29560655275981 108.731 z "
                            pathFrom="M 21.000230213801068 108.731 L 21.000230213801068 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 21.000230213801068 108.731 z"
                            cy="64.2234" cx="79.29606698036194" j="0" val="168" barHeight="46.50659999999999"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1768"
                            d="M 83.29606698036194 108.731 L 83.29606698036194 11.153375000000006 C 83.29606698036194 8.653375000000006 85.79606698036194 6.153375000000006 88.29606698036194 6.153375000000006 L 98.59144331932069 6.153375000000006 C 101.09144331932069 6.153375000000006 103.59144331932069 8.653375000000006 103.59144331932069 11.153375000000006 L 103.59144331932069 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 83.29606698036194 108.731 L 83.29606698036194 11.153375000000006 C 83.29606698036194 8.653375000000006 85.79606698036194 6.153375000000006 88.29606698036194 6.153375000000006 L 98.59144331932069 6.153375000000006 C 101.09144331932069 6.153375000000006 103.59144331932069 8.653375000000006 103.59144331932069 11.153375000000006 L 103.59144331932069 108.731 z "
                            pathFrom="M 83.29606698036194 108.731 L 83.29606698036194 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 83.29606698036194 108.731 z"
                            cy="4.152375000000006" cx="141.5919037469228" j="1" val="385" barHeight="106.57762499999998"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1770"
                            d="M 145.5919037469228 108.731 L 145.5919037469228 62.08917499999999 C 145.5919037469228 59.58917499999999 148.0919037469228 57.08917499999999 150.5919037469228 57.08917499999999 L 160.88728008588154 57.08917499999999 C 163.38728008588154 57.08917499999999 165.88728008588154 59.58917499999999 165.88728008588154 62.08917499999999 L 165.88728008588154 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 145.5919037469228 108.731 L 145.5919037469228 62.08917499999999 C 145.5919037469228 59.58917499999999 148.0919037469228 57.08917499999999 150.5919037469228 57.08917499999999 L 160.88728008588154 57.08917499999999 C 163.38728008588154 57.08917499999999 165.88728008588154 59.58917499999999 165.88728008588154 62.08917499999999 L 165.88728008588154 108.731 z "
                            pathFrom="M 145.5919037469228 108.731 L 145.5919037469228 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 145.5919037469228 108.731 z"
                            cy="55.08817499999999" cx="203.8877405134837" j="2" val="201" barHeight="55.641825"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1772"
                            d="M 207.8877405134837 108.731 L 207.8877405134837 35.23714999999999 C 207.8877405134837 32.73714999999999 210.3877405134837 30.237149999999996 212.8877405134837 30.237149999999996 L 223.18311685244242 30.237149999999996 C 225.68311685244242 30.237149999999996 228.18311685244242 32.73714999999999 228.18311685244242 35.23714999999999 L 228.18311685244242 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 207.8877405134837 108.731 L 207.8877405134837 35.23714999999999 C 207.8877405134837 32.73714999999999 210.3877405134837 30.237149999999996 212.8877405134837 30.237149999999996 L 223.18311685244242 30.237149999999996 C 225.68311685244242 30.237149999999996 228.18311685244242 32.73714999999999 228.18311685244242 35.23714999999999 L 228.18311685244242 108.731 z "
                            pathFrom="M 207.8877405134837 108.731 L 207.8877405134837 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 207.8877405134837 108.731 z"
                            cy="28.236149999999995" cx="266.1835772800446" j="3" val="298" barHeight="82.49385"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1774"
                            d="M 270.1835772800446 108.731 L 270.1835772800446 65.96472499999999 C 270.1835772800446 63.46472499999999 272.6835772800446 60.964724999999994 275.1835772800446 60.964724999999994 L 285.47895361900333 60.964724999999994 C 287.97895361900333 60.964724999999994 290.47895361900333 63.46472499999999 290.47895361900333 65.96472499999999 L 290.47895361900333 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 270.1835772800446 108.731 L 270.1835772800446 65.96472499999999 C 270.1835772800446 63.46472499999999 272.6835772800446 60.964724999999994 275.1835772800446 60.964724999999994 L 285.47895361900333 60.964724999999994 C 287.97895361900333 60.964724999999994 290.47895361900333 63.46472499999999 290.47895361900333 65.96472499999999 L 290.47895361900333 108.731 z "
                            pathFrom="M 270.1835772800446 108.731 L 270.1835772800446 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 270.1835772800446 108.731 z"
                            cy="58.963725" cx="328.4794140466054" j="4" val="187" barHeight="51.76627499999999"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1776"
                            d="M 332.4794140466054 108.731 L 332.4794140466054 63.750125 C 332.4794140466054 61.250125 334.9794140466054 58.750125 337.4794140466054 58.750125 L 347.7747903855642 58.750125 C 350.2747903855642 58.750125 352.7747903855642 61.250125 352.7747903855642 63.750125 L 352.7747903855642 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 332.4794140466054 108.731 L 332.4794140466054 63.750125 C 332.4794140466054 61.250125 334.9794140466054 58.750125 337.4794140466054 58.750125 L 347.7747903855642 58.750125 C 350.2747903855642 58.750125 352.7747903855642 61.250125 352.7747903855642 63.750125 L 352.7747903855642 108.731 z "
                            pathFrom="M 332.4794140466054 108.731 L 332.4794140466054 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 332.4794140466054 108.731 z"
                            cy="56.749125" cx="390.7752508131663" j="5" val="195" barHeight="53.98087499999999"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1778"
                            d="M 394.7752508131663 108.731 L 394.7752508131663 37.174924999999995 C 394.7752508131663 34.674924999999995 397.2752508131663 32.174924999999995 399.7752508131663 32.174924999999995 L 410.07062715212504 32.174924999999995 C 412.57062715212504 32.174924999999995 415.07062715212504 34.674924999999995 415.07062715212504 37.174924999999995 L 415.07062715212504 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 394.7752508131663 108.731 L 394.7752508131663 37.174924999999995 C 394.7752508131663 34.674924999999995 397.2752508131663 32.174924999999995 399.7752508131663 32.174924999999995 L 410.07062715212504 32.174924999999995 C 412.57062715212504 32.174924999999995 415.07062715212504 34.674924999999995 415.07062715212504 37.174924999999995 L 415.07062715212504 108.731 z "
                            pathFrom="M 394.7752508131663 108.731 L 394.7752508131663 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 394.7752508131663 108.731 z"
                            cy="30.173924999999997" cx="453.07108757972713" j="6" val="291"
                            barHeight="80.55607499999999" barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1780"
                            d="M 457.07108757972713 108.731 L 457.07108757972713 87.28025 C 457.07108757972713 84.78025 459.57108757972713 82.28025 462.07108757972713 82.28025 L 472.3664639186859 82.28025 C 474.8664639186859 82.28025 477.3664639186859 84.78025 477.3664639186859 87.28025 L 477.3664639186859 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 457.07108757972713 108.731 L 457.07108757972713 87.28025 C 457.07108757972713 84.78025 459.57108757972713 82.28025 462.07108757972713 82.28025 L 472.3664639186859 82.28025 C 474.8664639186859 82.28025 477.3664639186859 84.78025 477.3664639186859 87.28025 L 477.3664639186859 108.731 z "
                            pathFrom="M 457.07108757972713 108.731 L 457.07108757972713 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 457.07108757972713 108.731 z"
                            cy="80.27924999999999" cx="515.366924346288" j="7" val="110" barHeight="30.450749999999996"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1782"
                            d="M 519.366924346288 108.731 L 519.366924346288 58.21362499999999 C 519.366924346288 55.71362499999999 521.866924346288 53.21362499999999 524.366924346288 53.21362499999999 L 534.6623006852467 53.21362499999999 C 537.1623006852467 53.21362499999999 539.6623006852467 55.71362499999999 539.6623006852467 58.21362499999999 L 539.6623006852467 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 519.366924346288 108.731 L 519.366924346288 58.21362499999999 C 519.366924346288 55.71362499999999 521.866924346288 53.21362499999999 524.366924346288 53.21362499999999 L 534.6623006852467 53.21362499999999 C 537.1623006852467 53.21362499999999 539.6623006852467 55.71362499999999 539.6623006852467 58.21362499999999 L 539.6623006852467 108.731 z "
                            pathFrom="M 519.366924346288 108.731 L 519.366924346288 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 519.366924346288 108.731 z"
                            cy="51.212624999999996" cx="577.6627611128489" j="8" val="215"
                            barHeight="59.517374999999994" barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1784"
                            d="M 581.6627611128489 108.731 L 581.6627611128489 9.769250000000008 C 581.6627611128489 7.269250000000008 584.1627611128489 4.769250000000008 586.6627611128489 4.769250000000008 L 596.9581374518076 4.769250000000008 C 599.4581374518076 4.769250000000008 601.9581374518076 7.269250000000008 601.9581374518076 9.769250000000008 L 601.9581374518076 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 581.6627611128489 108.731 L 581.6627611128489 9.769250000000008 C 581.6627611128489 7.269250000000008 584.1627611128489 4.769250000000008 586.6627611128489 4.769250000000008 L 596.9581374518076 4.769250000000008 C 599.4581374518076 4.769250000000008 601.9581374518076 7.269250000000008 601.9581374518076 9.769250000000008 L 601.9581374518076 108.731 z "
                            pathFrom="M 581.6627611128489 108.731 L 581.6627611128489 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 581.6627611128489 108.731 z"
                            cy="2.768250000000009" cx="639.9585978794098" j="9" val="390" barHeight="107.96174999999998"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1786"
                            d="M 643.9585978794098 108.731 L 643.9585978794098 40.21999999999999 C 643.9585978794098 37.71999999999999 646.4585978794098 35.21999999999999 648.9585978794098 35.21999999999999 L 659.2539742183685 35.21999999999999 C 661.7539742183685 35.21999999999999 664.2539742183685 37.71999999999999 664.2539742183685 40.21999999999999 L 664.2539742183685 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 643.9585978794098 108.731 L 643.9585978794098 40.21999999999999 C 643.9585978794098 37.71999999999999 646.4585978794098 35.21999999999999 648.9585978794098 35.21999999999999 L 659.2539742183685 35.21999999999999 C 661.7539742183685 35.21999999999999 664.2539742183685 37.71999999999999 664.2539742183685 40.21999999999999 L 664.2539742183685 108.731 z "
                            pathFrom="M 643.9585978794098 108.731 L 643.9585978794098 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 643.9585978794098 108.731 z"
                            cy="33.218999999999994" cx="702.2544346459707" j="10" val="280" barHeight="77.511"
                            barWidth="24.29537633895874"></path>
                          <path id="SvgjsPath1788"
                            d="M 706.2544346459707 108.731 L 706.2544346459707 86.72659999999999 C 706.2544346459707 84.22659999999999 708.7544346459707 81.72659999999999 711.2544346459707 81.72659999999999 L 721.5498109849294 81.72659999999999 C 724.0498109849294 81.72659999999999 726.5498109849294 84.22659999999999 726.5498109849294 86.72659999999999 L 726.5498109849294 108.731 z "
                            fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                            stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area"
                            index="0" clip-path="url(#gridRectBarMaskwqswubs6)"
                            pathTo="M 706.2544346459707 108.731 L 706.2544346459707 86.72659999999999 C 706.2544346459707 84.22659999999999 708.7544346459707 81.72659999999999 711.2544346459707 81.72659999999999 L 721.5498109849294 81.72659999999999 C 724.0498109849294 81.72659999999999 726.5498109849294 84.22659999999999 726.5498109849294 86.72659999999999 L 726.5498109849294 108.731 z "
                            pathFrom="M 706.2544346459707 108.731 L 706.2544346459707 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 706.2544346459707 108.731 z"
                            cy="79.72559999999999" cx="764.5502714125316" j="11" val="112"
                            barHeight="31.004399999999997" barWidth="24.29537633895874"></path>
                          <g id="SvgjsG1763" class="apexcharts-bar-goals-markers">
                            <g id="SvgjsG1765" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1767" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1769" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1771" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1773" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1775" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1777" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1779" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1781" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1783" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1785" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                            <g id="SvgjsG1787" className="apexcharts-bar-goals-groups"
                              class="apexcharts-hidden-element-shown" clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                          </g>
                          <g id="SvgjsG1764" class="apexcharts-bar-shadows apexcharts-hidden-element-shown"></g>
                        </g>
                        <g id="SvgjsG1762" class="apexcharts-datalabels apexcharts-hidden-element-shown"
                          data:realIndex="0"></g>
                      </g>
                      <line id="SvgjsLine1800" x1="0" y1="0" x2="747.5500411987305" y2="0" stroke="#b6b6b6"
                        stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs">
                      </line>
                      <line id="SvgjsLine1801" x1="0" y1="0" x2="747.5500411987305" y2="0" stroke-dasharray="0"
                        stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                      <g id="SvgjsG1802" class="apexcharts-xaxis" transform="translate(0, 0)">
                        <g id="SvgjsG1803" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text
                            id="SvgjsText1805" font-family="Outfit, sans-serif" x="31.147918383280437" y="138.73"
                            text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1806">Jan</tspan>
                            <title>Jan</title>
                          </text><text id="SvgjsText1808" font-family="Outfit, sans-serif" x="93.44375514984131"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1809">Feb</tspan>
                            <title>Feb</title>
                          </text><text id="SvgjsText1811" font-family="Outfit, sans-serif" x="155.7395919164022"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1812">Mar</tspan>
                            <title>Mar</title>
                          </text><text id="SvgjsText1814" font-family="Outfit, sans-serif" x="218.03542868296307"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1815">Apr</tspan>
                            <title>Apr</title>
                          </text><text id="SvgjsText1817" font-family="Outfit, sans-serif" x="280.3312654495239"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1818">May</tspan>
                            <title>May</title>
                          </text><text id="SvgjsText1820" font-family="Outfit, sans-serif" x="342.6271022160848"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1821">Jun</tspan>
                            <title>Jun</title>
                          </text><text id="SvgjsText1823" font-family="Outfit, sans-serif" x="404.92293898264563"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1824">Jul</tspan>
                            <title>Jul</title>
                          </text><text id="SvgjsText1826" font-family="Outfit, sans-serif" x="467.2187757492065"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1827">Aug</tspan>
                            <title>Aug</title>
                          </text><text id="SvgjsText1829" font-family="Outfit, sans-serif" x="529.5146125157675"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1830">Sep</tspan>
                            <title>Sep</title>
                          </text><text id="SvgjsText1832" font-family="Outfit, sans-serif" x="591.8104492823284"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1833">Oct</tspan>
                            <title>Oct</title>
                          </text><text id="SvgjsText1835" font-family="Outfit, sans-serif" x="654.1062860488893"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1836">Nov</tspan>
                            <title>Nov</title>
                          </text><text id="SvgjsText1838" font-family="Outfit, sans-serif" x="716.4021228154502"
                            y="138.73" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400"
                            fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label "
                            style="font-family: Outfit, sans-serif;">
                            <tspan id="SvgjsTspan1839">Dec</tspan>
                            <title>Dec</title>
                          </text></g>
                      </g>
                      <g id="SvgjsG1857" class="apexcharts-yaxis-annotations"></g>
                      <g id="SvgjsG1858" class="apexcharts-xaxis-annotations"></g>
                      <g id="SvgjsG1859" class="apexcharts-point-annotations"></g>
                    </g>
                  </svg>
                  <div class="apexcharts-tooltip apexcharts-theme-light">
                    <div class="apexcharts-tooltip-series-group apexcharts-tooltip-series-group-0" style="order: 1;">
                      <span class="apexcharts-tooltip-marker" style="background-color: rgb(70, 95, 255);"></span>
                      <div class="apexcharts-tooltip-text" style="font-family: Outfit, sans-serif; font-size: 12px;">
                        <div class="apexcharts-tooltip-y-group"><span
                            class="apexcharts-tooltip-text-y-label"></span><span
                            class="apexcharts-tooltip-text-y-value"></span></div>
                        <div class="apexcharts-tooltip-goals-group"><span
                            class="apexcharts-tooltip-text-goals-label"></span><span
                            class="apexcharts-tooltip-text-goals-value"></span></div>
                        <div class="apexcharts-tooltip-z-group"><span
                            class="apexcharts-tooltip-text-z-label"></span><span
                            class="apexcharts-tooltip-text-z-value"></span></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div class="apexcharts-yaxistooltip-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ====== Chart One End -->
        </div>
        <div class="col-span-12 xl:col-span-5">
          <!-- ====== Chart Two Start -->
          <div class="rounded-2xl border border-gray-200 bg-gray-100">
            <div class="shadow-default rounded-2xl bg-white px-5 pb-11 pt-5 sm:px-6 sm:pt-6">
              <div class="flex justify-between">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Monthly Target
                  </h3>
                  <p class="mt-1 text-theme-sm text-gray-500">
                    Target you’ve set for each month
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
              <div class="relative max-h-[195px]">
                <div id="chartTwo" class="h-full" style="min-height: 229px;">
                  <div id="apexchartst8x62l0dj" class="apexcharts-canvas apexchartst8x62l0dj apexcharts-theme-"
                    style="width: 556px; height: 229px;"><svg id="SvgjsSvg1860" width="556" height="229"
                      xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)">
                      <foreignObject x="0" y="0" width="556" height="229">
                        <div xmlns="http://www.w3.org/1999/xhtml"
                          style="position: relative; height: 100%; width: 100%;">
                          <div class="apexcharts-legend"></div>
                        </div>
                      </foreignObject>
                      <g id="SvgjsG1862" class="apexcharts-inner apexcharts-graphical" transform="translate(113, 1)">
                        <defs id="SvgjsDefs1861">
                          <clipPath id="gridRectMaskt8x62l0dj">
                            <rect id="SvgjsRect1863" width="330" height="328" x="0" y="0" rx="0" ry="0" opacity="1"
                              stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                          </clipPath>
                          <clipPath id="gridRectBarMaskt8x62l0dj">
                            <rect id="SvgjsRect1864" width="336" height="334" x="-3" y="-3" rx="0" ry="0" opacity="1"
                              stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                          </clipPath>
                          <clipPath id="gridRectMarkerMaskt8x62l0dj">
                            <rect id="SvgjsRect1865" width="330" height="328" x="0" y="0" rx="0" ry="0" opacity="1"
                              stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                          </clipPath>
                          <clipPath id="forecastMaskt8x62l0dj"></clipPath>
                          <clipPath id="nonForecastMaskt8x62l0dj"></clipPath>
                        </defs>
                        <g id="SvgjsG1868" class="apexcharts-radialbar">
                          <g id="SvgjsG1869">
                            <g id="SvgjsG1870" class="apexcharts-tracks">
                              <g id="SvgjsG1871" class="apexcharts-radialbar-track apexcharts-track" rel="1">
                                <path id="apexcharts-radialbarTrack-0"
                                  d="M 26.5 163.99999999999997 A 138.5 138.5 0 0 1 303.5 164 " fill="none"
                                  fill-opacity="1" stroke="rgba(228,231,236,0.85)" stroke-opacity="1"
                                  stroke-linecap="round" stroke-width="11" stroke-dasharray="0"
                                  class="apexcharts-radialbar-area"
                                  data:pathOrig="M 26.5 163.99999999999997 A 138.5 138.5 0 0 1 303.5 164 "></path>
                              </g>
                            </g>
                            <g id="SvgjsG1873">
                              <g id="SvgjsG1876" class="apexcharts-series apexcharts-radial-series"
                                seriesName="Progress" rel="1" data:realIndex="0">
                                <path id="SvgjsPath1877"
                                  d="M 26.5 163.99999999999997 A 138.5 138.5 0 0 1 264.6285623469032 67.78981569142888 "
                                  fill="none" fill-opacity="0.85" stroke="rgba(70,95,255,0.85)" stroke-opacity="1"
                                  stroke-linecap="round" stroke-width="11" stroke-dasharray="0"
                                  class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="136"
                                  data:value="75.55" index="0" j="0"
                                  data:pathOrig="M 26.5 163.99999999999997 A 138.5 138.5 0 0 1 264.6285623469032 67.78981569142888 ">
                                </path>
                              </g>
                              <circle id="SvgjsCircle1874" r="128" cx="165" cy="164" class="apexcharts-radialbar-hollow"
                                fill="transparent"></circle>
                              <g id="SvgjsG1866" class="apexcharts-datalabels-group"
                                transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText1875"
                                  font-family="Outfit, sans-serif" x="165" y="224" text-anchor="middle"
                                  dominant-baseline="auto" font-size="36px" font-weight="600" fill="#1d2939"
                                  class="apexcharts-text apexcharts-datalabel-value"
                                  style="font-family: Outfit, sans-serif;">75.55%</text></g>
                            </g>
                          </g>
                        </g>
                        <line id="SvgjsLine1878" x1="0" y1="0" x2="330" y2="0" stroke="#b6b6b6" stroke-dasharray="0"
                          stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line>
                        <line id="SvgjsLine1879" x1="0" y1="0" x2="330" y2="0" stroke-dasharray="0" stroke-width="0"
                          stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                      </g>
                      <g id="SvgjsG1867" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"></g>
                    </svg></div>
                </div>
                <span
                  class="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">+10%</span>
              </div>
              <p class="mx-auto mt-1.5 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
                You earn $3287 today, it's higher than last month. Keep up your good work!
              </p>
            </div>

            <div class="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
              <div>
                <p class="mb-1 text-center text-theme-xs text-gray-500 sm:text-sm">
                  Target
                </p>
                <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 sm:text-lg">
                  $20K
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.26816 13.6632C7.4056 13.8192 7.60686 13.9176 7.8311 13.9176C7.83148 13.9176 7.83187 13.9176 7.83226 13.9176C8.02445 13.9178 8.21671 13.8447 8.36339 13.6981L12.3635 9.70076C12.6565 9.40797 12.6567 8.9331 12.3639 8.6401C12.0711 8.34711 11.5962 8.34694 11.3032 8.63973L8.5811 11.36L8.5811 2.5C8.5811 2.08579 8.24531 1.75 7.8311 1.75C7.41688 1.75 7.0811 2.08579 7.0811 2.5L7.0811 11.3556L4.36354 8.63975C4.07055 8.34695 3.59568 8.3471 3.30288 8.64009C3.01008 8.93307 3.01023 9.40794 3.30321 9.70075L7.26816 13.6632Z"
                      fill="#D92D20"></path>
                  </svg>
                </p>
              </div>

              <div class="h-7 w-px bg-gray-200"></div>

              <div>
                <p class="mb-1 text-center text-theme-xs text-gray-500 sm:text-sm">
                  Revenue
                </p>
                <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 sm:text-lg">
                  $20K
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                      fill="#039855"></path>
                  </svg>
                </p>
              </div>

              <div class="h-7 w-px bg-gray-200"></div>

              <div>
                <p class="mb-1 text-center text-theme-xs text-gray-500 sm:text-sm">
                  Today
                </p>
                <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 sm:text-lg">
                  $20K
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"
                      fill="#039855"></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <!-- ====== Chart Two End -->
        </div>

        <div class="col-span-12 xl:col-span-5">
          <!-- ====== Map One Start -->
          <div class="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div class="flex justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Customers Demographic
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
        </div>

        <div class="col-span-12 xl:col-span-7">
          <!-- ====== Table One Start -->
          <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6">
            <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Recent Orders
                </h3>
              </div>

              <div class="flex items-center gap-3">
                <button
                  class="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800">
                  <svg class="stroke-current fill-white" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.29004 5.90393H17.7067" stroke="" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M17.7075 14.0961H2.29085" stroke="" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                      fill="" stroke="" stroke-width="1.5"></path>
                    <path
                      d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                      fill="" stroke="" stroke-width="1.5"></path>
                  </svg>

                  Filter
                </button>

                <button
                  class="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800">
                  See all
                </button>
              </div>
            </div>

            <div class="max-w-full overflow-x-auto custom-scrollbar">
              <table class="min-w-full">
                <!-- table header start -->
                <thead class="border-gray-100 border-y ">
                  <tr>
                    <th class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center">
                        <p class="font-medium text-gray-500 text-theme-xs">
                          Products
                        </p>
                      </div>
                    </th>
                    <th class="px-6 py-3 whitespace-nowrap">
                      <div class="flex items-center">
                        <p class="font-medium text-gray-500 text-theme-xs">
                          Category
                        </p>
                      </div>
                    </th>
                    <th class="px-6 py-3 whitespace-nowrap">
                      <div class="flex items-center">
                        <p class="font-medium text-gray-500 text-theme-xs">
                          Price
                        </p>
                      </div>
                    </th>
                    <th class="px-6 py-3 whitespace-nowrap">
                      <div class="flex items-center">
                        <p class="font-medium text-gray-500 text-theme-xs">
                          Status
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <!-- table header end -->

                <!-- table body start -->
                <tbody class="py-3 divide-y divide-gray-100">
                  <tr>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center">
                        <div class="flex items-center gap-3">
                          <div class="h-[50px] w-[50px] overflow-hidden rounded-md">
                            <img src="/img/products/product-01.jpg" alt="Product">
                          </div>
                          <div>
                            <p class="font-medium text-gray-800 text-theme-sm">
                              Sony WH-1000XM3
                            </p>
                            <span class="text-gray-500 text-theme-xs">
                              3 Variants
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center">
                        <p class="text-gray-500 text-theme-sm">
                          Electronics
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center">
                        <p class="text-gray-500 text-theme-sm">
                          $199.21
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center">
                        <p class="bg-success-50 text-theme-xs text-success-600 rounded-full px-2 py-0.5 font-medium">
                          Delivered
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-4">
                        <div class="flex items-center gap-3">
                          <div class="h-[50px] w-[50px] overflow-hidden rounded-md">
                            <img src="/img/products/product-02.jpg" alt="Product">
                          </div>
                          <div>
                            <p class="font-medium text-gray-800 text-theme-sm">
                              Bartscher Toaster
                            </p>
                            <span class="text-gray-500 text-theme-xs">
                              1 Variants
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          Electronics
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          $49.00
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="bg-warning-50 text-theme-xs text-warning-600 rounded-full px-2 py-0.5 font-medium">
                          Pending
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-4">
                        <div class="flex items-center gap-3">
                          <div class="h-[50px] w-[50px] overflow-hidden rounded-md">
                            <img src="/img/products/product-03.jpg" alt="Product">
                          </div>
                          <div>
                            <p class="font-medium text-gray-800 text-theme-sm">
                              Canon EOS 700D
                            </p>
                            <span class="text-gray-500 text-theme-xs">
                              1 Variants
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          Electronics
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          $367.00
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="bg-success-50 text-theme-xs text-success-600 rounded-full px-2 py-0.5 font-medium">
                          Delivered
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-4">
                        <div class="flex items-center gap-3">
                          <div class="h-[50px] w-[50px] overflow-hidden rounded-md">
                            <img src="/img/products/product-04.jpg" alt="Product">
                          </div>
                          <div>
                            <p class="font-medium text-gray-800 text-theme-sm">
                              PEPE JEANS HER Eau De Parfum
                            </p>
                            <span class="text-gray-500 text-theme-xs">
                              1 Variants
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          Perfumery & cosmetics
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          $40.00
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="bg-error-50 text-theme-xs text-error-600 rounded-full px-2 py-0.5 font-medium">
                          Canceled
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-4">
                        <div class="flex items-center gap-3">
                          <div class="h-[50px] w-[50px] overflow-hidden rounded-md">
                            <img src="/img/products/product-05.jpg" alt="Product">
                          </div>
                          <div>
                            <p class="font-medium text-gray-800 text-theme-sm">
                              Windor solar protection glasses
                            </p>
                            <span class="text-gray-500 text-theme-xs">
                              4 Variants
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          Accessories
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="text-gray-500 text-theme-sm">
                          $30.00
                        </p>
                      </div>
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap first:pl-0">
                      <div class="flex items-center col-span-2">
                        <p class="bg-success-50 text-theme-xs text-success-700 rounded-full px-2 py-0.5 font-medium">
                          Delivered
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <!-- table body end -->
              </table>
            </div>
          </div>
          <!-- ====== Table One End -->
        </div>
      </div>

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const openDropDown = ref(true);

</script>
