<template>
  <div>
    <div class="p-10 max-sm:p-5">
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
          type="text"
          class="bg-white text-primary font-medium outline-none input-md w-1/2 rounded-full drop-shadow-lg max-sm:w-full"
          placeholder="&#xF002;"
          style="font-family: kanit, FontAwesome; font-size: 20px"
        />
        <h1 class="text-2xl font-bold text-primary sm:text-3xl">Recently</h1>
        <!-- Hashtag -->
        <div class="flex gap-4 max-sm:gap-2">
          <hashtag text="2024" />
          <hashtag text="K-pop" />
        </div>
        <!-- Songs -->
        <div class="flex gap-4 max-sm:grid grid-cols-2">
          <CardSong class="w-1/3 max-sm:w-full" :songs="song[3]" />
        </div>
        <h1 class="text-2xl font-bold text-primary sm:text-3xl">Hot</h1>
        <!-- Hashtag -->
        <div class="flex gap-4 max-sm:gap-2">
          <hashtag text="T-pop" />
          <hashtag text="เพลงไทย" />
          <hashtag text="ฟ้ารักพ่อ" />
        </div>
        <!-- Songs -->
        <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
          <CardSong
            class="w-full"
            v-for="index in 3"
            :key="index"
            :songs="song[index - 1]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data_song from "~/data/songs.json";

const song = ref(data_song);
</script>
