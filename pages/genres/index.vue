<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto px-5 mt-2">
    <h1
      class="text-5xl font-bold text-primary pb-5 border-b-8 border-b-secondary border-solid"
    >
      GENRES
    </h1>
    <main
      class="flex flex-wrap gap-y-6 mt-8 pb-8 justify-stretch max-md:gap-x-2 max-md:justify-center"
    >
      <CardMusic
        v-for="(genres, index) in paginatedData"
        :key="index"
        :data="genres"
        :link="`/genres/${genres.id}`"
        class="w-1/3 max-lg:w-1/2 max-sm:w-full"
      />
    </main>
    <div class="flex justify-center py-5">
      <div class="join">
        <button
          v-for="index in Math.ceil(genres.length / limit)"
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
import genres from "~/data/genres.json";

const limit = ref(10);
const active = ref(1);

const changePage = (index) => {
  active.value = index;
  window.scrollTo(0, 0);
};

const paginatedData = computed(() => {
  const start = (active.value - 1) * limit.value;
  const end = start + limit.value;
  return genres.slice(start, end);
});
</script>
