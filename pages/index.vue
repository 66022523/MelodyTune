<template>
  <Navbar />
  <div class="z-1 mb-14 max-w-screen-xl m-auto pt-2 px-5 max-sm:mb-6">
    <div class="flex flex-col gap-3">
      <h1 class="text-3xl font-semibold text-primary">HotHit</h1>
      <CardTop :song="song[9]" />
      <!-- <CardTop :song="top[1]" /> -->
      <h1 class="text-3xl font-bold text-primary">Recommend</h1>
      <div class="flex gap-3 max-sm:flex-wrap justify-center">
        <CardSong
          class="h-60 sm:w-1/3"
          v-for="index in 3"
          :key="index"
          :songs="song[index - 1]"
        />
      </div>
      <div class="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        <CardBoard />
        <div class="flex flex-col gap-3">
          <CardWithtopic
            v-for="index in 3"
            :key="index"
            :topic="genres[index - 1].name"
            :image="genres[index - 1].img"
            :link="genres[index - 1].link"
            class="h-1/3"
          />
        </div>
      </div>
    </div>
  </div>
  <Foot />
</template>

<script setup>
import data_song from "~/data/songs.json";
import genres from "~/data/genres.json";

const song = ref(data_song);
</script>
