<template>
  <div class="relative hover:scale-105 transition-all duration-300 ease-out">
    <NuxtLink :to="link">
      <img alt="" class="rounded-3xl w-full" :src="image" />
      <div
        class="absolute inset-x-0 bottom-2 text-white font-semibold text-center text-lg"
      >
        {{ text }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: "#",
  },
  text: {
    type: String,
    default: "text",
  },
  link: {
    type: String,
    default: "/",
  },
});
</script>
