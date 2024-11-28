<template>
  <div>
    <filters />
    <adds />
    <top-rated-hotels />
    <discover-best-times />
    <popular-searches />
    <logo />
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead(() => ({
  titleTemplate: t('head.hotels')
}))
</script>