<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-[#5e6282] mb-3">{{ $t('home.top_selling') }}</p>
        <strong class="font-semibold lg:text-2xl sm:text-lg md:text-xl">{{ $t('home.top_destinations') }}</strong>
        <div class="max-w-2xl mx-auto lg:max-w-none">
          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div v-for="card in cards" :key="card" class="relative group">
              <div
                class="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img :src="card.img" class="object-cover object-center w-full h-full" />
              </div>
              <div class="flex justify-between mt-4">
                <div>
                  <h3 class="text-lg text-gray-700">
                    <nuxt-link to="">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ $t(card.title) }}
                    </nuxt-link>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    <icon name="mdi:navigation-variant" size="22" /> {{ card.duration }} {{ $t('home.days_trip') }}
                  </p>
                </div>
                <p class="mt-0.5 font-semibold text-gray-900 text-md">${{ card.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const cards = ref([
  { title: 'home.rome_italy', price: '5,42k', duration: '10', img: 'https://justfields.com/storage/projects/7M5rV059/rome.jpg' },
  { title: 'home.london_uk', price: '4,2k', duration: '12', img: 'https://justfields.com/storage/projects/7M5rV059/london.jpg' },
  { title: 'home.paris_france', price: '6,21k', duration: '11', img: 'https://justfields.com/storage/projects/7M5rV059/paris.jpg' },
])
</script>