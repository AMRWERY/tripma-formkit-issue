<template>
  <div>
    <footer class="bg-white">
      <div class="pt-4 pb-16 sm:pt-10 lg:pt-12">
        <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div class="grid grid-cols-2 gap-12 pt-10 border-t md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div class="col-span-full lg:col-span-2">
              <!-- logo - start -->
              <div class="mb-4 lg:-mt-2">
                <nuxt-link to="#" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo">
                  <img src="/svg/flight-plane.svg" class="w-8 h-auto text-indigo-500">
                  Tripma
                </nuxt-link>
              </div>
              <!-- logo - end -->

              <p class="font-semibold text-gray-500 sm:pr-8">{{
                $t('layout.book_your_trip_in_a_minute_get_full_control_for_much_longer') }}</p>
            </div>

            <!-- nav - start -->
            <div>
              <nuxt-link to="#" class="font-bold tracking-widest text-gray-800">{{ $t('layout.company') }}</nuxt-link>
              <nav class="flex flex-col gap-4 mt-4">
                <div>
                  <nuxt-link to="/blogs"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                      $t('layout.blogs') }}</nuxt-link>
                </div>

                <div>
                  <nuxt-link to="/about"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                      $t('layout.about') }}</nuxt-link>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <nuxt-link to="#" class="font-bold tracking-widest text-gray-800">{{ $t('layout.contact') }}</nuxt-link>
              <nav class="flex flex-col gap-4 mt-4">
                <div>
                  <nuxt-link to="/contact-us"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                      $t('layout.contact_us') }}</nuxt-link>
                </div>

                <div>
                  <nuxt-link to="/f-a-q"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                      $t('layout.help_faq') }}</nuxt-link>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <nuxt-link to="#" class="font-bold tracking-widest text-gray-800">{{ $t('layout.more') }}</nuxt-link>
              <nav class="flex flex-col gap-4 mt-4">
                <div>
                  <nuxt-link to="/privacy-policy"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                      $t('layout.privacy_policy') }}</nuxt-link>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
                <div class="flex flex-col items-center max-w-xl mx-auto text-center">
                  <p class="font-semibold text-indigo-500 md:text-lg xl:text-xl whitespace-nowrap ms-3">{{
                    $t('layout.discover_our_app') }}
                  </p>
                  <div class="flex flex-col w-full gap-2.5">
                    <nuxt-link to="#" type="button"
                      class="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl">
                      <div class="me-3">
                        <svg viewBox="0 0 384 512" width="30">
                          <path fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                          </path>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">
                          {{ $t('layout.download_on_the') }}
                        </div>
                        <div class="-mt-1 font-sans text-xl font-semibold">
                          {{ $t('layout.app_store') }}
                        </div>
                      </div>
                    </nuxt-link>

                    <nuxt-link to="#" type="button"
                      class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-xl h-14">
                      <div class="me-3">
                        <svg viewBox="30 336.7 120.9 129.2" width="30">
                          <path fill="#FFD400"
                            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                          </path>
                          <path fill="#FF3333"
                            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                          </path>
                          <path fill="#48FF48"
                            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                          </path>
                          <path fill="#3BCCFF"
                            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                          </path>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">
                          {{ $t('layout.get_it_on') }}
                        </div>
                        <div class="-mt-1 font-sans text-xl font-semibold">
                          {{ $t('layout.google_play') }}
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- nav - end -->
          </div>
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div class="flex items-center justify-between gap-4 py-8">
            <span class="text-sm text-gray-400"> © 2024 - {{ $t('layout.present_tripma_all_rights_reserved') }}</span>

            <!-- social - start -->
            <div class="flex gap-4">
              <SocialShare network="facebook" :styled="false" :label="false"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />

              <SocialShare network="twitter" :styled="false" :label="false"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />

              <SocialShare network="whatsapp" :styled="false" :label="false"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />

              <SocialShare network="telegram" :styled="false" :label="false"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600" />
            </div>
            <!-- social - end -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>