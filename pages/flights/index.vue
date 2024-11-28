<template>
  <div class="relative">
    <section class="relative bg-cover bg-center bg-no-repeat h-[400px]"
      style="background-image: url('https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg');">
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-2xl font-bold text-white md:text-xl lg:text-3xl xl:text-4xl">
          Discover the real value of travel
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead(() => ({
  titleTemplate: t('head.flights')
}))
</script>