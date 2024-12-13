<template>
  <div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      <!-- Column 1 -->
      <div class="p-2">
        <div>
          <label for="HeadlineAct1" class="block text-sm font-medium text-gray-900">
            <span class="font-semibold">Price:</span> per night
          </label>
          <div @click="toggleMenu('menu1')" class="relative">
            <input type="text" id="HeadlineAct1" name="HeadlineAct1"
              class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm cursor-pointer" value="$100"
              readonly>
            <div v-if="showMenu.menu1"
              class="absolute start-0 z-10 w-full p-6 rounded-lg shadow-lg bg-gray-50 top-full md:w-96 drop-shadow-xl">
              <h2 class="mb-4 text-lg font-bold">Set Price Range</h2>
              <div class="mb-4">
                <input type="range" id="price-range1" class="w-full accent-indigo-600" min="0" max="1000"
                  v-model="priceValue" @input="updatePrice">
              </div>
              <div class="flex justify-between text-gray-500">
                <span id="minPrice1"
                  class="flex items-center justify-center w-16 text-sm bg-white border border-gray-300 rounded h-7">{{
                    formattedPrice }}</span>
                <span id="maxPrice1"
                  class="flex items-center justify-center w-16 text-sm bg-white border border-gray-300 rounded h-7">$1000</span>
              </div>
              <div class="flex items-center justify-end mt-6 gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit"
                  class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="p-2">
        <div>
          <label for="HeadlineAct2" class="block text-sm font-semibold text-gray-900">Filters</label>
          <div @click="toggleMenu('menu2')" class="relative">
            <input type="text" id="HeadlineAct2" name="HeadlineAct2" value="Select"
              class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm cursor-pointer" readonly>
            <div v-if="showMenu.menu2"
              class="absolute start-0 z-10 w-full p-6 rounded-lg shadow-lg bg-gray-50 top-full md:w-96 drop-shadow-xl">
              <h2 class="mb-4 text-lg font-bold">Hotel Rating</h2>
              <div class="mb-4">
                <div class="flex justify-between space-x-2">
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 flex-grow basis-1/5 justify-center">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">0 - 1</span>
                  </span>
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 flex-grow basis-1/5 justify-center">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">2</span>
                  </span>
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 flex-grow basis-1/5 justify-center">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">3</span>
                  </span>
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 flex-grow basis-1/5 justify-center">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">4</span>
                  </span>
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 flex-grow basis-1/5 justify-center">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">5</span>
                  </span>
                </div>
              </div>

              <h2 class="mb-4 text-lg font-bold">Payment</h2>
              <div class="mb-4">
                <fieldset>
                  <div class="relative flex justify-between">
                    <div class="flex">
                      <div class="flex items-center h-6">
                        <input id="comments" name="comments" type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
                      </div>
                      <div class="text-sm leading-6">
                        <p class="font-normal text-gray-500 ms-2">Free cancellation</p>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="flex items-center h-6">
                        <input id="comments" name="comments" type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
                      </div>
                      <div class="text-sm leading-6">
                        <p class="font-normal text-gray-500 ms-2">Pay at the property</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <h2 class="mb-4 text-lg font-bold">Meal options</h2>
              <fieldset>
                <div class="mt-6 space-y-6">
                  <div class="relative flex gap-x-3">
                    <div class="flex items-center h-6">
                      <input id="comments" name="comments" type="checkbox"
                        class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <p class="font-medium text-gray-500">Breakfast included</p>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex items-center h-6">
                      <input id="candidates" name="candidates" type="checkbox"
                        class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <p class="font-medium text-gray-500">Half board</p>
                      <p class="text-xs font-thin text-gray-500">Breakfast and dinner included</p>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex items-center h-6">
                      <input id="offers" name="offers" type="checkbox"
                        class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <p class="font-medium text-gray-500">All-inclusive</p>
                      <p class="text-xs font-thin text-gray-500">All meals + some drinks and snacks included</p>
                    </div>
                  </div>
                  <div class="relative flex gap-x-3">
                    <div class="flex items-center h-6">
                      <input id="offers" name="offers" type="checkbox"
                        class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" />
                    </div>
                    <div class="text-sm leading-6">
                      <p class="font-medium text-gray-500">Full board</p>
                      <p class="text-xs font-thin text-gray-500">Breakfast, lunch and dinner included</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="flex items-center justify-end mt-6 gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit"
                  class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 3 -->
      <div class="p-2">
        <div>
          <label for="HeadlineAct1" class="block text-sm font-semibold text-gray-900">
            Guest Rating
          </label>
          <div @click="toggleMenu('menu3')" class="relative">
            <input type="text" id="HeadlineAct1" name="HeadlineAct1"
              class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm cursor-pointer" value="All"
              readonly>
            <div v-if="showMenu.menu3"
              class="absolute start-0 z-10 w-full p-6 rounded-lg shadow-lg bg-gray-50 top-full md:w-96 drop-shadow-xl">
              <div class="space-y-5">
                <div class="flex justify-between">
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 justify-center basis-1/5">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">8.5+</span>
                  </span>
                  <p class="font-normal">Excellent</p>
                </div>
                <div class="flex justify-between">
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 justify-center basis-1/5">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">8.0+</span>
                  </span>
                  <p class="font-normal">Very good</p>
                </div>
                <div class="flex justify-between">
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 justify-center basis-1/5">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">7.5+</span>
                  </span>
                  <p class="font-normal">Good</p>
                </div>
                <div class="flex justify-between">
                  <span
                    class="inline-flex items-center px-2 py-1.5 text-xs font-medium text-gray-600 bg-white rounded-lg ring-1 ring-inset ring-gray-500 justify-center basis-1/5">
                    <icon name="material-symbols-light:kid-star-sharp" size="15px" /> <span class="ms-1">7.0+</span>
                  </span>
                  <p class="font-normal">Fair</p>
                </div>
              </div>
              <div class="flex items-center justify-end mt-6 gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit"
                  class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 4 -->
      <div class="p-2">
        <div>
          <label for="HeadlineAct1" class="block text-sm font-semibold text-gray-900">
            Location
          </label>
          <div @click="toggleMenu('menu4')" class="relative">
            <input type="text" id="HeadlineAct1" name="HeadlineAct1"
              class="mt-1.5 w-full rounded-lg border-gray-400 text-gray-700 sm:text-sm cursor-pointer" value="Location"
              readonly>
            <div v-if="showMenu.menu4"
              class="absolute start-0 z-10 w-full p-6 rounded-lg shadow-lg bg-gray-50 top-full md:w-96 drop-shadow-xl h-96">
              <!-- Updated height here -->
              <div class="relative h-[280px]">
                <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8539354086974!2d31.307682574902486!3d29.98602286552143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458391b0156a9b1%3A0x35b0bda415fdbe15!2sCarrefour%20-%20Maadi%20City%20Center!5e0!3m2!1sen!2seg!4v1673950981424!5m2!1sen!2seg"
                  class="custom-map-style"></iframe>
              </div>
              <div class="flex items-center justify-end mt-6 gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit"
                  class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const priceValue = ref(100);
const showMenu = ref({
  menu1: false,
  menu2: false,
  menu3: false,
  menu4: false,
});

const formattedPrice = computed(() => {
  return `$${priceValue.value}`;
});

const updatePrice = () => {
  // This function is not needed now since v-model and computed property handle updates
};

const toggleMenu = (menu) => {
  showMenu.value[menu] = !showMenu.value[menu];
};
</script>