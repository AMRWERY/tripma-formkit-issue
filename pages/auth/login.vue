<template>
  <div>
    <div class="relative w-full h-screen">
      <img src="https://justfields.com/storage/projects/7M5rV059/Header.png"
        class="absolute inset-0 object-cover w-full h-full">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="py-2 bg-white rounded-2xl">
          <div class="px-4 mx-auto max-w-screen-2xl">
            <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

            <FormKit type="form" v-model="data" @submit="register" class="max-w-lg mx-auto">
              <div class="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label for="email" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Email</label>
                  <!-- <input name="email"
                    class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" /> -->
                  <FormKitSchema :schema="schema" />
                </div>

                <div>
                  <label for="password" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Password</label>
                  <input name="password"
                    class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                </div>

                <button type="submit"
                  class="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Login</button>

                <div class="relative flex items-center justify-center">
                  <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span class="relative px-4 text-sm text-gray-400 bg-white">Log in with social</span>
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
                <p class="text-sm text-center text-gray-500">Don't have an account?
                  <nuxt-link to="#"
                    class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</nuxt-link>
                </p>
              </div>
            </FormKit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FormKitSchema } from "@formkit/vue";
// import schema from '@/dynamic-forms/dynamic-inputs'

const data = reactive({
  email: '',
  password: ''
});

const register = () => {
  console.log('hello world!')
  console.log(email.value)
  console.log(password.value)
}
</script>