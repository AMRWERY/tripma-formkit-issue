<template>
  <div>
    <p>
      <span class="text-2xl text-blue-600 underline">9.5</span> <span class="text-xl">Excellent</span>
    </p>
    <div class="flex items-center">
      <p class="mt-2 text-sm font-thin">based on 13140 reviews from top sites</p>
      <icon name="bi:exclamation-circle" size="15px" class="mt-1 ms-2 cursor-pointer" data-twe-toggle="tooltip"
        data-twe-placement="right"
        title="This rating is from Tripma rating index (tra) which combines guest ratings from top sites for a trustworthy result."
        data-twe-ripple-init />
    </div>
    
    <div class="py-12">
      <div class="px-4 mx-auto overflow-x-auto text-center bg-white rounded-lg shadow-lg xs:w-full">
        <div class="flex min-w-max">
          <!-- Column 1 -->
          <div class="flex items-center w-1/3 p-6 space-x-4">
            <icon name="fluent:broom-28-regular" />
            <div class="flex flex-col text-xs">
              <p class="font-bold text-blue-500 text-start">Cleanliness</p>
              <p class="font-bold">9 Excellent</p>
            </div>
          </div>
          <!-- Divider -->
          <div class="w-0.5 border-gray-200 h-12 bg-gray-300 my-auto"></div>
          <!-- Column 2 -->
          <div class="flex items-center w-1/3 p-6 space-x-4">
            <icon name="material-symbols:location-on-outline-rounded" />
            <div class="flex flex-col text-xs">
              <p class="font-bold text-blue-500 text-start">Location</p>
              <p class="font-bold">8.3 Very good</p>
            </div>
          </div>
          <!-- Divider -->
          <div class="w-0.5 border-gray-200 h-12 bg-gray-300 my-auto"></div>
          <!-- Column 3 -->
          <div class="flex items-center w-1/3 p-6 space-x-4">
            <icon name="material-symbols-light:room-service-outline" />
            <div class="flex flex-col text-xs">
              <p class="font-bold text-blue-500 text-start">Service</p>
              <p class="font-bold">9.1 Excellent</p>
            </div>
          </div>
          <div class="w-0.5 border-gray-200 h-12 bg-gray-300 my-auto"></div>
          <!-- Column 4 -->
          <div class="flex items-center w-1/3 p-6 space-x-4">
            <icon name="iconoir:sofa" />
            <div class="flex flex-col text-xs">
              <p class="font-bold text-blue-500 text-start">Comfort</p>
              <p class="font-bold">8.6 Excellent</p>
            </div>
          </div>
          <div class="w-0.5 border-gray-200 h-12 bg-gray-300 my-auto"></div>
          <!-- Column 5 -->
          <div class="flex items-center w-1/3 p-6 space-x-4">
            <icon name="majesticons:bath-shower-line" />
            <div class="flex flex-col text-xs">
              <p class="font-bold text-blue-500 text-start">Amenities</p>
              <p class="font-bold">8 Very good</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p>Guest reviews</p>
      <div class="w-full max-w-full p-4">
        <div class="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div class="grid grid-cols-2 gap-4">
            <!-- Column 1 -->
            <div>
              <h2 class="mb-4 text-xl font-bold">10 <span class="font-normal">/10</span></h2>
              <p class="text-sm font-normal text-gray-700">
                The most helpful and friendly staff I have ever met. Excellent!
              </p>
            </div>
            <!-- Column 2 -->
            <div class="text-end">
              <p class="font-normal text-red-700 text-md">robert</p>
              <p class="text-xs font-thin">06 January 2024</p>
              <span class="text-xs font-thin">Verified review from</span>
              <div class="flex items-center justify-end w-full">
                <img src="/svg/flight-plane.svg" class="w-8 h-auto p-1 bg-blue-200 rounded-full">
                <p class="ms-2 text-normal">Tripma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { Tooltip, initTWE } = await import("tw-elements");
  initTWE({ Tooltip });
});
</script>