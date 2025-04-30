<template>
  <NuxtLayout>
    <div>
      <h3 class="text-3xl font-semibold text-gray-700">Forms</h3>

      <div class="mt-4 flex flex-wrap gap-6">
        <!-- Model Form -->
        <div class="flex-1 min-w-[300px]">
          <h4 class="text-gray-600">Model Form</h4>
          <div class="mt-4">
            <div class="w-full max-w-sm overflow-hidden bg-white border rounded-md shadow-md">
              <form>
                <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
                  <h3 class="text-sm">Add Category</h3>
                  <button type="button">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b space-y-4">

                  <!-- Name -->
                  <div>
                    <label class="text-xs">Name</label>
                    <div class="relative mt-2">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <input type="text" placeholder="Category Name"
                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-40" />
                    </div>
                  </div>

                  <!-- Slug -->
                  <div>
                    <label class="text-xs">Slug</label>
                    <div class="relative mt-2">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                      <input type="text" placeholder="Slug"
                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-40" />
                    </div>
                  </div>

                  <!-- Description -->
                  <div>
                    <label class="text-xs">Description</label>
                    <div class="relative mt-2">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </span>
                      <textarea rows="2" placeholder="Enter description"
                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md resize-none focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-40"></textarea>
                    </div>
                  </div>

                  <!-- Icon -->
                  <div>
                    <label class="text-xs">Icon</label>
                    <div class="relative mt-2">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                      </span>
                      <input type="text" placeholder="e.g., fa-solid fa-star"
                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-40" />
                    </div>
                  </div>

                </div>

                <div class="flex items-center justify-between px-5 py-3">
                  <button type="button"
                    class="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
                    Cancel
                  </button>
                  <button type="submit"
                    class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Login Form -->
        <div class="flex-1 min-w-[300px]">
          <h4 class="text-gray-600">Login Form</h4>
          <div class="mt-4">
            <div class="w-full max-w-sm overflow-hidden bg-white border rounded-md shadow-md">
              <form>
                <div class="flex items-center justify-between px-5 py-3 text-gray-700 border-b">
                  <h3 class="text-sm">User Login</h3>
                  <button type="button">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="px-5 py-6 text-gray-700 bg-gray-200 border-b space-y-4">

                  <!-- Email -->
                  <div>
                    <label class="text-xs">Email</label>
                    <div class="relative mt-2">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                          <path d="M10 17l5-5-5-5" />
                          <path d="M15 12H3" />
                        </svg>
                      </span>
                      <input type="email" placeholder="you@example.com"
                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-40" />
                    </div>
                  </div>

                  <!-- Password -->
                  <div>
                    <label class="text-xs">Password</label>
                    <div class="relative mt-2">
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" />
                          <path d="M16 8V6a4 4 0 00-8 0v2" />
                          <rect width="16" height="12" x="4" y="8" rx="2" ry="2" />
                        </svg>
                      </span>
                      <input type="password" placeholder="********"
                        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-40" />
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between px-5 py-3">
                  <button type="button"
                    class="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
                    Cancel
                  </button>
                  <button type="submit"
                    class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h4 class="text-gray-600">Forms</h4>

        <div class="mt-4">
          <div class="p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg font-semibold text-gray-700 capitalize">
              Account settings
            </h2>

            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label class="text-gray-700" for="username">Username</label>
                  <input
                    class="pl-2 w-full mt-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text" v-model="user.username" placeholder="Username" />
                </div>

                <div>
                  <label class="text-gray-700" for="emailAddress">Email Address</label>
                  <input
                    class="pl-2 w-full mt-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="email" v-model="user.email" placeholder="Email" />
                </div>

                <div>
                  <label class="text-gray-700" for="password">Password</label>
                  <input
                    class="pl-2 w-full mt-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="password" v-model="user.password" placeholder="Password" />
                </div>

                <div>
                  <label class="text-gray-700" for="passwordConfirmation">Password Confirmation</label>
                  <input
                    class="pl-2 w-full mt-2 border border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="password" v-model="user.confirm" placeholder="Password" />
                </div>
              </div>

              <div class="flex justify-end mt-4">
                <button
                  class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
interface User {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

const user = ref<User>({
  username: "",
  email: "",
  password: "",
  confirm: "",
});
</script>
