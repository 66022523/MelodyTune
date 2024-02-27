<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto px-5 pb-8 mt-3 max-sm:px-2">
    <h1
      class="text-5xl font-bold text-primary pb-5 border-b-8 border-b-secondary border-solid"
    >
      MUSIC
    </h1>
    <main
      class="flex flex-wrap gap-y-6 mt-8 justify-stretch max-md:gap-x-2 max-md:justify-center"
    >
      <CardMusic
        v-for="s in data_song"
        :key="s"
        :data="s"
        :link="`/music/${s.id}`"
        class="w-1/3 max-lg:w-1/2 max-sm:w-full"
      />
    </main>
  </div>
</template>

<script setup>
import data_song from "~/data/songs.json";
</script>
