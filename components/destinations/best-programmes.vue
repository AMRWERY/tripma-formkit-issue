<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <ul role="list" class="divide-y divide-gray-100">
          <li class="flex justify-between py-5 gap-x-6">
            <div class="flex min-w-0 gap-x-4">
              <icon name="ic:outline-location-on" class="flex-none w-10 h-10 rounded-full bg-gray-50 text-[#409ae9]" />
              <div class="flex-auto min-w-0">
                <p class="text-sm font-semibold leading-6 text-gray-900">Best Tourist Programs</p>
                <p class="mt-1 text-xs leading-5 text-gray-500 truncate">Choose the most suitable tourist program</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="3500" :transition="500">
        <Slide v-for="offer in store.places" :key="offer">
          <div class="carousel__item">
            <div
              class="mx-auto overflow-hidden duration-300 transform bg-white rounded-lg shadow-md mt-11 w-80 dark:bg-slate-800 hover:scale-105 hover:shadow-lg text-start">
              <img class="object-cover object-center w-full h-64" :src="offer.cover" />
              <div class="p-4">
                <div class="flex items-center">
                  <h2 class="mb-2 text-base font-medium text-gray-700 dark:text-gray-300">
                    {{ offer.smallTitle }}
                  </h2>
                  <p class="ml-auto text-base font-medium font-semibold text-green-500 text-md dark:text-white">
                    ${{ offer.price }}
                  </p>
                </div>
                <div class="flex items-center">
                  <p class="mb-2 text-base font-medium text-gray-900 dark:text-white">
                    {{ offer.hotel }}
                  </p>
                  <p class="ml-auto text-base font-medium font-semibold text-green-500 text-md dark:text-white">
                    {{ offer.duration }}
                  </p>
                </div>
                <div class="flex items-center">
                  <rating />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
  </div>
</template>

<script setup>
const store = useBestProgrammesStore()

onMounted(() => {
  store.fetchPlaces()
})

const settings = ref({
  itemsToShow: 4,
  snapAlign: 'center',
});

const breakpoints = ref({
  412: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
});
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>