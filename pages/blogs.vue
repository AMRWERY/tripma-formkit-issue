<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="py-6 bg-white">
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">Blogs</h2>

            <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">This is a section of some simple
              filler text, also known as placeholder text. It shares some characteristics of a real written text but is
              random or otherwise generated.</p>
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
                <span class="text-sm text-gray-400">July 19, 2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <nuxt-link to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New
                    trends in
                    Tech</nuxt-link>
                </h2>

                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                    more</nuxt-link>
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
                <span class="text-sm text-gray-400">April 07, 2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <nuxt-link to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working
                    with
                    legacy stacks</nuxt-link>
                </h2>

                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                    more</nuxt-link>
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
                <span class="text-sm text-gray-400">March 15, 2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <nuxt-link to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best
                    smartphones for devs</nuxt-link>
                </h2>

                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                    more</nuxt-link>
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
                <span class="text-sm text-gray-400">January 27, 2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a to="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High
                    performance Notebooks</a>
                </h2>

                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.
                </p>

                <div>
                  <nuxt-link to="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                    more</nuxt-link>
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