<template>
  <Navbar />
  <div class="max-w-screen-xl pt-2 px-5 w-full sm:m-auto">
    <div class="bg-white rounded-3xl h-fit">
      <!-- bg -->
      <div
        class="relative w-full bg-cover bg-center h-[425px] rounded-t-3xl"
        :style="{ backgroundImage: 'url(' + id_filter[0].image + ')' }"
      >
        <div
          class="absolute bottom-5 right-10 flex-col items-center gap-y-3 hidden md:flex"
        >
          <p class="font-semibold text-xl text-white text-center">ถูกใจ</p>
          <label class="swap w-fit text-white">
            <input type="checkbox" />
            <div class="swap-on">
              <i class="fa-solid fa-heart fa-2xl"></i>
            </div>
            <div class="swap-off">
              <i class="fa-regular fa-heart fa-2xl"></i>
            </div>
          </label>
        </div>
      </div>
      <!-- top -->
      <div class="flex flex-col justify-stretch items-start mb-8 md:flex-row">
        <div class="w-full mb-8 order-2 md:order-first md:mb-0">
          <div
            class="flex px-1 pt-2 flex-wrap justify-center items-center gap-2 w-full text-primary text-xl font-medium max-sm:flex-col max-sm:mt-5"
          >
            <NuxtLink
              :to="`/author/${author_data.first_name}`"
              class="flex items-center text-center gap-2 max-lg:flex-col"
            >
              <img :src="author_data.image" class="size-10 rounded-full" />
              {{ author_data.first_name }} {{ author_data.last_name }}
            </NuxtLink>
            <p>
              <i class="fa-regular fa-calendar fa-sm"></i>
              {{ id_filter[0].date }}
            </p>
          </div>
        </div>
        <div class="w-full order-first md:order-2">
          <div class="avatar flex justify-center mx-auto relative mt-[-40%]">
            <div class="w-72 sm:h-[350px] md:w-96 rounded-badge shadow-2xl">
              <img :src="id_filter[0].image" />
            </div>
          </div>
        </div>
        <div class="w-full order-last">
          <div
            class="flex flex-row-reverse justify-center gap-3 text-primary md:hidden"
          >
            <p class="font-semibold text-xl">ถูกใจ</p>
            <label class="swap w-fit">
              <input type="checkbox" />
              <div class="swap-on">
                <i class="fa-solid fa-heart fa-2xl"></i>
              </div>
              <div class="swap-off">
                <i class="fa-regular fa-heart fa-2xl"></i>
              </div>
            </label>
          </div>
        </div>
      </div>
      <!-- topic -->
      <h1
        class="text-primary text-3xl font-bold mt-5 sm:ml-4 lg:text-5xl max-sm:text-center mx-1"
      >
        {{ id_filter[0].topic }}
      </h1>
      <!-- main -->
      <div class="flex gap-3 mx-6 my-4 pb-10 max-sm:mx-4 max-sm:flex-col">
        <main class="text-2xl w-2/3 max-md:w-full max-lg:text-lg">
          <article>
            <p class="leading-9 tracking-wide opacity-80">
              {{ id_filter[0].description }}
            </p>
          </article>
        </main>
        <aside class="text-2xl w-1/3 max-md:w-full max-md:hidden">
          <h1
            class="text-4xl font-bold text-primary border-b-4 border-b-primary mt-2 mb-4 pb-2"
          >
            Most Popular
          </h1>
          <div class="grid gap-y-5">
            <CardGenres_side
              v-for="index in 3"
              :key="index"
              :genres="genres[index - 1]"
            />
          </div>
        </aside>
      </div>
      <!-- link -->
      <div class="md:pb-5 mx-5">
        <h1 class="text-primary text-4xl font-semibold max-md:text-3xl">
          สามารถตามไปฟังได้ที่นี่
        </h1>
        <div
          class="flex flex-wrap justify-evenly mb-16 mt-10 max-md:gap-y-5 max-md:justify-between"
        >
          <Linksong
            v-if="
              id_filter[0].Apple_Music !== undefined &&
              id_filter[0].Apple_Music !== ''
            "
            text="Apple Music"
            image="/img/streaming/AppleMusic.png"
            class="max-sm:w-1/2"
            :link="id_filter[0].Apple_Music"
          />
          <Linksong
            v-if="
              id_filter[0].spotify !== undefined && id_filter[0].spotify !== ''
            "
            text="Spotify"
            image="/img/streaming/spotify.png"
            class="max-md:w-1/2"
            :link="id_filter[0].spotify"
          />
          <Linksong
            v-if="
              id_filter[0].Youtube !== undefined && id_filter[0].Youtube !== ''
            "
            text="Youtube"
            image="/img/streaming/youtube.png"
            class="max-md:w-1/2"
            :link="id_filter[0].Youtube"
          />
          <Linksong
            v-if="
              id_filter[0].Youtube_Music !== undefined &&
              id_filter[0].Youtube_Music !== ''
            "
            text="Youtube Music"
            image="/img/streaming/youtube_music.png "
            class="max-md:w-1/2"
            :link="id_filter[0].Youtube_Music"
          />
        </div>
      </div>
      <!-- cardSide on mobile -->
      <aside class="text-2xl mx-5 pb-5 md:w-full md:hidden">
        <h1
          class="text-4xl font-bold text-primary border-b-4 border-b-primary mt-2 mb-4 pb-2"
        >
          Most Popular
        </h1>
        <div class="grid gap-y-5">
          <CardGenres_side
            v-for="index in 3"
            :key="index"
            :genres="genres[index - 1]"
          />
        </div>
      </aside>
    </div>
  </div>
  <!-- comment -->
  <div class="bg-primary mt-10 pb-10 h-fit">
    <div class="mx-40 pt-6 max-lg:mx-5 max-xl:mx-6">
      <h1 class="font-bold text-white text-4xl">COMMENT</h1>
      <div class="mt-12 grid gap-y-10">
        <!-- me -->
        <div class="flex gap-5 items-center">
          <div>
            <i class="fa-solid fa-user fa-2xl text-white"></i>
          </div>
          <input
            v-model="text_comment"
            type="text"
            placeholder="แสดงความคิดเห็น"
            class="type-comment w-11/12 h-10 bg-transparent outline-none text-white border-b-2 border-[#7e8081]"
          />
          <SendHorizontal @click="comment" class="text-white" />
        </div>
        <!-- other -->
        <Comment
          v-for="index in comments_filter.length"
          :key="index"
          :name="comments_filter[index - 1].name"
          :body="comments_filter[index - 1].comments"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SendHorizontal } from "lucide-vue-next";
import data_song from "~/data/songs.json";
import data_comments from "~/data/comments.json";
import genres from "~/data/genres.json";
import author from "~/data/author.json";

const route = useRoute();
const song_id = route.params.id;
const id_filter = data_song.filter((s) => s.id == song_id);
const author_data = author.find((a) => a.id == id_filter[0].id_author);
console.log(author_data.first_name);

// comment
const text_comment = ref("");
const comments_filter = ref([]);

comments_filter.value = data_comments.filter((c) => {
  if (c.song_id == song_id) {
    return c.name && c.comments;
  }
});

const comment = () => {
  if (text_comment.value !== "") {
    comments_filter.value.push({
      name: "Pxngnxng",
      comments: text_comment.value,
    });
    text_comment.value = "";
  }
};
</script>
