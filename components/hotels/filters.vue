<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <div class="mb-5">
          <p class="text-2xl font-semibold">{{ $t('hotels.we_compare_hotel_prices_from_100s_of_sites') }}</p>
          <span class="font-normal text-md">{{ $t('hotels.we’ll_do_the_searching_you_do_the_saving') }}</span>
        </div>
      </div>

      <div>
        <div class="bg-white rounded-lg shadow-2xl">
          <div class="p-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div class="relative">
                <div class="p-4 text-center bg-gray-100">
                  <div class="relative">
                    <icon name="radix-icons:magnifying-glass" class="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                    <input v-model="query" @input="filterOptions" @focus="showOptions = true" @blur="hideOptions"
                      type="text" id="autocomplete"
                      class="w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      :placeholder="$t('placeholder.where_to')" ref="autocomplete" />
                    <ul v-if="showOptions && filteredOptions.length"
                      class="absolute left-0 z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                      :style="{ width: $refs.autocomplete.offsetWidth + 'px' }">
                      <li v-for="country in filteredOptions" :key="country.code" @mousedown="selectOption(country)"
                        class="px-4 py-2 font-medium cursor-pointer hover:bg-indigo-600 hover:text-white text-start">
                        {{ country.name }} - {{ country.code }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="p-4 text-center bg-gray-100">
                <VueDatePicker v-model="date" range :placeholder="$t('placeholder.check_in')" text-input />
              </div>

              <div class="p-4 text-center bg-gray-100">
                <VueDatePicker v-model="date" range :placeholder="$t('placeholder.check_out')" text-input />
              </div>

              <div class="relative p-4 text-center bg-gray-100">
                <HeadlessMenu>
                  <HeadlessMenuButton
                    class="relative flex items-center justify-start w-full p-2 bg-white rounded-md space-s-2">
                    <icon name="bi:people" class="w-5 h-5 text-gray-400" />
                    <span>{{ $t('hotels.guests_rooms') }}</span>
                  </HeadlessMenuButton>
                  <HeadlessMenuItems
                    class="absolute z-10 w-[400px] mt-1 bg-white border border-gray-300 rounded-md shadow-2xl">
                    <div class="mt-2 border-t border-gray-100">
                      <dl class="divide-y divide-gray-100">
                        <div class="flex items-center justify-between px-2 py-2 sm:gap-4">
                          <dt class="mt-1 text-sm font-medium leading-6 text-gray-900 ms-3">{{ $t('hotels.adults') }}
                          </dt>
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
                        <div class="flex items-center justify-between px-2 py-2 sm:gap-4">
                          <dt class="mt-1 text-sm font-medium leading-6 text-gray-900 ms-3">{{ $t('hotels.children') }}
                          </dt>
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
                        <div class="flex items-center justify-between px-2 py-2 sm:gap-4">
                          <dt class="mt-1 text-sm font-medium leading-6 text-gray-900 ms-3">{{ $t('hotels.rooms') }}
                          </dt>
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
                    <div class="flex items-center justify-end m-4 mt-6 gap-x-6">
                      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">{{ $t('buttons.reset')
                        }}</button>
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
      </div>
    </section>
  </div>
</template>

<script setup>
import countriesData from '@/assets/countries.json';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref(null);
const query = ref('');
const selectedOption = ref(null);
const showOptions = ref(false);
const filteredOptions = ref(countriesData.countries);

const filterOptions = () => {
  const queryLower = query.value.toLowerCase();
  filteredOptions.value = countriesData.countries.filter(country =>
    country.name.toLowerCase().includes(queryLower)
  );
};

const selectOption = (country) => {
  selectedOption.value = country;
  query.value = country.name;
  showOptions.value = false;
};

const hideOptions = () => {
  setTimeout(() => {
    showOptions.value = false;
  }, 200);
};
</script>