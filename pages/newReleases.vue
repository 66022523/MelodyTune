<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto px-5 pb-8 mt-3">
    <h1
      class="text-5xl font-bold text-primary pb-5 border-b-8 border-b-secondary border-solid"
    >
      NewReleases
    </h1>
    <div class="flex justify-end my-3">
      <div>
        <label for="droplist " class="text-primary font-bold"
          ><i class="fa-solid fa-arrow-up"></i>
          <i class="fa-solid fa-arrow-down"></i> Sort by:
        </label>
        <select
          id="droplist"
          name="droplist"
          class="bg-white rounded-xl p-2 text-primary font-semibold btn no-animation hover:bg-white"
        >
          <option value="option1">Date</option>
          <option value="option3">Name</option>
          <option value="option2">Rating</option>
          <option value="option3">Views</option>
          <!-- Add more options as needed -->
        </select>
      </div>
    </div>
    <main
      class="bg-white h-fit py-10 px-8 rounded-3xl grid place-items-start gap-y-8"
    >
      <CardNew
        v-for="index in 5"
        :key="index"
        :song="data_song[index - 1]"
        :link="`/music/${data_song[index - 1].id}`"
      />
    </main>
  </div>
</template>
<script setup>
import data_song from "~/data/songs.json";
</script>
