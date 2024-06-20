<template>
  <div>
    <section class="px-4 py-6 mx-auto overflow-y-hidden max-w-7xl sm:px-6 lg:px-8">
      <div class="py-16 mx-4 2xl:mx-auto 2xl:container">
        <div class="relative flex items-center justify-center w-full">
          <img src="https://justfields.com/storage/projects/7M5rV059/traveling-01.jpg"
            class="absolute z-0 hidden w-full h-full xl:block" />
          <img src="https://justfields.com/storage/projects/7M5rV059/traveling-01.jpg"
            class="absolute z-0 hidden w-full h-full sm:block xl:hidden" />
          <img src="https://justfields.com/storage/projects/7M5rV059/traveling-01.jpg"
            class="absolute z-0 w-full h-full sm:hidden" />
          <div
            class="relative z-40 flex flex-col items-center justify-center w-full px-4 py-10 bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 md:mx-24 md:px-12">
            <h1 class="text-4xl font-semibold leading-9 text-center text-white">{{ $t('home.dont_miss_out') }}</h1>
            <p class="mt-6 text-base leading-normal text-center text-white">
              {{ $t('home.subscribe_to_your_newsletter_to_stay_in_the_loop_our_newsletter_is_sent_once_in') }} <br /> {{
                $t('home.a_week_on_every_friday_so_subscribe_to_get_latest_news_and_updates') }}
            </p>
            <div
              class="flex flex-col items-center w-full mt-12 space-y-4 border-white sm:border sm:flex-row lg:w-5/12 sm:space-y-0">
              <input
                class="w-full p-4 text-base font-medium leading-none text-white placeholder-white bg-transparent border border-white sm:border-transparent focus:outline-none"
                :placeholder="$t('placeholder.email_address')" />
              <button type="button"
                class="w-full px-6 py-4 bg-white border border-white focus:outline-none focus:ring-offset-2 focus:ring sm:border-transparent sm:w-auto hover:bg-opacity-75">{{
                  $t('buttons.subscribe') }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>