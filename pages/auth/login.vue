<template>
  <div>
    <div class="relative w-full h-screen">
      <img src="https://justfields.com/storage/projects/7M5rV059/Header.png"
        class="absolute inset-0 object-cover w-full h-full">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="w-full max-w-md py-2 mx-auto bg-white rounded-2xl">
          <div class="mx-auto max-w-screen-2xl">
            <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-4 lg:text-3xl">Login</h2>

            <FormKit type="form" id="login-form" v-model="data" :actions="false" :incomplete-message="false"
              @submit="signIn" class="max-w-lg mx-auto">
              <div class="flex flex-col gap-4 p-4">
                <div>
                  <FormKitSchema :schema="loginSchema" />
                </div>

                <button type="submit" :disabled="loading"
                  class="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                  <div v-if="loading">
                    <span class="me-2">Loading...</span>
                    <icon name="svg-spinners:270-ring-with-bg" />
                  </div>
                  <span v-else>Login</span>
                </button>

                <div class="relative flex items-center justify-center">
                  <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span class="relative px-4 text-sm text-gray-400 bg-white">Log in with social</span>
                </div>

                <!-- <button type="button"
                  class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-500 rounded-lg outline-none ring-blue-300 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                  <icon name="ic:baseline-facebook" class="w-5 h-5 shrink-0" />
                  Continue with Facebook
                </button> -->

                <button type="button" @click="signInWithGoogleAccount"
                  class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border border-gray-300 rounded-lg outline-none ring-gray-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                  <icon name="logos:google-icon" class="w-5 h-5 shrink-0" />
                  Continue with Google
                </button>
              </div>

              <div class="flex items-center justify-center p-4 bg-gray-100">
                <p class="text-sm text-center text-gray-500">Don't have an account?
                  <nuxt-link to="/auth/sign-up"
                    class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</nuxt-link>
                </p>
              </div>

              <div class="flex items-center justify-center p-4 bg-gray-100">
                <p class="text-sm text-center text-gray-500">
                  <nuxt-link to="/auth/reset-password"
                    class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Forget
                    Password</nuxt-link>
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
import { loginSchema } from '@/dynamic-forms/dynamic-inputs'

const store = useAuthStore()

const data = reactive({
  email: '',
  password: ''
});

const loading = ref(false);

const signIn = () => {
  loading.value = true;
  setTimeout(() => {
    store.userSignIn({
      email: data.email,
      password: data.password,
    }).finally(() => {
      loading.value = false;
    });
  }, 3000);
};

const signInWithGoogleAccount = () => {
  store.signInWithGoogle({
    email: data.email,
  });
};
</script>