<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-[#5e6282] mb-3">{{ $t('home.category') }}</p>
        <strong class="font-semibold lg:text-2xl sm:text-lg md:text-xl">{{ $t('home.we_offer_best_services') }}</strong>
        <div
          class="grid items-center max-w-lg grid-cols-2 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div class="col-span-1 text-center" data-aos="zoom-in-up">
            <img class="object-contain w-full max-h-20" src="/public/svg/Satellite.svg" width="158" height="48" />
            <div class="mt-4">
              <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('home.calculated_weather') }}</p>
              <span class="font-semibold text-lg text-[#606383]">{{
                $t('home.built_wicket_longer_admire_do_barton_vanity_itself_do_it_in') }}</span>
            </div>
          </div>
          <div class="col-span-1 text-center" data-aos="zoom-in-up">
            <img class="object-contain w-full max-h-20" src="/public/svg/plane.svg" width="158" height="48" />
            <div class="mt-4">
              <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('home.best_flights') }}</p>
              <span class="font-semibold text-lg text-[#606383]">{{
                $t('home.engrossed_listening_park_gate_sell_they_west_hard_for_the') }}</span>
            </div>
          </div>
          <div class="col-span-1 text-center" data-aos="zoom-in-up">
            <img class="object-contain w-full max-h-20" src="/public/svg/microphone.svg" width="158" height="48" />
            <div class="mt-4">
              <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('home.local_events') }}</p>
              <span class="font-semibold text-lg text-[#606383]">{{
                $t('home.barton_vanity_itself_do_in_it_prefer_to_men_it_engrossed_listening') }}</span>
            </div>
          </div>
          <div class="col-span-1 text-center" data-aos="zoom-in-up">
            <img class="object-contain w-full max-h-20" src="/public/svg/settings.svg" width="158" height="48" />
            <div class="mt-4">
              <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('home.customization') }}</p>
              <span class="font-semibold text-lg text-[#606383]">{{
                $t('home.we_deliver_outsourced_aviation_services_for_military_customers') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>