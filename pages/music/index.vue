<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto px-5 pb-10 mt-3 max-sm:px-2">
    <h1
      class="text-5xl font-bold text-primary pb-5 border-b-8 border-b-secondary border-solid"
    >
      MUSIC
    </h1>
    <main
      class="flex flex-wrap gap-y-6 mt-8 justify-stretch max-md:gap-x-2 max-md:justify-center"
    >
      <CardMusic
        v-for="(song, index) in paginatedData"
        :key="index"
        :data="song"
        :link="`/music/${song.id}`"
        class="w-1/3 max-lg:w-1/2 max-sm:w-full"
      />
    </main>
    <div class="flex justify-center mt-8">
      <div class="join">
        <button
          v-for="index in Math.ceil(data_song.length / limit)"
          :key="index"
          class="join-item btn btn-lg text-primary"
          :class="{ 'btn-active': active === index }"
          @click="changePage(index)"
        >
          {{ index }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import data_song from "~/data/songs.json";

const limit = ref(10);
const active = ref(1);

const changePage = (index) => {
  active.value = index
  window.scrollTo(0, 0)
}

const paginatedData = computed(() => {
  const start = (active.value - 1) * limit.value;
  const end = start + limit.value;
  return data_song.slice(start, end);
});
</script>
