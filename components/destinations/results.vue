<template>
  <div>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <select name="HeadlineAct" id="HeadlineAct"
          class="mt-1.5 w-72 rounded-lg border-gray-300 text-gray-700 sm:text-sm" v-model="selectedFilter"
          @change="filterPlaces">
          <option v-for="filter in filters" :key="filter" :value="filter">{{ filter }}</option>
        </select>
        <p class="ms-auto">{{ $t('destinations.results') }}: <span class="text-blue-600 underline">{{ store.filteredPlacesArray.length }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const filters = ref(["Show All", "Include Car", "Not Include Car"]);

const store = useTourismProgrammesStore();
const selectedFilter = ref("Show All");

const filterPlaces = () => {
  store.filteredPlaces(selectedFilter.value);
};

watch(selectedFilter, (newValue) => {
  store.filteredPlaces(newValue);
});
</script>
