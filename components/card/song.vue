<template>
  <div class="relative hover:scale-105 transition-all duration-300 ease-out">
    <a href="">
      <img class="rounded-3xl w-full" :src="songs.image" />
      <div
        class="absolute inset-x-0 bottom-2 text-white font-semibold text-center text-lg"
      >
        {{ songs.name }}
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({ songs: Object });
</script>
