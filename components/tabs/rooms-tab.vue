<template>
  <div>
    <div class="max-w-full shadow-lg bg-slate-50 p-7">
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-700">To see room prices, go to the Prices tab.</p>
        <button type="button"
          class="inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
          See prices
        </button>
      </div>
    </div>

    <div class="mt-5">
      <div class="flex flex-col gap-4 mb-6 sm:mb-8 md:gap-6">
        <div class="flex flex-wrap overflow-hidden border rounded-lg gap-x-4 sm:gap-y-4 lg:gap-6">
          <nuxt-link to="" class="relative block w-32 h-48 overflow-hidden bg-gray-100 group sm:h-52 sm:w-48">
            <img src="https://justfields.com/storage/projects/7M5rV059/rooms-1.jpg" loading="lazy"
              class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
          </nuxt-link>
          <div class="flex flex-col justify-between flex-1 py-4">
            <div>
              <nuxt-link to=""
                class="inline-block mb-1 text-sm font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-sm">Family
                Double Room, Garden View</nuxt-link>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="flex items-center">
                  <icon name="material-symbols:bed-outline-rounded" size="20px" class="text-gray-600" />
                  <p class="text-xs font-normal ms-2">1 Queen bed</p>
                </div>
                <div class="flex items-center">
                  <icon name="material-symbols:person-2-outline" size="20px" class="text-gray-600" />
                  <p class="text-xs font-normal ms-2">4 Sleeps</p>
                </div>
                <div class="flex items-center">
                  <icon name="material-symbols:square-outline-rounded" size="20px" class="text-gray-600" />
                  <p class="text-xs font-normal ms-2">474 sq ft</p>
                </div>
                <div class="flex items-center">
                  <icon name="material-symbols:wifi" class="text-gray-600" />
                  <p class="text-xs font-normal ms-2">Free wifi</p>
                </div>
                <div class="flex items-center">
                  <icon name="material-symbols:kid-star-outline" size="20px" class="text-gray-600" />
                  <p class="text-xs font-normal ms-2">Garden view</p>
                </div>
              </div>
            </div>
            <div class="px-6 -mt-5">
              <nuxt-link to="" class="text-sm font-normal text-blue-700 cursor-pointer ms-1">More Details</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>