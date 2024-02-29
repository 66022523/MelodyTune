<template>
  <div class="flex items-center h-fit max-sm:flex-col max-sm:gap-5">
    <img
      class="size-40 mr-5 rounded-full object-cover max-sm:mr-0"
      :src="image"
    />
    <div
      class="bg-white w-2/3 h-fit rounded-xl px-2 flex flex-col justify-center items-center gap-y-5 min-h-32 max-sm:w-full"
    >
      <p
        class="font-semibold text-xl text-center max-lg:text-lg max-sm:text-2xl"
      >
        {{ name }}
      </p>
      <div class="flex mt-1 gap-x-5 max-lg:gap-x-2">
        <NuxtLink :to="spotify" v-if="spotify !== undefined && spotify !== ''"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
            src="/img/streaming/AppleMusic.png" /></NuxtLink
        ><NuxtLink
          :to="apple_music"
          v-if="apple_music !== undefined && apple_music !== ''"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
            src="/img/streaming/spotify.png" /></NuxtLink
        ><NuxtLink :to="yt" v-if="yt !== undefined && yt !== ''"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
            src="/img/streaming/youtube.png" /></NuxtLink
        ><NuxtLink
          :to="yt_music"
          v-if="yt_music !== undefined && yt_music !== ''"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
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
