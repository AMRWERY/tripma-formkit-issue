<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mx-auto mt-12 md:px-6">
        <div id="bg-container" class="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat rounded-lg">
          <div class="p-6">
            <p class="mb-4 text-xl text-white">Discover the best time to book your next stay</p>
            <span id="tab-name" class="text-2xl text-white"></span>
          </div>
        </div>
        <div class="px-6 md:px-24">
          <div
            class="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <!--Pills navigation-->
            <ul class="flex flex-col flex-wrap mb-5 list-none ps-0 md:flex-row" id="pills-tab" role="tablist"
              data-twe-nav-ref>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-hurghada-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Hurghada_0.jpg"
                  data-name="Hurghada" data-twe-toggle="pill" data-twe-target="#pills-hurghada" data-twe-nav-active
                  role="tab" aria-controls="pills-hurghada" aria-selected="true">Hurghada</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-sharm-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Sharm-elSheikh_1.jpg"
                  data-name="Sharm el-Sheikh" data-twe-toggle="pill" data-twe-target="#pills-sharm" role="tab"
                  aria-controls="pills-sharm" aria-selected="false">Sharm el-Sheikh</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-ain-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Ain-El-Sokhna_2.jpg"
                  data-name="Ain El Sokhna" data-twe-toggle="pill" data-twe-target="#pills-ain" role="tab"
                  aria-controls="pills-ain" aria-selected="false">Ain El Sokhna</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-makkah-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Makkah_04.jpg"
                  data-name="Makkah" data-twe-toggle="pill" data-twe-target="#pills-makkah" role="tab"
                  aria-controls="pills-makkah" aria-selected="false">Makkah</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-dubai-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Dubai_05.jpg"
                  data-name="Dubai" data-twe-toggle="pill" data-twe-target="#pills-dubai" role="tab"
                  aria-controls="pills-dubai" aria-selected="false">Dubai</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-istanbul-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Dubai_05.jpg"
                  data-name="Istanbul" data-twe-toggle="pill" data-twe-target="#pills-istanbul" role="tab"
                  aria-controls="pills-istanbul" aria-selected="false">Istanbul</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-medina-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/medina_06.jpg"
                  data-name="Medina" data-twe-toggle="pill" data-twe-target="#pills-medina" role="tab"
                  aria-controls="pills-medina" aria-selected="false">Medina</nuxt-link>
              </li>
              <li role="presentation">
                <nuxt-link to=""
                  class="my-2 block rounded-full bg-zinc-100 px-2 pb-2 pt-2 text-sm font-medium leading-tight text-neutral-500 dark:text-white dark:bg-black dark:hover:bg-black/60 dark:hover:text-neutral-500 data-[twe-nav-active]:bg-black data-[twe-nav-active]:text-white md:me-4"
                  id="pills-marsa-tab" data-bg="https://justfields.com/storage/projects/7M5rV059/Marsa_6.jpg"
                  data-name="Marsa" data-twe-toggle="pill" data-twe-target="#pills-marsa" role="tab"
                  aria-controls="pills-marsa" aria-selected="false">Marsa</nuxt-link>
              </li>
            </ul>

            <!--Pills content-->
            <div class="mb-6">
              <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-hurghada" role="tabpanel" aria-labelledby="pills-hurghada-tab" data-twe-tab-active>
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">30$ - 150$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>December</p>
                                <span class="ms-auto">30$ - 130$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>August</p>
                                <span class="ms-auto">30$ - 150$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>January</p>
                                <span class="ms-auto">65$ - 150$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>September</p>
                                <span class="ms-auto">30$ - 150$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>March</p>
                                <span class="ms-auto">45$ - 150$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>October</p>
                                <span class="ms-auto">30$ - 140$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>April</p>
                                <span class="ms-auto">75$ - 175$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>November</p>
                                <span class="ms-auto">35$ - 130$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-sharm" role="tabpanel" aria-labelledby="pills-sharm-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>June</p>
                                <span class="ms-auto">25$ - 75$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>October</p>
                                <span class="ms-auto">30$ - 65$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">25$ - 80$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>November</p>
                                <span class="ms-auto">25$ - 65$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>August</p>
                                <span class="ms-auto">30$ - 85$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>December</p>
                                <span class="ms-auto">25$ - 70$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>September</p>
                                <span class="ms-auto">30$ - 85$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>January</p>
                                <span class="ms-auto">30$ - 10$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-ain" role="tabpanel" aria-labelledby="pills-ain-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">30$ - 135$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-makkah" role="tabpanel" aria-labelledby="pills-Makkah-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>June</p>
                                <span class="ms-auto">45$ - 125$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>October</p>
                                <span class="ms-auto">40$ - 200$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">35$ - 170$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>November</p>
                                <span class="ms-auto">35$ - 170$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>August</p>
                                <span class="ms-auto">35$ - 195$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>December</p>
                                <span class="ms-auto">145$ - 200$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>September</p>
                                <span class="ms-auto">40$ - 175$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-dubai" role="tabpanel" aria-labelledby="pills-dubai-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>June</p>
                                <span class="ms-auto">35$ - 110$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>October</p>
                                <span class="ms-auto">75$ - 235$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">35$ - 110$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>January</p>
                                <span class="ms-auto">105$ - 350$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>August</p>
                                <span class="ms-auto">35$ - 115$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>May</p>
                                <span class="ms-auto">50$ - 205$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>September</p>
                                <span class="ms-auto">40$ - 130$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-istanbul" role="tabpanel" aria-labelledby="pills-istanbul-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>June</p>
                                <span class="ms-auto">50$ - 155$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>November</p>
                                <span class="ms-auto">50$ - 175$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">55$ - 165$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>December</p>
                                <span class="ms-auto">50$ - 175$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>August</p>
                                <span class="ms-auto">60$ - 175$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>January</p>
                                <span class="ms-auto">55$ - 235$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>September</p>
                                <span class="ms-auto">60$ - 180$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>May</p>
                                <span class="ms-auto">60$ - 295$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>October</p>
                                <span class="ms-auto">55$ - 185$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-medina" role="tabpanel" aria-labelledby="pills-medina-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>June</p>
                                <span class="ms-auto">55$ - 105$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>September</p>
                                <span class="ms-auto">75$ - 300$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">65$ - 225$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>October</p>
                                <span class="ms-auto">95$ - 140$</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>August</p>
                                <span class="ms-auto">70$ - 245$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
                id="pills-marsa" role="tabpanel" aria-labelledby="pills-marsa-tab">
                <div class="py-8 bg-gray-100">
                  <div class="px-4 mx-auto max-w-7xl">
                    <div class="overflow-hidden bg-white rounded-lg shadow-md">
                      <!-- Card Header -->
                      <div class="px-6 py-2">
                        <p class="text-xs font-thin">Prices are based on the average price range for 3-star hotels
                          per night.</p>
                      </div>
                      <!-- Card Content -->
                      <div class="px-6 py-4">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3">
                            <div class="block w-full mt-1 read-only-input">
                              <div class="flex px-3">
                                <p>July</p>
                                <span class="ms-auto">20$ - 210$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
onMounted(async () => {
  const tabs = document.querySelectorAll('[data-twe-toggle="pill"]');
  const bgContainer = document.getElementById('bg-container');
  const tabName = document.getElementById('tab-name');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const bgUrl = tab.getAttribute('data-bg');
      const name = tab.getAttribute('data-name');
      bgContainer.style.backgroundImage = `url('${bgUrl}')`;
      tabName.innerText = name;
    });
  });

  const { Tab, initTWE } = await import("tw-elements");
  initTWE({ Tab });
});
</script>