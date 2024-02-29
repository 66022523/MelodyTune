<template>
  <Navbar />
  <div class="min-h-screen z-1 max-w-screen-xl m-auto pt-2 px-5 pb-8">
    <div class="h-fit m-4 bg-white rounded-3xl shadow-lg pb-8">
      <!-- bg -->
      <img
        class="rounded-t-3xl w-full h-80 object-cover object-center"
        :src="author_page.bg_image"
      />
      <div class="flex justify-between items-center mt-[-1%]">
        <div class="flex items-center">
          <!-- profile -->
          <img
            class="ml-12 mr-5 size-36 object-cover object-center rounded-full mt-[-8%]"
            :src="author_page.image"
          />
          <div class="text-5xl font-bold text-primary mt-3 flex gap-x-4">
            {{ author_page.first_name }} {{ author_page.last_name }}
          </div>
        </div>
        <div class="flex mt-4 mr-12">
          <div
            class="btn bg-white border-primary btn-circle text-primary text-xl font-bold"
          >
            <i class="fa-solid fa-ellipsis fa-lg"></i>
          </div>
          <div>
            <label class="swap ml-3">
              <input type="checkbox" />
              <div class="swap-on">
                <div
                  class="btn bg-white border-primary rounded-full text-primary text-xl font-bold w-32"
                >
                  เลิกติดตาม
                </div>
              </div>
              <div class="swap-off">
                <div
                  class="btn bg-primary border-primary rounded-full text-white text-xl font-bold w-32"
                >
                  ติดตาม
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div
        v-if="author_page.introduce !== ''"
        class="bg-slate-800 h-fit w-full min-h-56 max-w-[1050px] mx-auto text-white rounded-3xl py-10 mt-5 flex justify-center"
      >
        <h1 class="text-2xl font-semibold text-white">
          {{ author_page.introduce }}
        </h1>
      </div>
      <div role="tablist" class="tabs tabs-bordered tabs-lg w-full mt-5 mx-8">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab font-semibold text-2xl mb-5"
          aria-label="บทความ"
          checked
        />
        <div role="tabpanel" class="tab-content">
          <CardNew
            v-for="index in songs.length"
            :key="index"
            :song="songs[index - 1]"
            :link="`/music/${songs[index - 1].id}`"
            class="mb-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import author from "~/data/author.json";
import data_song from "~/data/songs.json";
const route = useRoute();
const params = route.params.name;

const author_page = author.find((name) => name.first_name === params);
const songs = data_song.filter((s) => author_page.song_id.includes(s.id));
console.log(author_page);
console.log(songs);
</script>
