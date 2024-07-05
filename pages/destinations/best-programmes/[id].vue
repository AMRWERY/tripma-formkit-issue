<template>
  <div>
    <section class="py-10 font-poppins">
      <div class="px-4 mx-auto max-w-7xl">
        <div class="flex flex-wrap mb-24 -mx-4">
          <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div class="sticky top-0 z-50 overflow-hidden">
              <div class="relative mb-6 lg:mb-10">
                <nuxt-link class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" to="#">
                  <icon name="ic:twotone-keyboard-double-arrow-left"
                    class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" />
                </nuxt-link>
                <img class="object-cover w-full lg:h-1/2" :src="programDetails?.cover" />
                <nuxt-link class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" to="#">
                  <icon name="ic:twotone-keyboard-double-arrow-right"
                    class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" />
                </nuxt-link>
              </div>

              <!-- Go Trip -->
              <p class="my-3 text-2xl font-semibold leading-relaxed">{{ $t('destinations.go_trip') }}</p>
              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">{{
                  $t('destinations.flight_line') }}</label>
                <div class="mt-2">
                  <div class="text-center read-only-input">
                    <p class="font-medium">{{ programDetails?.flightLineGo }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="going-from" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.going_from') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium truncate ms-2">{{ programDetails?.goFrom }}</p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label for="arrival-in" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.arrival_in') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.arrivalIn }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="departure-time" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.departure_time') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.departureTime }}</p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label for="arrival-time" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.arrival_time') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.arrivalTime }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="kg" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.allowed_weight_kg') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.allowedKG }} {{ $t('destinations.kg') }}</p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label for="flight-number" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.flight_number') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.flightNumberGo }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Return Trip -->
              <p class="my-3 mt-10 text-2xl font-semibold leading-relaxed">{{ $t('destinations.return_trip') }}</p>
              <div class="col-span-full">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">{{
                  $t('destinations.flight_line') }}</label>
                <div class="mt-2">
                  <div class="text-center read-only-input">
                    <p class="font-medium">{{ programDetails?.flightLineReturn }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="going-from" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.going_from') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.arrivalIn }}</p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label for="arrival-in" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.arrival_in') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium truncate ms-2">{{ programDetails?.goFrom }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="departure-time" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.departure_time') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.departureTime }}</p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label for="arrival-time" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.arrival_time') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.arrivalTime }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="kg" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.allowed_weight_kg') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.allowedKG }} {{ $t('destinations.kg') }}</p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label for="flight-number" class="block text-sm font-medium leading-6 text-gray-900">{{
                    $t('destinations.flight_number') }}</label>
                  <div class="mt-2">
                    <div class="read-only-input">
                      <p class="font-medium ms-2">{{ programDetails?.flightNumberReturn }}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="w-full px-4 md:w-1/2">
            <div class="lg:pl-20">
              <div class="mb-6">
                <span class="text-red-500 dark:text-red-200">{{ programDetails?.duration }}</span>
                <h2 class="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading dark:text-gray-300">
                  {{ programDetails?.title }}
                </h2>
                <div class="flex">
                  <rating />
                  <p class="text-blue-500 hover:underline dark:text-gray-400 ms-7 ">4 {{ $t('destinations.reviews') }}
                  </p>
                  <div class="flex gap-4 ms-auto">
                    <SocialShare network="facebook" :styled="false" :label="false"
                      class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />

                    <SocialShare network="twitter" :styled="false" :label="false"
                      class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />

                    <SocialShare network="whatsapp" :styled="false" :label="false"
                      class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />

                    <SocialShare network="telegram" :styled="false" :label="false"
                      class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />
                  </div>
                </div>
              </div>
              <div>
                <p class="mb-4 text-lg font-semibold dark:text-gray-400">
                  {{ $t('destinations.program_details') }}
                </p>
                <div v-if="programDetails?.dayOne">
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <div class="day-count">{{ $t('destinations.day_1') }}</div>
                    <p class="ms-auto">{{ programDetails?.dayOne?.title }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <span class="mt-3.5 font-thin text-gray-600">{{ programDetails?.dayOne?.desc }}</span>
                    <div class="max-w-sm overflow-hidden shadow-xl rounded-3xl dark:bg-gray-800">
                      <div class="w-full h-48 overflow-hidden">
                        <img class="object-cover w-full h-full" :src="programDetails?.dayOne?.img">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-5">
                <div v-if="programDetails?.dayTwo">
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <div class="day-count">{{ $t('destinations.day_2') }}</div>
                    <p class="ms-auto">{{ programDetails?.dayTwo?.title }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <span class="mt-3.5 font-thin text-gray-600">{{ programDetails?.dayTwo?.desc }}</span>
                    <div class="max-w-sm overflow-hidden shadow-xl rounded-3xl dark:bg-gray-800">
                      <div class="w-full h-48 overflow-hidden">
                        <img class="object-cover w-full h-full" :src="programDetails?.dayTwo?.img">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-5">
                <div v-if="programDetails?.dayThree">
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <div class="day-count">{{ $t('destinations.day_3') }}</div>
                    <p class="ms-auto">{{ programDetails?.dayThree?.title }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <span class="mt-3.5 font-thin text-gray-600">{{ programDetails?.dayThree?.desc }}</span>
                    <div class="max-w-sm overflow-hidden shadow-xl rounded-3xl dark:bg-gray-800">
                      <div class="w-full h-48 overflow-hidden">
                        <img class="object-cover w-full h-full" :src="programDetails?.dayThree?.img">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-5">
                <div v-if="programDetails?.dayFour">
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <div class="day-count">{{ $t('destinations.day_4') }}</div>
                    <p class="ms-auto">{{ programDetails?.dayFour?.title }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <span class="mt-3.5 font-thin text-gray-600">{{ programDetails?.dayFour?.desc }}</span>
                    <div class="max-w-sm overflow-hidden shadow-xl rounded-3xl dark:bg-gray-800">
                      <div class="w-full h-48 overflow-hidden">
                        <img class="object-cover w-full h-full" :src="programDetails?.dayFour?.img">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-5">
                <div v-if="programDetails?.dayFive">
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <div class="day-count">{{ $t('destinations.day_5') }}</div>
                    <p class="ms-auto">{{ programDetails?.dayFive?.title }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <span class="mt-3.5 font-thin text-gray-600">{{ programDetails?.dayFive?.desc }}</span>
                    <div class="max-w-sm overflow-hidden shadow-xl rounded-3xl dark:bg-gray-800">
                      <div class="w-full h-48 overflow-hidden">
                        <img class="object-cover w-full h-full" :src="programDetails?.dayFive?.img">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-5">
                <div v-if="programDetails?.daySix">
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <div class="day-count">{{ $t('destinations.day_6') }}</div>
                    <p class="ms-auto">{{ programDetails?.daySix?.title }}</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pb-4 lg:grid-cols-2 dark:border-gray-600">
                    <span class="mt-3.5 font-thin text-gray-600">{{ programDetails?.daySix?.desc }}</span>
                    <div class="max-w-sm overflow-hidden shadow-xl rounded-3xl dark:bg-gray-800">
                      <div class="w-full h-48 overflow-hidden">
                        <img class="object-cover w-full h-full" :src="programDetails?.daySix?.img">
                      </div>
                    </div>
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
const store = useTourismProgrammesStore()
const route = useRoute()
const programId = ref('')
const programDetails = ref(null);

onMounted(async () => {
  programId.value = route.params.id;
  programDetails.value = await store.getProgramById(programId.value)
  // console.log(programId.value);
});

useHead(() => ({
  title: programDetails.value ? programDetails.value.title : '',
}));
</script>

<style scoped>
.day-count {
  padding: 8px 16px;
  border-radius: 5px 25px 45px;
  background: #9295d1;
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>