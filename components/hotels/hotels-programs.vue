<!-- <template>
  <div>
    <div id="accordionExample">
      <div class="mt-8 bg-white border rounded-t-lg border-neutral-200 dark:border-neutral-600 dark:bg-body-dark" v-for="hotel in store.hotels" :key="hotel.id">
        <div class="w-full space-y-4" >
          <div class="flex w-full bg-white rounded-lg shadow-lg">
            <div class="w-1/4">
              <img :src="hotel.img" class="object-cover w-full h-48">
            </div>
            <div class="w-3/4 p-4">
              <div class="flex items-center">
                <h1 class="text-2xl font-bold text-gray-900">{{ hotel.title }}</h1>
                <div class="flex items-center space-x-3 ms-auto">
                  <icon name="heroicons-outline:share" size="22px" />
                  <icon name="charm:heart" size="22px" />
                  <button @click="toggleCollapse"
                    class="group flex items-center rounded-full border-0 bg-white px-3 py-1 text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button" data-twe-collapse-init data-twe-target="#collapseOne" aria-expanded="false"
                    aria-controls="collapseOne">
                    <span
                      class="h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none">
                      <icon name="material-symbols:keyboard-arrow-down-rounded" />
                    </span>
                  </button>
                </div>
              </div>
              <p class="flex mt-3 text-sm text-gray-600">
                <icon name="pajamas:location" size="15px" class="mt-0.5 me-1" />
                {{ hotel.location }}
              </p>
              <div class="flex flex-col items-start justify-between">
                <div class="flex items-center justify-between w-full">
                  <h1 class="text-gray-700 text-md"><strong>{{ hotel.rating }}</strong> ({{ hotel.reviews }} reviews)
                  </h1>
                  <div>
                    <nuxt-link to="" type="button"
                      class="px-5 py-2.5 text-sm font-bold text-white bg-[#028000] rounded-lg">
                      View Deal
                      <icon name="dashicons:arrow-right-alt2" class="font-bold text-white" size="20px" />
                    </nuxt-link>
                    <p class="mt-10 text-lg text-center text-gray-700">Price <span
                        class="font-semibold text-blue-600 underline">{{ hotel.price }}$</span></p>
                  </div>
                </div>
                <p class="-mt-4 text-sm font-thin">includes: <span class="font-normal underline">(Beach)</span></p>
              </div>
            </div>
          </div>
        </div>
        <div id="collapseOne" class="hidden" data-twe-collapse-item data-twe-collapse-show aria-labelledby="headingOne"
          data-twe-parent="#accordionExample">
          <div class="px-5 py-4">
            <ul class="flex flex-row flex-wrap mb-5 list-none border-b-0 ps-0" role="tablist" data-twe-nav-ref>
              <li role="presentation" class="flex-auto hidden -mt-5 text-center md:flex">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-overview01" data-twe-nav-active role="tab"
                  aria-controls="tabs-overview01" aria-selected="true">Overview</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-info01" role="tab" aria-controls="tabs-info01"
                  aria-selected="false">Info</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-photos01" role="tab" aria-controls="tabs-photos01"
                  aria-selected="false">Photos</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-reviews01" role="tab" aria-controls="tabs-reviews01"
                  aria-selected="false">Reviews</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-prices01" role="tab" aria-controls="tabs-prices01"
                  aria-selected="false">Prices</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-rooms01" role="tab" aria-controls="tabs-rooms01"
                  aria-selected="false">Rooms</nuxt-link>
              </li>
            </ul>

            <div class="mb-6">
              <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-overview01" role="tabpanel" aria-labelledby="tabs-overview-tab01" data-twe-tab-active>
                <overview-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-info01" role="tabpanel" aria-labelledby="tabs-info-tab01">
                <info-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-photos01" role="tabpanel" aria-labelledby="tabs-photos-tab01">
                <photos-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-reviews01" role="tabpanel" aria-labelledby="tabs-reviews-tab01">
                <reviews-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-prices01" role="tabpanel" aria-labelledby="tabs-prices-tab01">
                <prices-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-rooms01" role="tabpanel" aria-labelledby="tabs-rooms-tab01">
                <rooms-tab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHotelsProgramsStore } from '@/stores/hotelsProgramsStore'

const store = useHotelsProgramsStore()
const isCollapsed = ref(true);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
}

onMounted(() => {
  store.fetchPlaces()
})

onMounted(async () => {
  const { Collapse, Tab, initTWE } = await import("tw-elements");
  initTWE({ Collapse, Tab });
});
</script> -->

<template>
  <div>
    <div class="w-full p-2 mx-auto bg-white rounded-2xl" v-for="hotel in store.hotels" :key="hotel.id">
      <HeadlessDisclosure v-slot="{ open }">

        <div
          class="w-full mt-8 bg-white border rounded-t-lg border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
          <div class="w-full space-y-4">
            <div class="flex w-full bg-white rounded-lg shadow-lg">
              <div class="w-1/4">
                <img :src="hotel.img" class="object-cover w-full h-52">
              </div>
              <div class="w-3/4 p-4">
                <div class="flex items-center">
                  <h1 class="text-2xl font-bold text-gray-900">{{ hotel.title }}</h1>
                  <div class="flex items-center space-x-3 ms-auto">
                    <icon name="heroicons-outline:share" />
                    <icon name="charm:heart" />
                    <HeadlessDisclosureButton class="flex justify-between text-left">
                      <icon name="material-symbols:keyboard-arrow-down-rounded"
                        :class="open ? 'rotate-180 transform' : ''" />
                    </HeadlessDisclosureButton>
                  </div>
                </div>
                <p class="flex mt-3 text-sm text-gray-600">
                  <icon name="pajamas:location" size="15px" class="mt-0.5 me-1" />
                  {{ hotel.location }}
                </p>
                <div class="flex flex-col items-start justify-between">
                  <div class="flex items-center justify-between w-full">
                    <h1 class="text-gray-700 text-md"><strong>{{ hotel.rating }}</strong> ({{ hotel.reviews }} reviews)
                    </h1>
                    <div>
                      <nuxt-link to="" type="button"
                        class="px-5 py-2.5 text-sm font-bold text-white bg-[#028000] rounded-lg">
                        View Deal
                        <icon name="dashicons:arrow-right-alt2" class="font-bold text-white" size="20px" />
                      </nuxt-link>
                      <p class="mt-10 text-lg text-center text-gray-700">Price <span
                          class="font-semibold text-blue-600 underline">{{ hotel.price }}$</span></p>
                    </div>
                  </div>
                  <p class="-mt-4 text-sm font-thin">includes: <span class="font-normal underline">(Beach)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeadlessDisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="w-full px-2 py-16 sm:px-0">
            <HeadlessTabGroup>
              <HeadlessTabList class="flex p-1 space-x-1 bg-blue-300 rounded-xl">
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : '',
                  ]">
                    Overview
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : '',
                  ]">
                    Info
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : '',
                  ]">
                    Photos
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : '',
                  ]">
                    Reviews
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : '',
                  ]">
                    Prices
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : '',
                  ]">
                    Rooms
                  </button>
                </HeadlessTab>
              </HeadlessTabList>

              <HeadlessTabPanels class="mt-2">
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <overview-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <info-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <photos-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <reviews-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <prices-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <rooms-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
              </HeadlessTabPanels>
            </HeadlessTabGroup>
          </div>
        </HeadlessDisclosurePanel>
      </HeadlessDisclosure>
    </div>
  </div>
</template>

<script setup>
const store = useHotelsProgramsStore()

onMounted(() => {
  store.fetchPlaces()
})
</script>