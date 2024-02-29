<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto pt-2 px-5 pb-10">
    <div class="max-w-[1200px] h-fit">
      <div
        class="bg-primary w-full h-fit rounded-3xl grid place-items-center py-10 gap-y-5 sm:min-h-80"
      >
        <h1
          class="text-white font-bold text-5xl text-center w-2/3 max-sm:text-3xl"
        >
          THE MELODYTUNE COMMUNITY'S 10 BEST SONGS OF 2024
        </h1>
        <p
          class="text-white opacity-70 font-semibold text-xl text-center w-2/3 max-sm:text-lg"
        >
          เมื่อเราพูดถึงเพลงที่ได้รับความนิยมในปี 2024
          มีเพลงที่ได้รับความนิยมและ ชื่นชอบจากชุมชุนของ Melodytune มากมาย
          นับเป็นเพลงที่ได้รับฟังอย่าง แพร่หลายและได้รับความรักจากผู้ฟังมากมาย
          นี่คือ 10 เพลงยอดนิยมของ Melodytune ในปี 2024
        </p>
      </div>
      <div
        class="grid grid-cols-2 w-full gap-y-16 gap-x-4 mt-9 max-sm:grid-cols-1"
      >
        <CardTop_song
          v-for="index in top_song.length"
          :key="index"
          :name="`#${index} ${top_song[index - 1].name} - ${
            top_song[index - 1].artist
          }`"
          :image="top_song[index - 1].image"
          :spotify="top_song[index - 1].spotify"
          :apple_music="top_song[index - 1].Apple_Music"
          :yt="top_song[index - 1].Youtube"
          :yt_music="top_song[index - 1].Youtube_Music"
          :link="`/music/${top_song[index - 1].id}`"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import data_song from "~/data/songs.json";

const p = [4, 19, 20, 11, 13, 14, 15, 16, 17, 18];
const top_song = data_song.filter((s) => p.includes(s.id));
</script>
