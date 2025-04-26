<template>
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
                    <img src="@/assets/img/products/product-01.jpg" alt="Product">
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
                    <img src="@/assets/img/products/product-02.jpg" alt="Product">
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
                    <img src="@/assets/img/products/product-03.jpg" alt="Product">
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
                    <img src="@/assets/img/products/product-04.jpg" alt="Product">
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
                    <img src="@/assets/img/products/product-05.jpg" alt="Product">
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
</template>