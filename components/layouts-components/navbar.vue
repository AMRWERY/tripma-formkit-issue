<template>
  <div>
    <header class="z-30 flex items-center w-full h-24 sm:h-24 navbar">
      <div class="container flex items-center justify-between max-w-full px-6 py-6 mx-auto sm:px-6 lg:px-8">
        <nuxt-link to="/" class="text-3xl font-black text-gray-800 text-gradient" ref="el">
          Tripma
        </nuxt-link>
        <div class="flex items-center">
          <nav class="items-center hidden text-lg text-gray-800 font-sen lg:flex" v-if="!isAuthPage">
            <nuxt-link to="/destinations" class="flex px-6 py-2">{{ $t('layout.destinations') }}</nuxt-link>
            <nuxt-link to="/hotels" class="flex px-6 py-2">{{ $t('layout.hotels') }}</nuxt-link>
            <nuxt-link to="/flights" class="flex px-6 py-2">{{ $t('layout.flights') }}</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">{{ $t('layout.bookings') }}</nuxt-link>
            <!-- Toggle Language -->
            <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-if="isRTL"
              @click="updateLocale('en'); changeLocale('en')">
              <span class="[&>svg]:w-5">
                En
              </span>
            </nuxt-link>
            <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-else
              @click="updateLocale('ar'); changeLocale('ar')">
              <span class="[&>svg]:w-5">
                العربية
              </span>
            </nuxt-link>
            <nuxt-link to="/auth/login" v-if="!isAuthenticated" class="flex px-6 py-2">{{ $t('layout.login')
              }}</nuxt-link>
            <nuxt-link to="/auth/sign-up" v-if="!isAuthenticated"
              class="flex items-center px-6 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white">{{
                $t('layout.sign_up') }}</nuxt-link>
            <nuxt-link to="" role="button" v-if="isAuthenticated" @click="logout"
              class="flex items-center px-6 py-2 text-gray-800 transition">
              <icon name="mdi:logout" size="30px" />
            </nuxt-link>
          </nav>
          <button type="button" class="flex flex-col ml-4 lg:hidden" @click="toggleMenu" v-if="!isAuthPage">
            <icon name="mingcute:menu-fill" class="mb-1" />
          </button>
        </div>
      </div>
    </header>

    <transition name="menu-fade">
      <div v-if="isMenuOpen" class="px-6 py-4 space-y-2 bg-white shadow-md lg:hidden">
        <nuxt-link to="/destinations" class="block py-2">{{ $t('layout.destinations') }}</nuxt-link>
        <nuxt-link to="/hotels" class="block py-2">{{ $t('layout.hotels') }}</nuxt-link>
        <nuxt-link to="/flights" class="block py-2">{{ $t('layout.flights') }}</nuxt-link>
        <nuxt-link to="#" class="block py-2">{{ $t('layout.bookings') }}</nuxt-link>
        <!-- Toggle Language -->
        <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-if="isRTL"
          @click="updateLocale('en'); changeLocale('en')">
          <span class="[&>svg]:w-5">
            En
          </span>
        </nuxt-link>
        <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-else
          @click="updateLocale('ar'); changeLocale('ar')">
          <span class="[&>svg]:w-5">
            العربية
          </span>
        </nuxt-link>
        <div class="mt-2">
          <nuxt-link to="/auth/login" v-if="!isAuthenticated" class="py-2 pe-4">{{ $t('layout.login') }}</nuxt-link>
          <nuxt-link to="/auth/sign-up" v-if="!isAuthenticated"
            class="px-4 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white ms-4">
            {{ $t('layout.sign_up') }}
          </nuxt-link>
          <nuxt-link to="#" role="button" v-if="isAuthenticated" @click="logout"
            class="inline-flex items-center px-6 py-2 text-gray-800 transition border border-gray-800 rounded hover:bg-gray-800 hover:text-white">
            {{ $t('layout.logout') }}
          </nuxt-link>
        </div>
      </div>
    </transition>

    <!-- overlay -->
    <Overlay :visible="showOverlay" />
  </div>
</template>

<script setup>
import { changeLocale } from '@formkit/vue'

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
      location.reload();
    }, 3000);
    navigateTo('/auth/login');
  } catch (error) {
    console.log(error);
    showOverlay.value = false;
  }
}

const { locale, setLocale } = useI18n();

const updateLocale = (value) => {
  setLocale(value);
  localStorage.setItem("locale", value);
  setTimeout(() => {
    location.reload();
  }, 1000);
};

const isRTL = ref(false);

watch(locale, (newVal) => {
  isRTL.value = newVal === 'ar';
});

onMounted(() => {
  const storedLocale = localStorage.getItem("locale");
  if (storedLocale) {
    setLocale(storedLocale);
  }
});

//logo composable
const { el } = useAnimateRotation();

//auth composable
const isAuthenticated = useIsAuthenticated()

//hide routes composable
const { isAuthPage } = useAuthPage();

const closeMenu = () => {
  isMenuOpen.value = false;
};

const router = useRouter();

router.afterEach(() => {
  closeMenu();
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

.text-gradient {
  background: linear-gradient(to right, #4F46E5, #6196A6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>