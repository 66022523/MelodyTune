<template>
  <Navbar />
  <div class="min-h-screen z-1 max-w-screen-xl m-auto pt-2 px-5 pb-12">
    <div class="h-fit m-4 bg-white rounded-3xl shadow-lg pb-8">
      <img
        class="rounded-t-3xl w-full max-h-96 object-cover object-center max-sm:max-h-72"
        src="/img/profile/bgpisit.jpeg"
        alt=""
      />
      <div class="flex gap-x-5 px-5 max-sm:flex-col max-sm:items-center">
        <img
          class="mt-[-5%] size-36 rounded-full object-cover max-sm:size-32 max-sm:mt-[-20%]"
          src="/img/profile/guest.jpeg"
          alt=""
        />
        <h1 class="text-5xl font-bold text-primary mt-3">
          {{ user?.username }}
        </h1>
      </div>
      <div role="tablist" class="tabs tabs-bordered tabs-lg w-full mt-5 px-10">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab font-semibold text-2xl"
          aria-label="ถูกใจ"
          checked
        />
        <div role="tabpanel" class="tab-content mt-5">
          <CardNew
            v-for="index in 5"
            :key="index"
            :song="data_song[index - 1]"
            :link="`/music/${data_song[index - 1].id}`"
            class="mb-8"
          />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          class="tab font-semibold text-2xl"
          aria-label="ล่าสุด"
        />
        <div role="tabpanel" class="tab-content mt-5">
          <CardNew
            v-for="index in 5"
            :key="index"
            :song="data_song[index + 4]"
            :link="`/music/${data_song[index + 4].id}`"
            class="mb-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data_song from "~/data/songs.json";
let user;
if (process.client) {
  const session = localStorage.getItem("session");
  user = ref(JSON.parse(session));
}
</script>
