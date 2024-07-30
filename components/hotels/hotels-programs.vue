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
                      : ''
                  ]">
                    Overview
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : ''
                  ]">
                    Info
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : ''
                  ]">
                    Photos
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : ''
                  ]">
                    Reviews
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : ''
                  ]">
                    Prices
                  </button>
                </HeadlessTab>
                <HeadlessTab as="template" v-slot="{ selected }">
                  <button :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : ''
                  ]">
                    Rooms
                  </button>
                </HeadlessTab>
              </HeadlessTabList>

              <HeadlessTabPanels class="mt-2">
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <overview-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <info-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <photos-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <reviews-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]">
                  <ul>
                    <li class="relative p-3 rounded-md hover:bg-gray-100">
                      <prices-tab />
                    </li>
                  </ul>
                </HeadlessTabPanel>
                <HeadlessTabPanel :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
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