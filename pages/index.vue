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
        <NuxtLink class="bg-primary rounded-3xl p-10" to="/topsong">
          <div class="text-center">
            <h1 class="text-4xl text-white font-semibold mb-5 max-md:text-3xl">
              The Melodytune community’s 10 Best Songs of 2024
            </h1>
            <h2 class="text-xl text-white font-medium mb-8 opacity-70">
              เพลงที่ได้รับความนิยมในปี 2024
            </h2>
          </div>
          <div class="grid gap-6">
            <Minidata
              v-for="index in top_song.length"
              :key="index"
              :image="top_song[index - 1].image"
              :text="`#${index} ${top_song[index - 1].name} - ${
                top_song[index - 1].artist
              }`"
            />
          </div>
        </NuxtLink>
        <div class="flex flex-col gap-3">
          <CardWithtopic
            v-for="index in 3"
            :key="index"
            :topic="genres[index - 1].name"
            :image="genres[index - 1].image"
            :link="`/genres/${genres[index - 1].id}`"
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
const p = [4, 19, 20, 11, 13, 14, 15, 16, 17, 18];

const top_song = data_song.filter((s) => p.includes(s.id));
</script>
