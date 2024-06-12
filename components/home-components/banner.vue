<template>
  <div>
    <main class="relative h-full overflow-hidden bg-white">
      <div class="relative flex items-center overflow-hidden bg-white">
        <div class="container relative flex max-w-full px-4 px-6 py-6 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="relative flex flex-col sm:w-2/3 lg:w-2/5">
            <h1 class="font-bebas-neue text-md sm:text-md font-black flex flex-col leading-none text-[#df6951]">
              Best Destinations around the world
              <span class="text-5xl sm:text-7xl text-[#181e4b]">Travel, enjoy and live a new and full life</span>
            </h1>
            <p class="text-sm sm:text-base text-[#8487a0] mt-7">
              Built Wicket longer admire do barton vanity itself do in it.<br>
              Preferred to sportsmen it engrossed listening.
              Park gate<br> sell that west hard for the
            </p>
            <div class="flex mt-8">
              <nuxt-link to="#"
                class="py-3 px-4 rounded-lg bg-[#f1a501] border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                Find out more
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