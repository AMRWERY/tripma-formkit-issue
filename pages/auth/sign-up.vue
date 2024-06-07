<template>
  <div>
    <div class="relative w-full h-screen">
      <img src="https://justfields.com/storage/projects/7M5rV059/Header.png"
        class="absolute inset-0 object-cover w-full h-full">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="py-2 bg-white rounded-2xl">
          <div class="px-4 mx-auto max-w-screen-2xl">
            <h2 class="text-2xl font-bold text-center text-gray-800 lg:text-3xl">Sign up</h2>

            <form class="max-w-lg mx-auto">
              <div class="flex flex-col gap-4 p-4 md:p-8">
                <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  
                  <div class="sm:col-span-3">
                    <label for="first-name" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">First name</label>
                  <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                  </div>
                </div>
              
              <div class="sm:col-span-3">
                <label for="last-name" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Last name</label>
              <div class="mt-2">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
              </div>
            </div>
          </div>
                <div>
                  <label for="email" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Email</label>
                  <input name="email"
                    class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                </div>

                <div>
                  <label for="password" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Password</label>
                  <input name="password"
                    class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                </div>

                <button
                  class="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Sign up</button>

                <div class="relative flex items-center justify-center">
                  <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span class="relative px-4 text-sm text-gray-400 bg-white">Sign up with social</span>
                </div>

                <button type="button"
                  class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-500 rounded-lg outline-none ring-blue-300 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                  <icon name="ic:baseline-facebook" class="w-5 h-5 shrink-0" />
                  Continue with Facebook
                </button>

                <button type="button"
                  class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border border-gray-300 rounded-lg outline-none ring-gray-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                  <icon name="logos:google-icon" class="w-5 h-5 shrink-0" />
                  Continue with Google
                </button>
              </div>

              <div class="flex items-center justify-center p-4 bg-gray-100">
                <p class="text-sm text-center text-gray-500">Already have an account?
                  <nuxt-link to="/auth/login"
                    class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Back to Login</nuxt-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>