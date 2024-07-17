<template>
  <div>
    <div id="accordionExample">
      <div class="mt-8 bg-white border rounded-t-lg border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
        <div class="w-full">
          <div class="flex w-full bg-white rounded-lg shadow-lg">
            <div class="w-1/4">
              <img src="https://justfields.com/storage/projects/7M5rV059/jaz-makadi.jpg"
                class="object-cover w-full h-48">
            </div>
            <div class="w-3/4 p-4">
              <div class="flex items-center">
                <h1 class="text-2xl font-bold text-gray-900">Jaz Makadi Oasis Resort</h1>
                <div class="flex items-center space-x-3 ms-auto">
                  <icon name="heroicons-outline:share" size="22px" />
                  <icon name="charm:heart" size="22px" />
                  <button
                    class="group flex items-center rounded-full border-0 bg-white px-3 py-1 text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                    type="button" data-twe-collapse-init data-twe-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    <span
                      class="h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none">
                      <icon name="material-symbols:keyboard-arrow-down-rounded" />
                    </span>
                  </button>
                </div>
              </div>
              <p class="mt-2 text-sm text-gray-600">
                Hurghada, 31.3 km to City center
              </p>
              <div class="flex items-center justify-between">
                <h1 class="text-gray-700 text-md"><strong>9.5 - Excellent</strong> (13118 reviews)</h1>
                <div>
                  <nuxt-link to="" type="button"
                    class="px-5 py-2.5 text-sm font-bold text-white bg-[#028000] rounded-lg">
                    View Deal
                    <icon name="dashicons:arrow-right-alt2" class="font-bold text-white" size="20px" />
                  </nuxt-link>
                  <p class="mt-10 text-lg text-center text-gray-700">Price <span
                      class="font-semibold text-blue-600 underline">176$</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="collapseOne" class="!visible" data-twe-collapse-item data-twe-collapse-show
          aria-labelledby="headingOne" data-twe-parent="#accordionExample">
          <div class="px-5 py-4">
            <ul class="flex flex-row flex-wrap mb-5 list-none border-b-0 ps-0" role="tablist" data-twe-nav-ref>
              <li role="presentation" class="flex-auto hidden -mt-5 text-center md:flex">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-overview01" data-twe-nav-active role="tab"
                  aria-controls="tabs-overview01" aria-selected="true">Overview</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-info01" role="tab" aria-controls="tabs-info01"
                  aria-selected="false">Info</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-photos01" role="tab" aria-controls="tabs-photos01"
                  aria-selected="false">Photos</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-reviews01" role="tab" aria-controls="tabs-reviews01"
                  aria-selected="false">Reviews</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-prices01" role="tab" aria-controls="tabs-prices01"
                  aria-selected="false">Prices</nuxt-link>
              </li>
              <li role="presentation" class="flex-auto text-center">
                <nuxt-link to=""
                  class="my-2 cursor-pointer border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                  data-twe-toggle="pill" data-twe-target="#tabs-rooms01" role="tab" aria-controls="tabs-rooms01"
                  aria-selected="false">Rooms</nuxt-link>
              </li>
            </ul>

            <div class="mb-6">
              <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-overview01" role="tabpanel" aria-labelledby="tabs-overview-tab01" data-twe-tab-active>
                <overview-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-info01" role="tabpanel" aria-labelledby="tabs-info-tab01">
                <info-tab />
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-photos01" role="tabpanel" aria-labelledby="tabs-photos-tab01">
                photos content
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-reviews01" role="tabpanel" aria-labelledby="tabs-reviews-tab01">
                reviews content
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-prices01" role="tabpanel" aria-labelledby="tabs-prices-tab01">
                prices content
              </div>
              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="tabs-rooms01" role="tabpanel" aria-labelledby="tabs-rooms-tab01">
                rooms content
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
  const { Collapse, Tab, initTWE } = await import("tw-elements");
  initTWE({ Collapse, Tab });
});
</script>