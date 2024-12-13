<template>
  <div>
    <div class="flex justify-end">
      <button type="button" @click="openModal('Visit Hawaii.mp4')"
        class="px-3 py-3 text-white bg-pink-500 rounded-full hover:bg-pink-600 text-md">
        <icon name="fluent-mdl2:play-solid" />
      </button>
      <p class="mt-3 ms-3">{{ $t('home.play_demo') }}</p>
    </div>

    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" @close="closeModal" class="absolute bottom-0 start-0">
        <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
          enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 flex items-end justify-end p-4 overflow-y-auto">
          <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <HeadlessDialogPanel
              class="w-full max-w-md p-2 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div>
                <video class="w-full h-64 shadow-lg" v-if="currentVideoUrl" autoplay loop controls muted>
                  <source :src="currentVideoUrl" type="video/mp4" />
                </video>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup>
const store = useOfferDealsStore();
const isOpen = ref(false);
const currentVideoUrl = ref('');

const getVideoUrl = (videoName) => {
  const video = store.videos.find((video) => video.name === videoName);
  return video ? video.url : '';
};

const openModal = (videoName) => {
  currentVideoUrl.value = getVideoUrl(videoName);
  if (currentVideoUrl.value) {
    isOpen.value = true;
  } else {
    console.error('Video not found:', videoName);
  }
};

const closeModal = () => {
  isOpen.value = false;
  currentVideoUrl.value = '';
};

onMounted(async () => {
  await store.fetchAllVideos();
});
</script>