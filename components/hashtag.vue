<template>
  <NuxtLink
    to=""
    class="btn btn-secondary rounded-full text-white text-xl font-semibold max-sm:text-sm"
  >
    <h1># {{ tags.title }}</h1>
  </NuxtLink>
</template>

<script setup>
defineProps({ tags: Object });
</script>
