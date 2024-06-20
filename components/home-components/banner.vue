<template>
  <div>
    <main class="relative h-full overflow-hidden bg-white">
      <div class="relative flex items-center overflow-hidden bg-white">
        <div class="container relative flex max-w-full px-4 px-6 py-6 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="relative flex flex-col sm:w-2/3 lg:w-2/5">
            <h1 class="font-bebas-neue text-md sm:text-md font-black flex flex-col leading-none text-[#df6951]">
              {{ $t('home.best_destinations_around_the_world') }}
              <span class="text-5xl sm:text-7xl text-[#181e4b]">{{ $t('home.travel_enjoy') }} {{
                $t('home.and_live_a_new') }} {{ $t('home.and_full_life') }}</span>
            </h1>
            <p class="text-sm sm:text-base text-[#8487a0] mt-7">
              {{ $t('home.built_wicket_longer_admire_do_barton_vanity_itself_do_in_it') }}<br>
              {{ $t('home.preferred_to_sportsmen_it_engrossed_listening') }}
              {{ $t('home.park_gate') }}<br> {{ $t('home.sell_that_west_hard_for_the') }}
            </p>
            <div class="flex mt-8">
              <nuxt-link to="/destinations"
                class="py-3 px-4 rounded-lg bg-[#f1a501] border-2 border-transparent text-white text-md me-4 hover:bg-pink-400">
                {{ $t('buttons.find_out_more') }}
              </nuxt-link>

              <!-- video-player -->
              <video-player />
            </div>
          </div>
          <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img src="https://justfields.com/storage/projects/7M5rV059/hero.png" class="max-w-xs m-auto md:max-w-lg" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

</script>