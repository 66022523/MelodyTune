<template>
  <div class="card w-full lg:card-side">
    <div class="relative rounded-3xl lg:w-11/12">
      <NuxtLink :to="song.link" class="w-fit">
        <img :src="song.img" class="w-full" />
        <div
          class="absolute inset-x-0 bottom-2 text-white font-semibold text-center text-xl xl:text-2xl"
        >
          {{ song.name_song }}
        </div>
      </NuxtLink>
    </div>
    <div class="card-body">
      <NuxtLink class="card-title text-4xl xl:text-5xl" :to="song.link">{{
        song.topic
      }}</NuxtLink>
      <span class="line-clamp-4">{{ song.description }}</span>
      <div class="card-actions">
        <button class="btn btn-primary rounded-full text-white">
          Readmore
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ song: Object });
</script>
