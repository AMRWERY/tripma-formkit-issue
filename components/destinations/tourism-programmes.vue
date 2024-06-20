<template>
  <div>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto mt-8 lg:max-w-none">
        <div>
          <ul role="list" class="divide-y divide-gray-100">
            <li class="flex justify-between py-5 gap-x-6">
              <div class="flex min-w-0 gap-x-4">
                <icon name="ic:outline-location-on"
                  class="flex-none w-10 h-10 rounded-full bg-gray-50 text-[#409ae9]" />
                <div class="flex-auto min-w-0">
                  <p class="text-sm font-semibold leading-6 text-gray-900">{{ $t('destinations.tourism_programs') }}</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500 truncate">{{ $t('destinations.choose_your_favourite_tourist_destination') }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div v-for="offer in store.filteredPlacesArray" :key="offer" class="relative group">
            <div
              class="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img :src="offer.cover" class="object-cover object-center w-full h-full" />
            </div>
            <div class="p-4">
              <div class="flex items-center">
                <h2 class="mb-2 text-base font-medium text-gray-700 dark:text-gray-300">
                  {{ offer.smallTitle }}
                </h2>
                <p class="text-base font-medium font-semibold text-green-500 ms-auto text-md dark:text-white">
                  ${{ offer.price }}
                </p>
              </div>
              <div class="flex items-center">
                <p class="mb-2 text-base font-medium text-gray-900 dark:text-white">
                  {{ offer.hotel }}
                </p>
                <p class="mb-2 text-base font-medium font-semibold text-green-500 ms-auto text-md dark:text-white">
                  {{ offer.duration }}
                </p>
              </div>
              <div class="flex items-center">
                <rating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useTourismProgrammesStore()

onMounted(() => {
  store.fetchPlaces()
})
</script>