<template>
  <div>
    <header class="z-30 flex items-center w-full h-24 sm:h-24 navbar">
      <div class="container flex items-center justify-between max-w-full px-4 px-6 py-6 mx-auto sm:px-6 lg:px-8">
        <nuxt-link to="/" class="text-3xl font-black text-gray-800">
          Tripma
        </nuxt-link>
        <div class="flex items-center">
          <nav class="items-center hidden text-lg text-gray-800 font-sen lg:flex">
            <nuxt-link to="/destinations" class="flex px-6 py-2">Destinations</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Hotels</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Flights</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Bookings</nuxt-link>
            <nuxt-link to="/auth/login" v-if="!isAuthenticated" class="flex px-6 py-2">Login</nuxt-link>
            <nuxt-link to="/auth/sign-up" v-if="!isAuthenticated"
              class="flex items-center px-6 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white">Sign
              up</nuxt-link>
            <nuxt-link to="" role="button" v-if="isAuthenticated" @click="logout"
              class="flex items-center px-6 py-2 text-gray-800 transition">
              <icon name="mdi:logout" size="30px" />
            </nuxt-link>
          </nav>
          <button type="button" class="flex flex-col ml-4 lg:hidden" @click="toggleMenu">
            <icon name="mingcute:menu-fill" class="mb-1" />
          </button>
        </div>
      </div>
    </header>
    <transition name="menu-fade">
      <div v-if="isMenuOpen" class="px-6 py-4 space-y-2 bg-white shadow-md lg:hidden">
        <nuxt-link to="/destinations" class="block py-2">Destinations</nuxt-link>
        <nuxt-link to="#" class="block py-2">Hotels</nuxt-link>
        <nuxt-link to="#" class="block py-2">Flights</nuxt-link>
        <nuxt-link to="#" class="block py-2">Bookings</nuxt-link>
        <div class="mt-2">
          <nuxt-link to="/auth/login" v-if="!isAuthenticated" class="py-2 pe-4">Login</nuxt-link>
          <nuxt-link to="/auth/sign-up" v-if="!isAuthenticated"
            class="px-4 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white">Sign
            up</nuxt-link>
          <nuxt-link to="" role="button" v-if="isAuthenticated" @click="logout"
            class="px-6 py-2 text-gray-800 transition">
            <icon name="mdi:logout" size="30px" />
          </nuxt-link>
        </div>
      </div>
    </transition>

    <!-- overlay -->
    <Overlay :visible="showOverlay" />
  </div>
</template>

<script setup>
const store = useAuthStore()

const isMenuOpen = ref(false)
const showOverlay = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const logout = async () => {
  try {
    showOverlay.value = true;
    await store.logout();
    setTimeout(() => {
      showOverlay.value = false;
      navigateTo('/auth/login');
    }, 3000);
  } catch (error) {
    console.log(error);
    showOverlay.value = false;
  }
}

const isAuthenticated = computed(() => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  } else {
    return false;
  }
});
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