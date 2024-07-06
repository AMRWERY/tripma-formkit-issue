<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <span class="text-xl">{{ $t('hotels.take_a_dip_at_these_top_rated_hotels') }}</span>
      <div>
        <!--Tabs navigation-->
        <ul class="flex flex-row flex-wrap mb-5 list-none border-b-0 ps-0" role="tablist" data-twe-nav-ref>
          <li role="presentation">
            <nuxt-link to=""
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 cursor-pointer pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-egypt" data-twe-nav-active role="tab"
              aria-controls="tabs-egypt" aria-selected="true">
              <icon name="flag:eg-4x3" class="me-2" />
              {{ $t('hotels.egypt') }}
            </nuxt-link>
          </li>
          <li role="presentation">
            <nuxt-link to=""
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 cursor-pointer pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-turkiye" role="tab" aria-controls="tabs-turkiye"
              aria-selected="false">
              <icon name="flag:tr-4x3" class="me-2" />
              {{ $t('hotels.türkiye') }}
            </nuxt-link>
          </li>
          <li role="presentation">
            <nuxt-link to=""
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 cursor-pointer pb-3.5 pt-4 text-sm font-semibold leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-spain" role="tab" aria-controls="tabs-spain"
              aria-selected="false">
              <icon name="flag:es-4x3" class="me-2" />
              {{ $t('hotels.spain') }}
            </nuxt-link>
          </li>
        </ul>

        <!--Tabs content-->
        <div class="mb-6">
          <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-egypt" role="tabpanel" aria-labelledby="tabs-egypt-tab" data-twe-tab-active>
            <div class="flex justify-center">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div v-for="item in egyptPlaces" :key="item.id"
                  class="relative flex flex-col w-full max-w-lg overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md">
                  <nuxt-link class="relative flex w-full mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="">
                    <img class="object-cover w-full h-full" :src="item.img" />
                  </nuxt-link>
                  <div class="px-5 pb-5 mt-4 text-start">
                    <nuxt-link to="">
                      <h5 class="text-xl tracking-tight text-slate-900">
                        {{ item.title }}
                      </h5>
                    </nuxt-link>
                    <div class="flex items-center justify-between mt-2 mb-5">
                      <span class="text-sm font-bold text-slate-900">{{ item.rate }}</span>
                      <span class="text-sm text-slate-900 ms-3">({{ item.count }})</span>
                      <span class="text-sm text-slate-900 ms-auto">
                        <icon name="solar:map-point-linear" size="15px" /> {{ item.place }}
                      </span>
                    </div>
                    <div class="flex items-center mt-2 mb-5">
                      <span class="text-sm text-slate-900">
                        <icon :name="item.featureOneIcon" size="18px" class="text-[#60add9]" /> {{ item.featureOne }}
                      </span>
                      <span class="text-sm text-slate-900 ms-3">
                        <icon :name="item.featureTwoIcon" size="18px" class="text-[#60add9]" /> {{ item.featureTwo }}
                      </span>
                    </div>
                    <nuxt-link :to="'/hotels/top-rated-hotels/1'" type="button"
                      class="flex items-center justify-center rounded-md bg-[#007cc2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full">
                      {{ $t('buttons.check_prices') }}</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-turkiye" role="tabpanel" aria-labelledby="tabs-turkiye-tab">
            <div class="flex justify-center">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div v-for="item in turkiyePlaces" :key="item.id"
                  class="relative flex flex-col w-full max-w-lg overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md">
                  <nuxt-link class="relative flex w-full mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="">
                    <img class="object-cover w-full h-full" :src="item.img" />
                  </nuxt-link>
                  <div class="px-5 pb-5 mt-4 text-start">
                    <nuxt-link to="">
                      <h5 class="text-xl tracking-tight text-slate-900">
                        {{ item.title }}
                      </h5>
                    </nuxt-link>
                    <div class="flex items-center justify-between mt-2 mb-5">
                      <span class="text-sm font-bold text-slate-900">{{ item.rate }}</span>
                      <span class="text-sm text-slate-900 ms-3">({{ item.count }})</span>
                      <span class="text-sm text-slate-900 ms-auto">
                        <icon name="solar:map-point-linear" size="15px" /> {{ item.place }}
                      </span>
                    </div>
                    <div class="flex items-center mt-2 mb-5">
                      <span class="text-sm text-slate-900">
                        <icon :name="item.featureOneIcon" size="18px" class="text-[#60add9]" /> {{ item.featureOne }}
                      </span>
                      <span class="text-sm text-slate-900 ms-3">
                        <icon :name="item.featureTwoIcon" size="18px" class="text-[#60add9]" /> {{ item.featureTwo }}
                      </span>
                      <span class="text-sm text-slate-900 ms-3">
                        <icon :name="item.featureThreeIcon" size="18px" class="text-[#60add9]" /> {{ item.featureThree
                        }}
                      </span>
                    </div>
                    <nuxt-link to="" type="button"
                      class="flex items-center justify-center rounded-md bg-[#007cc2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full">
                      Check Prices</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
            id="tabs-spain" role="tabpanel" aria-labelledby="tabs-turkiye-tab">
            <div class="flex justify-center">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div v-for="item in spainPlaces" :key="item.id"
                  class="relative flex flex-col w-full max-w-lg overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md">
                  <nuxt-link class="relative flex w-full mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="">
                    <img class="object-cover w-full h-full" :src="item.img" />
                  </nuxt-link>
                  <div class="px-5 pb-5 mt-4 text-start">
                    <nuxt-link to="">
                      <h5 class="text-xl tracking-tight truncate text-slate-900">
                        {{ item.title }}
                      </h5>
                    </nuxt-link>
                    <div class="flex items-center justify-between mt-2 mb-5">
                      <span class="text-sm font-bold text-slate-900">{{ item.rate }}</span>
                      <span class="text-sm text-slate-900 ms-3">({{ item.count }})</span>
                      <span class="text-sm text-slate-900 ms-auto">
                        <icon name="solar:map-point-linear" size="15px" /> {{ item.place }}
                      </span>
                    </div>
                    <div class="flex items-center mt-2 mb-5">
                      <span class="text-sm text-slate-900">
                        <icon :name="item.featureOneIcon" size="18px" class="text-[#60add9]" /> {{ item.featureOne }}
                      </span>
                      <span class="text-sm text-slate-900 ms-3">
                        <icon :name="item.featureTwoIcon" size="18px" class="text-[#60add9]" /> {{ item.featureTwo }}
                      </span>
                      <span class="text-sm text-slate-900 ms-3">
                        <icon :name="item.featureThreeIcon" size="18px" class="text-[#60add9]" /> {{ item.featureThree
                        }}
                      </span>
                    </div>
                    <nuxt-link to="" type="button"
                      class="flex items-center justify-center rounded-md bg-[#007cc2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full">
                      Check Prices</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const store = useTopRatedHotelsStore()

onMounted(() => {
  store.fetchPlaces()
})

const egyptPlaces = computed(() => {
  return store.places.flatMap(place => place.egy || []);
});

const turkiyePlaces = computed(() => {
  return store.places.flatMap(place => place.tur || []);
});

const spainPlaces = computed(() => {
  return store.places.flatMap(place => place.spa || []);
});

onMounted(async () => {
  const { Tab, initTWE } = await import("tw-elements");
  initTWE({ Tab });
});
</script>
