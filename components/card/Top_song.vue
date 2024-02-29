<template>
  <div class="flex items-center sm:gap-x-5 h-fit max-sm:flex-col max-sm:gap-5">
    <NuxtLink :to="link">
      <img
        class="size-40 rounded-full object-cover max-lg:size-28 max-sm:size-40"
        :src="image"
      />
    </NuxtLink>
    <div
      class="bg-white w-2/3 h-fit rounded-xl px-2 flex flex-col justify-center items-center gap-y-5 min-h-32 max-sm:w-full max-sm:py-5"
    >
      <NuxtLink
        :to="link"
        class="font-semibold text-xl text-center max-lg:text-lg max-sm:text-2xl"
      >
        {{ name }}
      </NuxtLink>
      <div class="flex mt-1 gap-x-5 max-lg:gap-x-2">
        <NuxtLink
          :to="spotify"
          v-if="spotify !== undefined && spotify !== ''"
          target="_blank"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
            src="/img/streaming/AppleMusic.png" /></NuxtLink
        ><NuxtLink
          :to="apple_music"
          target="_blank"
          v-if="apple_music !== undefined && apple_music !== ''"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
            src="/img/streaming/spotify.png" /></NuxtLink
        ><NuxtLink :to="yt" v-if="yt !== undefined && yt !== ''" target="_blank"
          ><img
            class="size-12 object-cover object-center rounded-full max-lg:size-9 max-sm:size-12"
            src="/img/streaming/youtube.png" /></NuxtLink
        ><NuxtLink
          :to="yt_music"
          v-if="yt_music !== undefined && yt_music !== ''"
          target="_blank"
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
  link: String,
});
</script>
