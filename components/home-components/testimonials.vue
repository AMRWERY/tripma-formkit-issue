<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pe-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <p class="text-[#5e6282] mb-12">{{ $t('home.testimonials') }}</p>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{
              $t('home.what_people_say_about_us') }}</p>
          </div>
        </div>

        <div>
          <!--Carousel-->
          <div id="carouselExampleCaptions" class="relative" data-twe-carousel-init data-twe-carousel-slide
            data-twe-ride="carousel" data-twe-interval="4000">
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <!--First Testimonial / Carousel item-->
              <div
                class="relative float-left -me-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-active data-twe-carousel-item style="backface-visibility: hidden">
                <p class="max-w-4xl mx-auto text-xl italic text-neutral-700 dark:text-neutral-300">
                  "{{
                    $t('home.its_not_what_happens_to_you_but_how_you_react_to_it_that_matters_people_take_different_roads_seeking_fulfilment_and_happiness')
                  }}"
                </p>
                <div class="flex justify-center mt-12 mb-6">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">- {{ $t('home.anna_morian') }} -</p>
              </div>

              <!-- Second Testimonial / Carousel item -->
              <div
                class="relative float-left -me-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item style="backface-visibility: hidden">
                <p class="max-w-4xl mx-auto text-xl italic text-neutral-700 dark:text-neutral-300">
                  "{{
                    $t('home.i_walk_slowly_but_i_never_walk_backward_winners_have_simply_formed_the_habit_of_doing_things_losers_dont_like_to_do')
                  }}"
                </p>
                <div class="flex justify-center mt-12 mb-6">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">- {{ $t('home.teresa_may') }} -</p>
              </div>

              <!-- Third Testimonial / Carousel item -->
              <div
                class="relative float-left -me-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item style="backface-visibility: hidden">
                <p class="max-w-4xl mx-auto text-xl italic text-neutral-700 dark:text-neutral-300">
                  "{{
                    $t('home.chance_is_always_powerful_let_your_hook_be_always_cast_in_the_pool_where_you_least_expect_it_there_will_be_a_fish')
                  }}"
                </p>
                <div class="flex justify-center mt-12 mb-6">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">- {{ $t('home.kate_allise') }} -</p>
              </div>
            </div>

            <!--Carousel Controls - prev item-->
            <button
              class="absolute bottom-0 start-0 top-20 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
              type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="prev">
              <span class="inline-block w-8 h-8">
                <icon name="material-symbols:keyboard-double-arrow-start-rounded" class="w-6 h-6" />
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <!--Carousel Controls - next item-->
            <button
              class="absolute bottom-0 end-0 top-20 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
              type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="next">
              <span class="inline-block w-8 h-8">
                <icon name="material-symbols:keyboard-double-arrow-end-rounded" class="w-6 h-6" />
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div class="px-6 mx-auto mt-16 max-w-7xl lg:px-8">
        <div
          class="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img class="object-contain w-full h-40 col-span-2 max-h-12 lg:col-span-1"
            src="https://justfields.com/storage/projects/7M5rV059/user-16.png" width="158" height="48"
            data-aos="zoom-in-up" />
          <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="https://justfields.com/storage/projects/7M5rV059/user-01.png" width="158" height="48"
            data-aos="zoom-in-up" />
          <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="https://justfields.com/storage/projects/7M5rV059/user-03.png" width="158" height="48"
            data-aos="zoom-in-up" />
          <img class="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
            src="https://justfields.com/storage/projects/7M5rV059/user-04.png" width="158" height="48"
            data-aos="zoom-in-up" />
          <img class="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
            src="https://justfields.com/storage/projects/7M5rV059/user-02.png" width="158" height="48"
            data-aos="zoom-in-up" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { Carousel, initTWE } = await import("tw-elements");
  initTWE({ Carousel });
});
</script>