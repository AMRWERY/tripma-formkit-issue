<template>
  <div>
    <header class="z-30 flex items-center w-full h-24 sm:h-24 navbar">
      <div class="container flex items-center justify-between px-6 mx-auto">
        <nuxt-link to="/" class="text-3xl font-black text-gray-800">
          Tripma
        </nuxt-link>
        <div class="flex items-center">
          <nav class="items-center hidden text-lg text-gray-800 font-sen lg:flex">
            <nuxt-link to="#" class="flex px-6 py-2">Destinations</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Hotels</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Flights</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Bookings</nuxt-link>
            <nuxt-link to="/auth/login" class="flex px-6 py-2">Login</nuxt-link>
            <nuxt-link to="/auth/sign-up"
              class="flex items-center px-6 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white">Sign
              up</nuxt-link>
          </nav>
          <button type="button" class="flex flex-col ml-4 lg:hidden" @click="toggleMenu">
            <icon name="mingcute:menu-fill" class="mb-1" />
          </button>
        </div>
      </div>
    </header>
    <transition name="menu-fade">
      <div v-if="isMenuOpen" class="px-6 py-4 space-y-2 bg-white shadow-md lg:hidden">
        <nuxt-link to="/" class="block py-2">Destinations</nuxt-link>
        <nuxt-link to="#" class="block py-2">Hotels</nuxt-link>
        <nuxt-link to="#" class="block py-2">Flights</nuxt-link>
        <nuxt-link to="#" class="block py-2">Bookings</nuxt-link>
        <div class="mt-2">
          <nuxt-link to="/auth/login" class="py-2 pe-4">Login</nuxt-link>
          <nuxt-link to="/auth/sign-up"
            class="px-4 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white">Sign
            up</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.5s;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
}
</style>