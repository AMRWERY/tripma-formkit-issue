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
      <div class="flex justify-end gap-3">
        <div class="relative p-4 text-center">
          <HeadlessMenu>
            <HeadlessMenuButton
              class="relative flex items-center justify-start w-full p-2 bg-white rounded-md space-s-2">
              <icon name="bi:people" class="w-5 h-5 text-gray-400" />
              <span>{{ $t('hotels.adults') }}</span>
            </HeadlessMenuButton>
            <HeadlessMenuItems
              class="absolute z-10 w-[400px] mt-1 bg-white border border-gray-300 rounded-md shadow-2xl right-0">
              <div class="mt-2 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                  <div class="flex items-center justify-between px-2 py-2">
                    <div class="flex flex-col">
                      <div class="flex items-center">
                        <icon name="material-symbols:man-sharp" class="mr-2 text-gray-700" />
                        <dt class="mt-1 text-sm font-medium leading-6 text-gray-900 ms-2">
                          {{ $t('hotels.adults') }}
                        </dt>
                      </div>
                      <p class="flex items-center ms-10 text-[12px] text-gray-600 font-light"> > 12 years</p>
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
                        <icon name="fa6-solid:children" class="mr-2 text-gray-700" />
                        <dt class="mt-1 text-sm font-medium leading-6 text-gray-900 ms-2">
                          {{ $t('hotels.children') }}
                        </dt>
                      </div>
                      <p class="flex items-center ms-10 text-[12px] text-gray-600 font-light">2-12 years</p>
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
                        <icon name="mdi:baby" class="mr-2 text-gray-700" />
                        <dt class="mt-1 text-sm font-medium leading-6 text-gray-900 ms-2">
                          {{ $t('hotels.infants') }}
                        </dt>
                      </div>
                      <p class="flex items-center ms-10 text-[12px] text-gray-600 font-light">
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