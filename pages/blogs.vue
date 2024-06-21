<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="py-6 bg-white">
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">{{ $t('layout.blogs') }}
            </h2>
            <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">{{
              $t('blogs.this_is_a_section_of_some_simple_filler_text_also_known_as_placeholder_text_it') }} {{
                $t('blogs.shares_some_characteristics_of_a_real_written_text_but_is_random_or_otherwise') }} {{
                $t('blogs.generated') }}</p>
          </div>
          <!-- text - end -->

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            <!-- article - start -->
            <div class="flex flex-col items-center overflow-hidden border rounded-lg md:flex-row">
              <nuxt-link to="#"
                class="relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48">
                <img src="https://themehut.co/html/geair/assets/img/blog/blog_img01.jpg" loading="lazy"
                  class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
              </nuxt-link>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">{{ $t('blogs.july_19_2024') }}</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <nuxt-link to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                    $t('blogs.new_trends_in_tech') }}</nuxt-link>
                </h2>

                <p class="text-gray-500">{{
                  $t('blogs.this_is_a_section_of_some_simple_filler_text_also_known_as_placeholder_text') }}
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                      $t('blogs.read_more') }}</nuxt-link>
                </div>
              </div>
            </div>
            <!-- article - end -->

            <!-- article - start -->
            <div class="flex flex-col items-center overflow-hidden border rounded-lg md:flex-row">
              <nuxt-link to="#"
                class="relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48">
                <img src="https://themehut.co/html/geair/assets/img/blog/blog_img02.jpg" loading="lazy"
                  class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
              </nuxt-link>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">{{ $t('blogs.april_07_2024') }}</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <nuxt-link to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                    $t('blogs.Working_with_legacy_stacks') }}</nuxt-link>
                </h2>

                <p class="text-gray-500">{{
                  $t('blogs.this_is_a_section_of_some_simple_filler_text_also_known_as_placeholder_text') }}
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                      $t('blogs.read_more') }}</nuxt-link>
                </div>
              </div>
            </div>
            <!-- article - end -->

            <!-- article - start -->
            <div class="flex flex-col items-center overflow-hidden border rounded-lg md:flex-row">
              <nuxt-link to="#"
                class="relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48">
                <img src="https://themehut.co/html/geair/assets/img/blog/blog_img03.jpg" loading="lazy"
                  class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
              </nuxt-link>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">{{ $t('blogs.march_15_2024') }}</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <nuxt-link to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                    $t('blogs.10_best_smartphones_for_devs') }}</nuxt-link>
                </h2>

                <p class="text-gray-500">{{
                  $t('blogs.this_is_a_section_of_some_simple_filler_text_also_known_as_placeholder_text') }}
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                      $t('blogs.read_more') }}</nuxt-link>
                </div>
              </div>
            </div>
            <!-- article - end -->

            <!-- article - start -->
            <div class="flex flex-col items-center overflow-hidden border rounded-lg md:flex-row">
              <nuxt-link to="#"
                class="relative self-start block w-full h-48 overflow-hidden bg-gray-100 group shrink-0 md:h-full md:w-32 lg:w-48">
                <img src="https://themehut.co/html/geair/assets/img/blog/blog_img04.jpg" loading="lazy"
                  class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
              </nuxt-link>

              <div class="flex flex-col gap-2 p-4 lg:p-6">
                <span class="text-sm text-gray-400">{{ $t('blogs.january_27_2024') }}</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                    $t('blogs.8_high_performance_notebooks') }}</a>
                </h2>

                <p class="text-gray-500">{{
                  $t('blogs.this_is_a_section_of_some_simple_filler_text_also_known_as_placeholder_text') }}
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                      $t('blogs.read_more') }}</nuxt-link>
                </div>
              </div>
            </div>
            <!-- article - end -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>