<template>
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
            xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)">
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
                  <rect id="SvgjsRect1755" width="747.5500411987305" height="110.72999999999999" x="0" y="0" rx="0"
                    ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                  </rect>
                </clipPath>
                <clipPath id="gridRectBarMaskwqswubs6">
                  <rect id="SvgjsRect1756" width="755.5500411987305" height="118.72999999999999" x="-4" y="-4" rx="0"
                    ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                  </rect>
                </clipPath>
                <clipPath id="gridRectMarkerMaskwqswubs6">
                  <rect id="SvgjsRect1757" width="747.5500411987305" height="110.72999999999999" x="0" y="0" rx="0"
                    ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                  </rect>
                </clipPath>
                <clipPath id="forecastMaskwqswubs6"></clipPath>
                <clipPath id="nonForecastMaskwqswubs6"></clipPath>
              </defs>
              <rect id="SvgjsRect1754" width="24.29537633895874" height="110.72999999999999" x="0" y="0" rx="0" ry="0"
                opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1750)"
                class="apexcharts-xcrosshairs" y2="110.72999999999999" filter="none" fill-opacity="0.9"></rect>
              <g id="SvgjsG1789" class="apexcharts-grid">
                <g id="SvgjsG1790" class="apexcharts-gridlines-horizontal">
                  <line id="SvgjsLine1794" x1="0" y1="27.682499999999997" x2="747.5500411987305" y2="27.682499999999997"
                    stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                  <line id="SvgjsLine1795" x1="0" y1="55.364999999999995" x2="747.5500411987305" y2="55.364999999999995"
                    stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                  <line id="SvgjsLine1796" x1="0" y1="83.04749999999999" x2="747.5500411987305" y2="83.04749999999999"
                    stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                </g>
                <g id="SvgjsG1791" class="apexcharts-gridlines-vertical"></g>
                <line id="SvgjsLine1799" x1="0" y1="110.72999999999999" x2="747.5500411987305" y2="110.72999999999999"
                  stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
                </line>
                <line id="SvgjsLine1798" x1="0" y1="1" x2="0" y2="110.72999999999999" stroke="transparent"
                  stroke-dasharray="0" stroke-linecap="butt"></line>
              </g>
              <g id="SvgjsG1792" class="apexcharts-grid-borders">
                <line id="SvgjsLine1793" x1="0" y1="0" x2="747.5500411987305" y2="0" stroke="#e0e0e0"
                  stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
                <line id="SvgjsLine1797" x1="0" y1="110.72999999999999" x2="747.5500411987305" y2="110.72999999999999"
                  stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line>
              </g>
              <g id="SvgjsG1760" class="apexcharts-bar-series apexcharts-plot-series">
                <g id="SvgjsG1761" class="apexcharts-series" rel="1" seriesName="Sales" data:realIndex="0">
                  <path id="SvgjsPath1766"
                    d="M 21.000230213801068 108.731 L 21.000230213801068 71.2244 C 21.000230213801068 68.7244 23.500230213801068 66.2244 26.000230213801068 66.2244 L 36.29560655275981 66.2244 C 38.79560655275981 66.2244 41.29560655275981 68.7244 41.29560655275981 71.2244 L 41.29560655275981 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 21.000230213801068 108.731 L 21.000230213801068 71.2244 C 21.000230213801068 68.7244 23.500230213801068 66.2244 26.000230213801068 66.2244 L 36.29560655275981 66.2244 C 38.79560655275981 66.2244 41.29560655275981 68.7244 41.29560655275981 71.2244 L 41.29560655275981 108.731 z "
                    pathFrom="M 21.000230213801068 108.731 L 21.000230213801068 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 41.29560655275981 108.731 L 21.000230213801068 108.731 z"
                    cy="64.2234" cx="79.29606698036194" j="0" val="168" barHeight="46.50659999999999"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1768"
                    d="M 83.29606698036194 108.731 L 83.29606698036194 11.153375000000006 C 83.29606698036194 8.653375000000006 85.79606698036194 6.153375000000006 88.29606698036194 6.153375000000006 L 98.59144331932069 6.153375000000006 C 101.09144331932069 6.153375000000006 103.59144331932069 8.653375000000006 103.59144331932069 11.153375000000006 L 103.59144331932069 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 83.29606698036194 108.731 L 83.29606698036194 11.153375000000006 C 83.29606698036194 8.653375000000006 85.79606698036194 6.153375000000006 88.29606698036194 6.153375000000006 L 98.59144331932069 6.153375000000006 C 101.09144331932069 6.153375000000006 103.59144331932069 8.653375000000006 103.59144331932069 11.153375000000006 L 103.59144331932069 108.731 z "
                    pathFrom="M 83.29606698036194 108.731 L 83.29606698036194 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 103.59144331932069 108.731 L 83.29606698036194 108.731 z"
                    cy="4.152375000000006" cx="141.5919037469228" j="1" val="385" barHeight="106.57762499999998"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1770"
                    d="M 145.5919037469228 108.731 L 145.5919037469228 62.08917499999999 C 145.5919037469228 59.58917499999999 148.0919037469228 57.08917499999999 150.5919037469228 57.08917499999999 L 160.88728008588154 57.08917499999999 C 163.38728008588154 57.08917499999999 165.88728008588154 59.58917499999999 165.88728008588154 62.08917499999999 L 165.88728008588154 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 145.5919037469228 108.731 L 145.5919037469228 62.08917499999999 C 145.5919037469228 59.58917499999999 148.0919037469228 57.08917499999999 150.5919037469228 57.08917499999999 L 160.88728008588154 57.08917499999999 C 163.38728008588154 57.08917499999999 165.88728008588154 59.58917499999999 165.88728008588154 62.08917499999999 L 165.88728008588154 108.731 z "
                    pathFrom="M 145.5919037469228 108.731 L 145.5919037469228 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 165.88728008588154 108.731 L 145.5919037469228 108.731 z"
                    cy="55.08817499999999" cx="203.8877405134837" j="2" val="201" barHeight="55.641825"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1772"
                    d="M 207.8877405134837 108.731 L 207.8877405134837 35.23714999999999 C 207.8877405134837 32.73714999999999 210.3877405134837 30.237149999999996 212.8877405134837 30.237149999999996 L 223.18311685244242 30.237149999999996 C 225.68311685244242 30.237149999999996 228.18311685244242 32.73714999999999 228.18311685244242 35.23714999999999 L 228.18311685244242 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 207.8877405134837 108.731 L 207.8877405134837 35.23714999999999 C 207.8877405134837 32.73714999999999 210.3877405134837 30.237149999999996 212.8877405134837 30.237149999999996 L 223.18311685244242 30.237149999999996 C 225.68311685244242 30.237149999999996 228.18311685244242 32.73714999999999 228.18311685244242 35.23714999999999 L 228.18311685244242 108.731 z "
                    pathFrom="M 207.8877405134837 108.731 L 207.8877405134837 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 228.18311685244242 108.731 L 207.8877405134837 108.731 z"
                    cy="28.236149999999995" cx="266.1835772800446" j="3" val="298" barHeight="82.49385"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1774"
                    d="M 270.1835772800446 108.731 L 270.1835772800446 65.96472499999999 C 270.1835772800446 63.46472499999999 272.6835772800446 60.964724999999994 275.1835772800446 60.964724999999994 L 285.47895361900333 60.964724999999994 C 287.97895361900333 60.964724999999994 290.47895361900333 63.46472499999999 290.47895361900333 65.96472499999999 L 290.47895361900333 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 270.1835772800446 108.731 L 270.1835772800446 65.96472499999999 C 270.1835772800446 63.46472499999999 272.6835772800446 60.964724999999994 275.1835772800446 60.964724999999994 L 285.47895361900333 60.964724999999994 C 287.97895361900333 60.964724999999994 290.47895361900333 63.46472499999999 290.47895361900333 65.96472499999999 L 290.47895361900333 108.731 z "
                    pathFrom="M 270.1835772800446 108.731 L 270.1835772800446 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 290.47895361900333 108.731 L 270.1835772800446 108.731 z"
                    cy="58.963725" cx="328.4794140466054" j="4" val="187" barHeight="51.76627499999999"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1776"
                    d="M 332.4794140466054 108.731 L 332.4794140466054 63.750125 C 332.4794140466054 61.250125 334.9794140466054 58.750125 337.4794140466054 58.750125 L 347.7747903855642 58.750125 C 350.2747903855642 58.750125 352.7747903855642 61.250125 352.7747903855642 63.750125 L 352.7747903855642 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 332.4794140466054 108.731 L 332.4794140466054 63.750125 C 332.4794140466054 61.250125 334.9794140466054 58.750125 337.4794140466054 58.750125 L 347.7747903855642 58.750125 C 350.2747903855642 58.750125 352.7747903855642 61.250125 352.7747903855642 63.750125 L 352.7747903855642 108.731 z "
                    pathFrom="M 332.4794140466054 108.731 L 332.4794140466054 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 352.7747903855642 108.731 L 332.4794140466054 108.731 z"
                    cy="56.749125" cx="390.7752508131663" j="5" val="195" barHeight="53.98087499999999"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1778"
                    d="M 394.7752508131663 108.731 L 394.7752508131663 37.174924999999995 C 394.7752508131663 34.674924999999995 397.2752508131663 32.174924999999995 399.7752508131663 32.174924999999995 L 410.07062715212504 32.174924999999995 C 412.57062715212504 32.174924999999995 415.07062715212504 34.674924999999995 415.07062715212504 37.174924999999995 L 415.07062715212504 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 394.7752508131663 108.731 L 394.7752508131663 37.174924999999995 C 394.7752508131663 34.674924999999995 397.2752508131663 32.174924999999995 399.7752508131663 32.174924999999995 L 410.07062715212504 32.174924999999995 C 412.57062715212504 32.174924999999995 415.07062715212504 34.674924999999995 415.07062715212504 37.174924999999995 L 415.07062715212504 108.731 z "
                    pathFrom="M 394.7752508131663 108.731 L 394.7752508131663 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 415.07062715212504 108.731 L 394.7752508131663 108.731 z"
                    cy="30.173924999999997" cx="453.07108757972713" j="6" val="291" barHeight="80.55607499999999"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1780"
                    d="M 457.07108757972713 108.731 L 457.07108757972713 87.28025 C 457.07108757972713 84.78025 459.57108757972713 82.28025 462.07108757972713 82.28025 L 472.3664639186859 82.28025 C 474.8664639186859 82.28025 477.3664639186859 84.78025 477.3664639186859 87.28025 L 477.3664639186859 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 457.07108757972713 108.731 L 457.07108757972713 87.28025 C 457.07108757972713 84.78025 459.57108757972713 82.28025 462.07108757972713 82.28025 L 472.3664639186859 82.28025 C 474.8664639186859 82.28025 477.3664639186859 84.78025 477.3664639186859 87.28025 L 477.3664639186859 108.731 z "
                    pathFrom="M 457.07108757972713 108.731 L 457.07108757972713 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 477.3664639186859 108.731 L 457.07108757972713 108.731 z"
                    cy="80.27924999999999" cx="515.366924346288" j="7" val="110" barHeight="30.450749999999996"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1782"
                    d="M 519.366924346288 108.731 L 519.366924346288 58.21362499999999 C 519.366924346288 55.71362499999999 521.866924346288 53.21362499999999 524.366924346288 53.21362499999999 L 534.6623006852467 53.21362499999999 C 537.1623006852467 53.21362499999999 539.6623006852467 55.71362499999999 539.6623006852467 58.21362499999999 L 539.6623006852467 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 519.366924346288 108.731 L 519.366924346288 58.21362499999999 C 519.366924346288 55.71362499999999 521.866924346288 53.21362499999999 524.366924346288 53.21362499999999 L 534.6623006852467 53.21362499999999 C 537.1623006852467 53.21362499999999 539.6623006852467 55.71362499999999 539.6623006852467 58.21362499999999 L 539.6623006852467 108.731 z "
                    pathFrom="M 519.366924346288 108.731 L 519.366924346288 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 539.6623006852467 108.731 L 519.366924346288 108.731 z"
                    cy="51.212624999999996" cx="577.6627611128489" j="8" val="215" barHeight="59.517374999999994"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1784"
                    d="M 581.6627611128489 108.731 L 581.6627611128489 9.769250000000008 C 581.6627611128489 7.269250000000008 584.1627611128489 4.769250000000008 586.6627611128489 4.769250000000008 L 596.9581374518076 4.769250000000008 C 599.4581374518076 4.769250000000008 601.9581374518076 7.269250000000008 601.9581374518076 9.769250000000008 L 601.9581374518076 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 581.6627611128489 108.731 L 581.6627611128489 9.769250000000008 C 581.6627611128489 7.269250000000008 584.1627611128489 4.769250000000008 586.6627611128489 4.769250000000008 L 596.9581374518076 4.769250000000008 C 599.4581374518076 4.769250000000008 601.9581374518076 7.269250000000008 601.9581374518076 9.769250000000008 L 601.9581374518076 108.731 z "
                    pathFrom="M 581.6627611128489 108.731 L 581.6627611128489 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 601.9581374518076 108.731 L 581.6627611128489 108.731 z"
                    cy="2.768250000000009" cx="639.9585978794098" j="9" val="390" barHeight="107.96174999999998"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1786"
                    d="M 643.9585978794098 108.731 L 643.9585978794098 40.21999999999999 C 643.9585978794098 37.71999999999999 646.4585978794098 35.21999999999999 648.9585978794098 35.21999999999999 L 659.2539742183685 35.21999999999999 C 661.7539742183685 35.21999999999999 664.2539742183685 37.71999999999999 664.2539742183685 40.21999999999999 L 664.2539742183685 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 643.9585978794098 108.731 L 643.9585978794098 40.21999999999999 C 643.9585978794098 37.71999999999999 646.4585978794098 35.21999999999999 648.9585978794098 35.21999999999999 L 659.2539742183685 35.21999999999999 C 661.7539742183685 35.21999999999999 664.2539742183685 37.71999999999999 664.2539742183685 40.21999999999999 L 664.2539742183685 108.731 z "
                    pathFrom="M 643.9585978794098 108.731 L 643.9585978794098 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 664.2539742183685 108.731 L 643.9585978794098 108.731 z"
                    cy="33.218999999999994" cx="702.2544346459707" j="10" val="280" barHeight="77.511"
                    barWidth="24.29537633895874"></path>
                  <path id="SvgjsPath1788"
                    d="M 706.2544346459707 108.731 L 706.2544346459707 86.72659999999999 C 706.2544346459707 84.22659999999999 708.7544346459707 81.72659999999999 711.2544346459707 81.72659999999999 L 721.5498109849294 81.72659999999999 C 724.0498109849294 81.72659999999999 726.5498109849294 84.22659999999999 726.5498109849294 86.72659999999999 L 726.5498109849294 108.731 z "
                    fill="rgba(70,95,255,1)" fill-opacity="1" stroke="transparent" stroke-opacity="1"
                    stroke-linecap="round" stroke-width="4" stroke-dasharray="0" class="apexcharts-bar-area" index="0"
                    clip-path="url(#gridRectBarMaskwqswubs6)"
                    pathTo="M 706.2544346459707 108.731 L 706.2544346459707 86.72659999999999 C 706.2544346459707 84.22659999999999 708.7544346459707 81.72659999999999 711.2544346459707 81.72659999999999 L 721.5498109849294 81.72659999999999 C 724.0498109849294 81.72659999999999 726.5498109849294 84.22659999999999 726.5498109849294 86.72659999999999 L 726.5498109849294 108.731 z "
                    pathFrom="M 706.2544346459707 108.731 L 706.2544346459707 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 726.5498109849294 108.731 L 706.2544346459707 108.731 z"
                    cy="79.72559999999999" cx="764.5502714125316" j="11" val="112" barHeight="31.004399999999997"
                    barWidth="24.29537633895874"></path>
                  <g id="SvgjsG1763" class="apexcharts-bar-goals-markers">
                    <g id="SvgjsG1765" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1767" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1769" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1771" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1773" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1775" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1777" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1779" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1781" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1783" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1785" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                    <g id="SvgjsG1787" className="apexcharts-bar-goals-groups" class="apexcharts-hidden-element-shown"
                      clip-path="url(#gridRectMarkerMaskwqswubs6)"></g>
                  </g>
                  <g id="SvgjsG1764" class="apexcharts-bar-shadows apexcharts-hidden-element-shown"></g>
                </g>
                <g id="SvgjsG1762" class="apexcharts-datalabels apexcharts-hidden-element-shown" data:realIndex="0"></g>
              </g>
              <line id="SvgjsLine1800" x1="0" y1="0" x2="747.5500411987305" y2="0" stroke="#b6b6b6" stroke-dasharray="0"
                stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs">
              </line>
              <line id="SvgjsLine1801" x1="0" y1="0" x2="747.5500411987305" y2="0" stroke-dasharray="0" stroke-width="0"
                stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
              <g id="SvgjsG1802" class="apexcharts-xaxis" transform="translate(0, 0)">
                <g id="SvgjsG1803" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text
                    id="SvgjsText1805" font-family="Outfit, sans-serif" x="31.147918383280437" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1806">Jan</tspan>
                    <title>Jan</title>
                  </text><text id="SvgjsText1808" font-family="Outfit, sans-serif" x="93.44375514984131" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1809">Feb</tspan>
                    <title>Feb</title>
                  </text><text id="SvgjsText1811" font-family="Outfit, sans-serif" x="155.7395919164022" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1812">Mar</tspan>
                    <title>Mar</title>
                  </text><text id="SvgjsText1814" font-family="Outfit, sans-serif" x="218.03542868296307" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1815">Apr</tspan>
                    <title>Apr</title>
                  </text><text id="SvgjsText1817" font-family="Outfit, sans-serif" x="280.3312654495239" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1818">May</tspan>
                    <title>May</title>
                  </text><text id="SvgjsText1820" font-family="Outfit, sans-serif" x="342.6271022160848" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1821">Jun</tspan>
                    <title>Jun</title>
                  </text><text id="SvgjsText1823" font-family="Outfit, sans-serif" x="404.92293898264563" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1824">Jul</tspan>
                    <title>Jul</title>
                  </text><text id="SvgjsText1826" font-family="Outfit, sans-serif" x="467.2187757492065" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1827">Aug</tspan>
                    <title>Aug</title>
                  </text><text id="SvgjsText1829" font-family="Outfit, sans-serif" x="529.5146125157675" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1830">Sep</tspan>
                    <title>Sep</title>
                  </text><text id="SvgjsText1832" font-family="Outfit, sans-serif" x="591.8104492823284" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1833">Oct</tspan>
                    <title>Oct</title>
                  </text><text id="SvgjsText1835" font-family="Outfit, sans-serif" x="654.1062860488893" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
                    <tspan id="SvgjsTspan1836">Nov</tspan>
                    <title>Nov</title>
                  </text><text id="SvgjsText1838" font-family="Outfit, sans-serif" x="716.4021228154502" y="138.73"
                    text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                    class="apexcharts-text apexcharts-xaxis-label " style="font-family: Outfit, sans-serif;">
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
                <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span
                    class="apexcharts-tooltip-text-y-value"></span></div>
                <div class="apexcharts-tooltip-goals-group"><span
                    class="apexcharts-tooltip-text-goals-label"></span><span
                    class="apexcharts-tooltip-text-goals-value"></span></div>
                <div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span
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
</template>