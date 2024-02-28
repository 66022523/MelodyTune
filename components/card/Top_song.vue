<template>
  <div class="flex items-center max-w-[600px] h-40 w-1/2">
    <img class="w-40 h-40 mr-8 rounded-full object-cover" :src="image" />
    <div class="bg-white w-96 h-[132px] rounded-xl pt-3 pl-5 gap-10">
      <p class="font-semibold text-xl">{{ name }}</p>
      <div class="flex mt-3 gap-8">
        <NuxtLink :to="spotify" v-if="spotify !== undefined && spotify !== ''"
          ><img
            class="w-12 h-12 object-cover object-center rounded-full"
            src="/img/streaming/AppleMusic.png" /></NuxtLink
        ><NuxtLink
          :to="apple_music"
          v-if="apple_music !== undefined && apple_music !== ''"
          ><img
            class="w-12 h-12 object-cover object-center rounded-full"
            src="/img/streaming/spotify.png" /></NuxtLink
        ><NuxtLink :to="yt" v-if="yt !== undefined && yt !== ''"
          ><img
            class="w-12 h-12 object-cover object-center rounded-full"
            src="/img/streaming/youtube.png" /></NuxtLink
        ><NuxtLink
          :to="yt_music"
          v-if="yt_music !== undefined && yt_music !== ''"
          ><img
            class="w-12 h-12 object-cover object-center rounded-full"
            src="/img/streaming/youtube_music.png"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  spotify: String,
  apple_music: String,
  yt: String,
  yt_music: String,
});
</script>
