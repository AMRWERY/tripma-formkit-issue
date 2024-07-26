<template>
  <div>
    <div class="py-8 overflow-hidden bg-white sm:py-8">
      <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pe-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">{{ $t('home.easy_and_fast') }}</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{
                $t('home.book_your_next_trip_in_3_easy_steps') }}</p>
              <dl class="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative ps-10">
                  <dt class="inline font-semibold text-gray-900">
                    <icon :name="feature.icon" class="absolute w-10 h-10 text-indigo-600 start-1 top-1 -ms-3.5"
                      aria-hidden="true" />
                    {{ $t(feature.name) }}
                  </dt>
                  <hr class="my-1">
                  <dd class="inline">{{ $t(feature.description) }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div class="ms-12">
            <div class="relative w-full max-w-sm my-10 bg-white border border-gray-100 rounded-lg shadow-md" data-aos="zoom-out-left">
              <nuxt-link class="relative flex w-full mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="#">
                <img class="absolute top-0 object-cover w-full h-full end-0 peer"
                  src="https://justfields.com/storage/projects/7M5rV059/greece.jpg" />
              </nuxt-link>
              <div class="px-5 pb-5 mt-4">
                <nuxt-link to="#">
                  <h5 class="text-xl tracking-tight text-slate-900">{{ $t('home.trip_to_greece') }}</h5>
                </nuxt-link>
                <div class="flex items-center justify-between mt-2 mb-5">
                  <p><span class="font-bold text-md text-slate-900">14 - 29 {{ $t('home.june') }}</span></p>
                </div>
                <div class="flex items-center gap-4 mb-5 text-gray-500">
                  <icon name="material-symbols:energy-savings-leaf-outline-sharp" />
                  <icon name="material-symbols-light:map-rounded" />
                  <icon name="mdi:navigation-variant" />
                </div>
                <div class="flex mb-5 text-gray-600">
                  <icon name="material-symbols:home-work-outline-rounded" />
                  <p class="font-medium ms-2">24 {{ $t('home.people_going') }}</p>
                </div>
              </div>
              <!-- Small Card -->
              <div
                class="absolute top-3/4 end-[-75px] transform translate-y-[-50%] w-[250px] h-auto bg-white rounded-lg shadow-lg border border-gray-100">
                <div class="p-3">
                  <div class="flex">
                    <img src="https://justfields.com/storage/projects/7M5rV059/Greecee.jpg"
                      class="bg-cover rounded-full w-14 h-14">
                    <div class="w-2/3 p-3 -mt-3 font-normal">
                      <p class="text-[#8a79df] text-lg">{{ $t('home.ongoing') }}</p>
                      <span>{{ $t('home.trip_to_rome') }}</span>
                      <p class="flex items-center">
                        <span class="text-lg text-[#8a79df]">40%</span>
                        <span class="ms-1">{{ $t('home.completed') }}</span>
                      </p>
                      <div class="w-full bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#8a79df] p-0.5 text-center text-xs font-medium leading-none text-gray-100"
                          style="width: 40%">
                          40%
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
  </div>
</template>

<script setup>
const features = ref([
  {
    name: 'home.choose_destination',
    description:
      'home.success_is_getting_what_you_want_happiness_is_wanting_what_you_get',
    icon: 'mdi:vector-square',
  },
  {
    name: 'home.make_payment',
    description: 'home.a_good_plan_today_is_better_than_a_perfect_plan_tomorrow',
    icon: 'ri:money-dollar-circle-line',
  },
  {
    name: 'home.reach_airport_ad_selected_date',
    description: 'home.all_our_knowledge_has_its_origins_in_our_perceptions_well_done_is_better_than_well_said',
    icon: 'mdi:taxi',
  },
])
</script>