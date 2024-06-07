<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <p class="text-[#5e6282] mb-12">Testimonials</p>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">What People say about us.</p>
          </div>
        </div>

        <div>
          <!--Carousel-->
          <div id="carouselExampleCaptions" class="relative" data-twe-carousel-init data-twe-carousel-slide
            data-twe-ride="carousel" data-twe-interval="4000">
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <!--First Testimonial / Carousel item-->
              <div
                class="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-active data-twe-carousel-item style="backface-visibility: hidden">
                <p class="max-w-4xl mx-auto text-xl italic text-neutral-700 dark:text-neutral-300">
                  "It's not what happens to you, but how you react to it that matters. People take different roads
                  seeking fulfilment and happiness."
                </p>
                <div class="flex justify-center mt-12 mb-6">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">- Anna Morian</p>
              </div>

              <!-- Second Testimonial / Carousel item -->
              <div
                class="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item style="backface-visibility: hidden">
                <p class="max-w-4xl mx-auto text-xl italic text-neutral-700 dark:text-neutral-300">
                  "I walk slowly, but I never walk backward. Winners have simply formed the habit of doing things losers
                  don't like to do."
                </p>
                <div class="flex justify-center mt-12 mb-6">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">- Teresa May</p>
              </div>

              <!-- Third Testimonial / Carousel item -->
              <div
                class="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item style="backface-visibility: hidden">
                <p class="max-w-4xl mx-auto text-xl italic text-neutral-700 dark:text-neutral-300">
                  "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there
                  will be a fish."
                </p>
                <div class="flex justify-center mt-12 mb-6">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    class="w-24 h-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <p class="text-neutral-500 dark:text-neutral-300">- Kate Allise</p>
              </div>
            </div>

            <!--Carousel Controls - prev item-->
            <button
              class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
              type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="prev">
              <span class="inline-block w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>
            <!--Carousel Controls - next item-->
            <button
              class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
              type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="next">
              <span class="inline-block w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
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
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" width="158" height="48" />
          <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" width="158" height="48" />
          <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" width="158" height="48" />
          <img class="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" width="158" height="48" />
          <img class="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" width="158" height="48" />
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