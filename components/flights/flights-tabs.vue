<template>
  <div>
    <!--Tabs navigation-->
    <ul class="flex flex-row flex-wrap mb-5 list-none border-b-0 ps-0 space-s-4" role="tablist" data-twe-nav-ref>
      <li role="presentation">
        <a href="#tabs-one-way"
          class="my-2 block bg-[#e7fddc] rounded-full border-transparent px-4 pb-2 pt-2 text-md font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-green-500 dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-one-way" data-twe-nav-active role="tab"
          aria-controls="tabs-one-way" aria-selected="true">One-way</a>
      </li>
      <li role="presentation">
        <a href="#tabs-round-trip"
          class="my-2 block bg-[#e7fddc] rounded-full border-transparent px-4 pb-2 pt-2 text-md font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-green-500 dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-round-trip" role="tab" aria-controls="tabs-round-trip"
          aria-selected="false">Round-trip</a>
      </li>
      <li role="presentation">
        <a href="#tabs-multi-city"
          class="my-2 block bg-[#e7fddc] rounded-full border-transparent px-4 pb-2 pt-2 text-md font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-green-500 dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
          data-twe-toggle="pill" data-twe-target="#tabs-multi-city" role="tab" aria-controls="tabs-multi-city"
          aria-selected="false">Multi-city</a>
      </li>
    </ul>

    <!--Tabs content-->
    <div class="mb-6">
      <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-one-way" role="tabpanel" aria-labelledby="tabs-one-way-tab" data-twe-tab-active>
        <one-way />
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-round-trip" role="tabpanel" aria-labelledby="tabs-round-trip-tab">
        Tab 2 content
      </div>
      <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
        id="tabs-multi-city" role="tabpanel" aria-labelledby="tabs-round-trip-tab">
        Tab 3 content
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