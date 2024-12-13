<template>
  <div>
    <section class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <breadcrumb />
      <div class="py-6 bg-white sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:h-auto">
                <img src="https://justfields.com/storage/projects/7M5rV059/greece.jpg" loading="lazy"
                  class="object-cover object-center w-full h-full" />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="font-bold text-center text-indigo-500 md:text-left">Who we are</p>

              <h1 class="mb-4 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our
                competitive advantage</h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to
                display a sample of fonts or generate text for testing. Filler text is dummy text which has no
                meaning however looks very similar to real text.<br /><br />

                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is <a href="#"
                  class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a>
                or otherwise generated. It may be used to display a sample of fonts or generate text for
                testing.
                Filler text is dummy text which has no meaning however looks very similar to real text.
              </p>

              <h2 class="mb-2 text-xl font-semibold text-center text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About
                us</h2>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also
                known as placeholder text. It shares some characteristics of a real written text but is random
                or
                otherwise generated. It may be used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">

            <div class="md:pt-8">
              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics
                of a real written text but is random or otherwise generated. It may be used to display a sample of fonts
                or
                generate text for testing. Filler text is dummy text which has no meaning however looks very similar to
                real
                text. The important factor when using filler text is that the text looks realistic otherwise it will not
                look very good.<br /><br />

                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics
                of a real written text but is <a href="#"
                  class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a>
                or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler
                text is dummy text which has no meaning however looks very similar to real text.
              </p>

              <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known
                as
                placeholder text. It shares some characteristics of a real written text but is random or otherwise
                generated. It may be used to display a sample of fonts or generate text for testing. Filler text is
                dummy
                text which has no meaning however looks very similar to real text.</p>

              <ul class="mb-6 text-gray-500 list-disc list-inside sm:text-lg md:mb-8">
                <li>This is a section of some simple filler text</li>
                <li>Also known as placeholder text</li>
                <li>It shares some characteristics of a real written text</li>
              </ul>

              <blockquote class="ps-4 mb-6 italic text-gray-500 border-l-4 sm:text-lg md:mb-8 md:ps-6">“This is a
                section of
                some simple filler text, also known as placeholder text. It shares some characteristics of a real
                written
                text but is random or otherwise generated.”</blockquote>

              <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

              <p class="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as
                placeholder
                text. It shares some characteristics of a real written text but is random or otherwise generated. It may
                be
                used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no
                meaning however looks very similar to real text.</p>
            </div>
            <div>
              <div class="h-64 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:h-auto">
                <img src="https://justfields.com/storage/projects/7M5rV059/greece-01.jpg" loading="lazy"
                  class="object-cover object-center w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead(() => ({
  titleTemplate: t('head.about')
}))
</script>