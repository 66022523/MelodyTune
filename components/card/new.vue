<template>
  <div class="flex items-start gap-x-5">
    <NuxtLink
      :to="link"
      class="w-96 h-56 shadow-md shadow-black rounded-xl hover:scale-105 transition-all duration-200 ease-in-out"
    >
      <img
        :src="song.image"
        class="w-full rounded-xl h-full object-cover object-top"
      />
    </NuxtLink>
    <div class="top-[-50px] right-[100px] w-[670px] flex flex-col gap-y-5">
      <NuxtLink :to="link" class="text-3xl font-bold text-primary">
        {{ song.name }}
      </NuxtLink>
      <p class="text-lg text-black line-clamp-4">
        {{ song.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  link: String,
  song: Object,
});
</script>
