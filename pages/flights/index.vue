<template>
  <div>
    <div class="relative">
      <section class="relative bg-cover bg-center bg-no-repeat h-[400px]"
        style="background-image: url('https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg');">
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-2xl font-bold text-white md:text-xl lg:text-3xl xl:text-4xl">
            Discover the real value of travel
          </p>
        </div>
      </section>

      <!-- Tabs Section -->
      <div class="relative flex justify-center items-center mt-[-100px]">
        <div class="w-full p-8 transition-all transform bg-white shadow-lg max-w-7xl rounded-xl">
          <tabs />
        </div>
      </div>

      <div class="mx-auto my-10 max-w-7xl">
        <div class="w-full p-4 bg-[#fdf5cb] rounded-lg">
          <p class="text-sm text-gray-700">Please be aware that the local Egyptian banks have imposed a restriction on
            the use of local debit and credit cards for international purchases. Kindly use an international card if
            possible. We regret the inconvenience caused.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead(() => ({
  titleTemplate: t('head.flights')
}))
</script>