<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative text-gray-600 body-font">
        <div class="absolute inset-0 bg-gray-300">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8539354086974!2d31.307682574902486!3d29.98602286552143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458391b0156a9b1%3A0x35b0bda415fdbe15!2sCarrefour%20-%20Maadi%20City%20Center!5e0!3m2!1sen!2seg!4v1673950981424!5m2!1sen!2seg"
            class="custom-map-style"></iframe>
        </div>
        <div class="flex px-5 py-24 mx-auto">
          <div
            class="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
            <h2 class="mb-1 text-lg font-semibold text-center text-gray-900 title-font">Get in touch</h2>
            <p class="mb-5 font-medium text-center text-gray-900 text-md">Got a technical issue? Want to send feedback
              about
              a beta feature? Need details about our Business plan? Let us know.</p>

            <FormKit type="form" id="reset-password-form" v-model="data" :actions="false" :incomplete-message="false">
              <div class="relative mb-4">
                <FormKitSchema :schema="contactUsSchema" />
              </div>
              <button type="submit"
                class="block w-full px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Let's
                talk</button>
            </FormKit>

            <p class="mt-3 text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { contactUsSchema } from '@/dynamic-forms/dynamic-inputs'

const data = reactive({
  email: '',
  message: ''
});
</script>

<style scoped>
.custom-map-style {
  filter: grayscale(1) contrast(1.2) opacity(0.4);
}
</style>