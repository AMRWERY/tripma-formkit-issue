<template>
  <div>
    <div class="w-full max-w-full p-4">
      <div class="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div class="grid grid-cols-2 gap-4">
          <!-- Column 1 -->
          <div class="flex items-start space-x-2">
            <icon name="ph:shield-check" class="text-[#2499d4]" size="20px" />
            <div class="flex flex-col">
              <p class="text-sm text-gray-700">Hotel site . Featured</p>
              <p class="text-sm font-normal text-gray-700">member rate - all inclusive basis superior, queen or twin
                bed, garden view</p>
              <p class="text-[#005f00] text-xs">
                <icon name="material-symbols:check-small" />Free cancellation
              </p>
              <p class="text-[#005f00] text-xs">
                <icon name="material-symbols:check-small" />All-inclusive
              </p>
            </div>
          </div>
          <!-- Column 2 -->
          <div class="text-end">
            <div>
              <span
                class="inline-flex items-center px-2 py-1 text-sm font-medium text-red-700 border rounded-md bg-red-50">our
                lowest price</span>
            </div>
            <div class="flex items-center mt-10 float-end">
              <div class="flex flex-col space-y-2">
                <p class="text-sm">$176</p>
                <p class="text-xs font-thin">4 nights for <strong class="font-semibold">$704</strong></p>
              </div>
              <nuxt-link to="" type="button"
                class="px-5 py-2.5 text-sm font-bold text-white bg-[#028000] rounded-lg ms-3">
                View Deal
                <icon name="dashicons:arrow-right-alt2" class="font-bold text-white" size="20px" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>