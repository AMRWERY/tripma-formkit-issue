<template>
  <div>
    <div class="px-6 py-12 mx-auto max-w-7xl lg:px-8 sm:py-16">
      <div
        class="grid items-center max-w-lg grid-cols-2 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-7">
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/booking.png" width="158" height="48" />
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/hotels.jpg" width="158" height="48" />
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/expidea.jpg" width="158" height="48" />
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/agoda.jpg" width="158" height="48" />
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/home-away.jpg" width="158" height="48" />
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/all.jpg" width="158" height="48" />
        <img class="object-contain w-full max-h-12 lg:col-span-1"
          src="https://justfields.com/storage/projects/7M5rV059/trip.jpg" width="158" height="48" />
      </div>

      <div
        class="grid items-center max-w-lg grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div class="col-span-1 text-center">
          <img class="object-contain w-full max-h-20"
            src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SearchDesktop.svg" width="158"
            height="48" />
          <div class="mt-4">
            <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('hotels.search_simply') }}</p>
            <span class="font-semibold text-lg text-[#606383">{{ $t('hotels.search_through_5_million_hotels_in_just_a_few_seconds') }}</span>
          </div>
        </div>
        <div class="col-span-1 text-center">
          <img class="object-contain w-full max-h-20"
            src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/CompareDesktop.svg" width="158"
            height="48" />
          <div class="mt-4">
            <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('hotels.compare_confidently') }}</p>
            <span class="font-semibold text-lg text-[#606383">{{ $t('hotels.compare_hotel_prices_from_100s_of_sites_at_once') }}</span>
          </div>
        </div>
        <div class="col-span-1 text-center">
          <img class="object-contain w-full max-h-20"
            src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/SaveDesktop.svg" width="158"
            height="48" />
          <div class="mt-4">
            <p class="font-semibold text-[#1e1d4c] text-xl mb-2">{{ $t('hotels.save_big') }}</p>
            <span class="font-semibold text-lg text-[#606383">{{ $t('hotels.discover_a_great_deal_to_book_on_our_partner_sites') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>