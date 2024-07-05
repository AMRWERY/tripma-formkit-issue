<template>
  <div>
    <best-programmes />
    <results />
    <tourism-programmes />
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead(() => ({
  title: t('head.destinations')
}))
</script>