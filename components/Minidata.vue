<template>
  <div class="flex items-center gap-4">
    <div class="avatar">
      <div class="mask mask-circle size-20 max-lg:size-12 max-xl:size-14">
        <img :src="image" />
      </div>
    </div>
    <div class="text-2xl text-white font-semibold uppercase max-lg:text-sm">
      <h2>{{ text }}</h2>
    </div>
  </div>
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
});
</script>
