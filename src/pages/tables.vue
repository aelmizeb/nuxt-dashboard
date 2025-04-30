<template>
  <NuxtLayout>
    <div>
      <h3 class="text-3xl font-medium text-gray-700">Tables</h3>

      <div class="flex flex-col mt-8">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Name
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Title
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Role
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(u, index) in usersList" :key="index">
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-10 h-10 rounded-full" :src="`/img/users/${u.picture}`" :alt="u.name" />
                      </div>

                      <div class="ml-4">
                        <div class="text-sm font-medium leading-5 text-gray-900">
                          {{ u.name }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ u.email }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.title }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ u.title2 }}
                    </div>
                  </td>

                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                        u.status }}</span>
                  </td>

                  <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                    {{ u.role }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useData } from "~/composable/useData";

const { usersList } = useData();

const config = useRuntimeConfig();
const mediaUrl = config.public.mediaBase;
</script>
