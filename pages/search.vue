<template>
  <div>
    <div class="p-5 max-sm:p-5">
      <div class="grid gap-y-5">
        <div class="flex justify-between items-center">
          <img class="w-60 max-sm:w-40" src="/img/search_logo.png" />
          <button
            @click="$router.back()"
            class="btn btn-circle text-primary no-animation btn-neutral hover:text-white hover:bg-primary sm:mr-10"
          >
            <i class="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div>
        <input
          type="search"
          class="bg-white text-primary placeholder-primary font-medium outline-none input-md w-1/2 rounded-full drop-shadow-lg focus:placeholder-gray-400 max-sm:w-full"
          placeholder="&#xF002;"
          style="font-family: kanit, FontAwesome; font-size: 20px"
          v-model="searchText"
        />
        <!-- after search -->
        <div
          v-if="searchText.length !== 0"
          class="grid grid-cols-2 gap-5 max-md:grid-cols-1"
        >
          <h1
            v-if="song_search === null"
            class="text-3xl font-semibold text-primary md:text-3xl sm:text-4xl"
          >
            ไม่พบรายการที่คุณค้นหา
          </h1>
          <CardSong
            class="w-1/2 h-96 max-lg:h-60"
            v-for="song in song_search"
            :key="song"
            :songs="song"
          />
        </div>
        <!--  before search -->

        <div v-if="searchText.length == 0" class="grid gap-y-3">
          <h1 class="text-2xl font-bold text-primary sm:text-3xl">Recently</h1>
          <!-- Hashtag -->
          <div class="flex gap-4 max-sm:gap-2">
            <Hashtag v-for="index in 2" :key="index" :tags="tag[index - 1]" />
          </div>
          <!-- Songs -->
          <div class="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <CardSong class="max-sm:w-full h-96 max-lg:h-60" :songs="song[3]" />
          </div>
          <h1 class="text-2xl font-bold text-primary sm:text-3xl">Hot</h1>
          <!-- Hashtag -->
          <div class="flex gap-4 max-sm:gap-2">
            <Hashtag v-for="index in 3" :key="index" :tags="tag[index + 1]" />
          </div>
          <!-- Songs -->
          <div class="grid grid-cols-3 gap-4 max-lg:grid-cols-2">
            <CardSong
              class="w-full h-64 max-sm:h-36"
              v-for="index in 3"
              :key="index"
              :songs="song[index - 1]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data_song from "~/data/songs.json";
import hashtag from "~/data/hashtag.json";

const song = ref(data_song);
const song_search = ref(null);
const tag = ref(hashtag);
const searchText = ref("");

watch(searchText, () => {
  if (searchText.value && searchText.value.trim() !== "") {
    const song = data_song.filter((s) =>
      s.name.toLowerCase().includes(searchText.value.toLowerCase())
    );
    if (song.length !== 0) {
      song_search.value = song;
    } else if (song.length === 0) {
      song_search.value = null;
    }
  } else if (searchText.length === 0) {
    searchText = ref(null);
  }
});
</script>
