<template>
  <NuxtLink
    :to="link"
    target="_blank"
    class="flex flex-col items-center xl:hover:scale-110 transition-all duration-300 ease-in-out xl:hover:font-medium"
  >
    <img :src="image" class="rounded-full max-md:w-20" />
    <p class="text-2xl text-primary text-center max-md:text-lg">{{ text }}</p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "text",
  },
  image: {
    type: String,
    default: "#",
  },
  link: {
    type: String,
    default: "#",
  },
});
</script>
