<template>
  <div>
    <div class="relative flex flex-wrap items-center space-y-4 sm:space-y-0 sm:flex-nowrap space-s-3">
      <!-- First Select -->
      <select id="country" name="country" v-model="firstInput" autocomplete="country-name"
        :class="{ '-translate-x-20 opacity-0': isSwapping }"
        class="w-full sm:w-[370px] px-4 py-4 text-sm border border-gray-300 rounded-lg sm:rounded-l-lg focus:ring focus:ring-indigo-500">
        <option value="" disabled selected>From</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>

      <!-- Swap Icon -->
      <div class="flex items-center justify-center w-full cursor-pointer sm:w-auto sm:px-3" @click="swapInputs">
        <icon name="tabler:arrows-exchange"
          :class="['w-5 h-5 text-gray-500 transition-transform duration-300', rotationClass]" />
      </div>

      <!-- Second Select -->
      <select id="country" name="country" v-model="secondInput" autocomplete="country-name"
        :class="{ '-translate-x-20 opacity-0': isSwapping }"
        class="w-full sm:w-[370px] px-4 py-4 text-sm border border-gray-300 rounded-lg sm:rounded-l-lg focus:ring focus:ring-indigo-500">
        <option value="" disabled selected>To</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>

      <!-- Third Input -->
      <vue-date-picker v-model="date" range :placeholder="$t('placeholder.depart_return')"
        :multi-calendars="{ solo: true, static: false }" :clearable="true">
      </vue-date-picker>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex gap-3">
        <div class="flex items-center h-6 shrink-0">
          <div class="grid grid-cols-1 group size-4">
            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" checked=""
              class="w-5 h-5 col-start-1 row-start-1 bg-white border border-gray-300 rounded checked:border-gray-600 checked:bg-green-600 indeterminate:border-gray-600 indeterminate:bg-green-600" />
          </div>
        </div>
        <div class="text-sm/6">
          <label for="comments" class="text-lg font-medium text-gray-900">Direct flight only</label>
        </div>
      </div>
      <div class="flex justify-end">
        <!-- adults -->
        <div class="relative p-4 text-center">
          <HeadlessMenu>
            <HeadlessMenuButton
              class="relative flex items-center justify-start w-full p-2 bg-white rounded-md space-s-2">
              <span>{{ $t('hotels.adults') }}</span>
            </HeadlessMenuButton>
            <HeadlessMenuItems
              class="absolute z-10 w-[400px] mt-1 bg-white border border-gray-300 rounded-md shadow-2xl end-0 py-2 px-4">
              <div class="mt-2 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                  <div class="flex items-center justify-between px-2 py-2">
                    <div class="flex flex-col">
                      <div class="flex items-center">
                        <icon name="material-symbols:man-sharp" class="text-gray-700 me-2" />
                        <dt class="-mt-3 text-sm font-medium leading-6 text-gray-900 ms-2">
                          {{ $t('hotels.adults') }}
                        </dt>
                      </div>
                      <p class="flex items-center ms-10 text-[12px] text-gray-600 font-light -mt-2"> > 12 years</p>
                    </div>
                    <dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ms-auto me-4">
                      <div>
                        <div class="flex h-8 mx-auto text-gray-600">
                          <button type="button"
                            class="flex items-center justify-center px-2 transition bg-gray-200 rounded-s-md hover:bg-black hover:text-white">
                            <icon name="gridicons:minus-small" size="15px" />
                          </button>
                          <div
                            class="flex items-center justify-center w-full px-4 text-xs uppercase transition bg-gray-100 ">
                            1
                          </div>
                          <button type="button"
                            class="flex items-center justify-center px-2 transition bg-gray-200 rounded-e-md hover:bg-black hover:text-white">
                            <icon name="gridicons:plus-small" size="15px" />
                          </button>
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
                <dl class="divide-y divide-gray-100">
                  <div class="flex items-center justify-between px-2 py-2">
                    <div class="flex flex-col">
                      <div class="flex items-center">
                        <icon name="fa6-solid:children" class="text-gray-700 me-2" />
                        <dt class="-mt-3 text-sm font-medium leading-6 text-gray-900 ms-2">
                          {{ $t('hotels.children') }}
                        </dt>
                      </div>
                      <p class="flex items-center ms-10 text-[12px] text-gray-600 font-light -mt-2">2-12 years</p>
                    </div>
                    <dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ms-auto me-4">
                      <div>
                        <div class="flex h-8 mx-auto text-gray-600">
                          <button type="button"
                            class="flex items-center justify-center px-2 transition bg-gray-200 rounded-s-md hover:bg-black hover:text-white">
                            <icon name="gridicons:minus-small" size="15px" />
                          </button>
                          <div
                            class="flex items-center justify-center w-full px-4 text-xs uppercase transition bg-gray-100 ">
                            2
                          </div>
                          <button type="button"
                            class="flex items-center justify-center px-2 transition bg-gray-200 rounded-e-md hover:bg-black hover:text-white">
                            <icon name="gridicons:plus-small" size="15px" />
                          </button>
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
                <dl class="divide-y divide-gray-100">
                  <div class="flex items-center justify-between px-2 py-2">
                    <div class="flex flex-col">
                      <div class="flex items-center">
                        <icon name="mdi:baby" class="text-gray-700 me-2" />
                        <dt class="-mt-3 text-sm font-medium leading-6 text-gray-900 ms-2">
                          {{ $t('hotels.infants') }}
                        </dt>
                      </div>
                      <p class="flex items-center ms-10 text-[12px] text-gray-600 font-light -mt-2">
                        < 2 years</p>
                    </div>
                    <dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ms-auto me-4">
                      <div>
                        <div class="flex h-8 mx-auto text-gray-600">
                          <button type="button"
                            class="flex items-center justify-center px-2 transition bg-gray-200 rounded-s-md hover:bg-black hover:text-white">
                            <icon name="gridicons:minus-small" size="15px" />
                          </button>
                          <div
                            class="flex items-center justify-center w-full px-4 text-xs uppercase transition bg-gray-100 ">
                            3
                          </div>
                          <button type="button"
                            class="flex items-center justify-center px-2 transition bg-gray-200 rounded-e-md hover:bg-black hover:text-white">
                            <icon name="gridicons:plus-small" size="15px" />
                          </button>
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="flex justify-end m-4 mt-6">
                <button type="submit"
                  class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
                    $t('buttons.apply') }}</button>
              </div>
            </HeadlessMenuItems>
          </HeadlessMenu>
        </div>

        <!-- economy -->
        <div class="relative p-4 text-center">
          <HeadlessMenu as="div" class="relative ml-3">
            <div>
              <HeadlessMenuButton
                class="relative flex items-center justify-start w-full p-2 bg-white rounded-md space-s-2">
                <span>Economy</span>
              </HeadlessMenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <HeadlessMenuItems
                class="absolute z-10 w-48 px-4 py-2 mt-2 space-y-1 origin-top-right bg-white rounded-md shadow-lg end-0 ring-1 ring-black/5 focus:outline-none text-start">
                <HeadlessMenuItem v-slot="{ active }">
                  <nuxt-link to=""
                    :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Economy</nuxt-link>
                </HeadlessMenuItem>
                <HeadlessMenuItem v-slot="{ active }">
                  <nuxt-link to=""
                    :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Premium
                    Economy</nuxt-link>
                </HeadlessMenuItem>
                <HeadlessMenuItem v-slot="{ active }">
                  <nuxt-link to=""
                    :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Business
                    Class</nuxt-link>
                </HeadlessMenuItem>
                <HeadlessMenuItem v-slot="{ active }">
                  <nuxt-link to=""
                    :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">First
                    Class</nuxt-link>
                </HeadlessMenuItem>
              </HeadlessMenuItems>
            </transition>
          </HeadlessMenu>
        </div>

        <!-- payment -->
        <div class="relative p-4 text-center">
          <HeadlessMenu as="div" class="relative ms-3">
            <div>
              <HeadlessMenuButton
                class="relative flex items-center justify-start w-full p-2 bg-white rounded-md space-s-2">
                <span>Payment</span>
              </HeadlessMenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <HeadlessMenuItems
                class="absolute z-10 w-[400px] mt-1 bg-white border border-gray-300 rounded-md shadow-2xl end-0 py-2 px-4">
                <div class="mt-2 border-t border-gray-100">
                  <p class="text-xs text-gray-600 text-start">By selecting one or more (max 10) payment types, prices on
                    Wego will
                    include applicable minimum payment fee. Please note that not all providers support all payment
                    types.</p>
                  <div class="flex items-center mt-6 space-s-6">
                    <label class="flex items-center space-s-2">
                      <input type="checkbox"
                        class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                      <span class="font-medium text-gray-700 text-md">MasterCard Credit</span>
                    </label>
                    <label class="flex items-center space-s-2">
                      <input type="checkbox"
                        class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                      <span class="font-medium text-gray-700 text-md">Visa Credit</span>
                    </label>
                  </div>
                  <div class="flex items-center mt-4 space-s-6">
                    <label class="flex items-center space-s-2">
                      <input type="checkbox"
                        class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                      <span class="font-medium text-gray-700 text-md">American Express</span>
                    </label>
                    <label class="flex items-center space-s-2">
                      <input type="checkbox"
                        class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                      <span class="font-medium text-gray-700 text-md">Bank Transfer</span>
                    </label>
                  </div>
                  <div class="flex items-center mt-4 space-s-20">
                    <label class="flex items-center space-s-2">
                      <input type="checkbox"
                        class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                      <span class="font-medium text-gray-700 text-md">Diners Club</span>
                    </label>
                    <label class="flex items-center space-s-2">
                      <input type="checkbox"
                        class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 -ms-2" />
                      <span class="font-medium text-gray-700 text-md">MasterCard Cirrus</span>
                    </label>
                  </div>
                  <div :class="{ hidden: !isExpanded }" class="mt-4 transition-all duration-300 ease-in-out">
                    <div class="flex items-center mt-4 space-s-8">
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <span class="font-medium text-gray-700 text-md">MasterCard Debit</span>
                      </label>
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <span class="font-medium text-gray-700 text-md">PayPal</span>
                      </label>
                    </div>
                    <div class="flex items-center mt-4 space-s-20">
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <span class="font-medium text-gray-700 text-md">Visa Debit</span>
                      </label>
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 ms-1" />
                        <span class="font-medium text-gray-700 text-md">Cash Payment</span>
                      </label>
                    </div>
                    <div class="flex items-center mt-4 space-s-12">
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <span class="font-medium text-gray-700 text-md">Western Union</span>
                      </label>
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 ms-1" />
                        <span class="font-medium text-gray-700 text-md">Bitcoin</span>
                      </label>
                    </div>
                    <div class="flex items-center mt-4 space-s-20">
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <span class="font-medium text-gray-700 text-md">Fawry Pay</span>
                      </label>
                      <label class="flex items-center space-s-2">
                        <input type="checkbox"
                          class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 ms-0.5" />
                        <span class="font-medium text-gray-700 text-md">Apple Pay</span>
                      </label>
                    </div>
                    <nuxt-link to="" @click.prevent="isExpanded = false"
                      class="block mt-4 text-sm font-medium text-green-600 cursor-pointer text-start hover:text-green-700">
                      Show Less
                    </nuxt-link>
                  </div>
                  <nuxt-link v-if="!isExpanded" to="" @click.prevent="isExpanded = true"
                    class="block mt-4 text-sm font-medium text-green-600 cursor-pointer text-start hover:text-green-700">
                    Show More
                  </nuxt-link>
                </div>
                <p class="mt-4 text-xs text-gray-700 text-start">Tips: To find popular payment types, you can change
                  your "Country" setting (located on top-right menu).</p>
                <hr class="my-4">
                <div class="flex justify-end mt-4">
                  <button type="button" class="text-green-600 cursor-pointer">
                    Apply
                  </button>
                </div>
              </HeadlessMenuItems>
            </transition>
          </HeadlessMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const firstInput = ref('');
const secondInput = ref('');
const isSwapped = ref(false);
const isSwapping = ref(false);
const date = ref(null);
const isExpanded = ref(false)

const rotationClass = computed(() => (isSwapped.value ? 'rotate-180' : 'rotate-0'));

const swapInputs = () => {
  isSwapped.value = !isSwapped.value;
  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
};
</script>

<style scoped>
.dp__main.dp__theme_light {
  width: 400px !important;
  padding-top: 15px;
  padding-bottom: 15px;
}

::v-deep(.dp__input) {
  height: 53px;
}
</style>