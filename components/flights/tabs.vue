<template>
  <div>
    <!--Tabs navigation-->
    <ul class="flex flex-row flex-wrap mb-3 list-none border-b-0 ps-0 space-s-4" role="tablist" data-twe-nav-ref>
      <li role="presentation">
        <a href="#tabs-flights"
          class="my-2 block border rounded-lg border-transparent px-4 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-flights" data-twe-nav-active role="tab"
          aria-controls="tabs-flights" aria-selected="true">
          <icon name="fluent-emoji-high-contrast:airplane" class="w-5 h-5 me-1" />
          Flights
        </a>
      </li>
      <li role="presentation">
        <a href="#tabs-hotels"
          class="my-2 block border rounded-lg border-transparent px-4 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-hotels" role="tab" aria-controls="tabs-hotels"
          aria-selected="false">
          <icon name="fluent-emoji-high-contrast:hotel" class="w-5 h-5 me-1" />
          Hotels
        </a>
      </li>
    </ul>

    <!--Tabs content-->
    <div class="mb-6">
      <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-flights" role="tabpanel" aria-labelledby="tabs-flights-tab" data-twe-tab-active>
        <flights-tabs />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-hotels" role="tabpanel" aria-labelledby="tabs-hotels-tab">
        Hotels content
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { Tab, initTWE } = await import("tw-elements");
  initTWE({ Tab });
});
</script>