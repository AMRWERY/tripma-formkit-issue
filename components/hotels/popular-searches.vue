<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p class="text-xl">Popular searches</p>
      <div>
        <!--Tabs navigation-->
        <ul class="flex flex-row flex-wrap mb-5 list-none border-b-0 ps-0" role="tablist" data-twe-nav-ref>
          <li role="presentation">
            <nuxt-link to=""
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-cities" data-twe-nav-active role="tab"
              aria-controls="tabs-cities" aria-selected="true">
              Cities
            </nuxt-link>
          </li>
          <li role="presentation">
            <nuxt-link to=""
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-destinations" role="tab" aria-controls="tabs-destinations"
              aria-selected="false">
              Destinations
            </nuxt-link>
          </li>
        </ul>

        <!--Tabs content-->
        <div class="mb-6">
          <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-cities" role="tabpanel" aria-labelledby="tabs-cities-tab" data-twe-tab-active>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :transition="500">
              <Slide v-for="item in citiesPlaces" :key="item.id">
                <div class="carousel__item">
                  <div class="relative max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                    <img class="object-cover w-full h-56 rounded-t-lg" :src="item.img">
                    <div class="absolute inset-0 flex flex-col items-start justify-start p-4">
                      <div class="p-1 bg-white rounded-xl">
                        <h2 class="text-xl font-semibold text-[#007cc2]">{{ item.title }}</h2>
                      </div>
                      <div class="p-1 mt-2 bg-white rounded-xl">
                        <p class="text-[#007cc2]">{{ item.hotels }} <span class="text-gray-800">Hotels</span></p>
                      </div>
                      <div class="p-1 mt-2 bg-white rounded-xl">
                        <p class="text-[#007cc2]"><span class="text-gray-800">Avg.</span> {{ item.avg }}$</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>

          <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-destinations" role="tabpanel" aria-labelledby="tabs-cities-tab">
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :transition="500">
              <Slide v-for="item in destinationsPlaces" :key="item.id">
                <div class="carousel__item">
                  <div class="relative max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                    <img class="object-cover w-full h-56 rounded-t-lg" :src="item.img">
                    <div class="absolute inset-0 flex flex-col items-start justify-start p-4">
                      <div class="p-1 bg-white rounded-xl">
                        <h2 class="text-xl font-semibold text-[#007cc2]">{{ item.title }}</h2>
                      </div>
                      <div class="p-1 mt-2 bg-white rounded-xl">
                        <p class="text-[#007cc2]">{{ item.hotels }} <span class="text-gray-800">Hotels</span></p>
                      </div>
                      <div class="p-1 mt-2 bg-white rounded-xl">
                        <p class="text-[#007cc2]"><span class="text-gray-800">Avg.</span> {{ item.avg }}$</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const store = usePopularSearchesStore();

onMounted(() => {
  store.fetchPlaces();
});

const citiesPlaces = computed(() => {
  return store.places.flatMap(place => place.cities || []);
});

const destinationsPlaces = computed(() => {
  return store.places.flatMap(place => place.destinations || []);
});

const settings = ref({
  itemsToShow: 4.5,
  snapAlign: 'center',
});

const breakpoints = ref({
  412: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  700: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4.5,
    snapAlign: 'center',
  },
});

onMounted(async () => {
  const { Tab, initTWE } = await import("tw-elements");
  initTWE({ Tab });
});
</script>

<style scoped>
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
</style>