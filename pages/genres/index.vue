<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto px-5 pb-8 mt-3">
    <h1
      class="text-5xl font-bold text-primary pb-5 border-b-8 border-b-secondary border-solid"
    >
      GENRES
    </h1>
    <main
      class="flex flex-wrap gap-y-6 mt-8 pb-8 justify-stretch max-md:gap-x-2 max-md:justify-center"
    >
      <CardMusic
        v-for="g in genres"
        :key="g"
        :data="g"
        :link="`/genres/${g.id}`"
        class="w-1/3 max-lg:w-1/2 max-sm:w-full"
      />
    </main>
  </div>
</template>

<script setup>
import genres from "~/data/genres.json";
</script>
