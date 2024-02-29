<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto pt-2 px-5 pb-10">
    <div class="bg-white w-full h-fit rounded-[20px] relative pb-5 shadow-lg">
      <img
        :src="genres_filter[0].image"
        class="w-full h-[550px] rounded-[20px] object-cover shadow-lg max-lg:h-96"
      />
      <div
        class="absolute top-[410px] left-[30px] text-primary text-[68px] font-bold leading-none max-lg:top-52 max-md:top-64"
      >
        <h1 class="text-4xl max-md:text-2xl">
          {{ genres_filter[0].name }} <i class="fas fa-music text-2xl mt-1"></i>
        </h1>

        <div class="flex items-center gap-x-4">
          <div class="mt-1">
            <label class="swap w-fit">
              <input type="checkbox" />
              <div class="swap-on">
                <i class="fa-solid fa-heart fa-2xs"></i>
              </div>
              <div class="swap-off">
                <i class="fa-regular fa-heart fa-2xs"></i>
              </div>
            </label>
          </div>
          <div class="border-none cursor-pointer" @click="shareLink">
            <i class="fas fa-share fa-2xs"></i>
          </div>
          <div class="border-none cursor-pointer">
            <i class="fas fa-ellipsis-h fa-2xs"></i>
          </div>
        </div>
      </div>
      <div>
        <CardRow
          v-for="index in song_filter.length"
          :key="index"
          :number="index"
          :title="song_filter[index - 1].name"
          :des="song_filter[index - 1].description"
          :image="song_filter[index - 1].image"
          :link="`/music/${song_filter[index - 1].id}`"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import genres from "~/data/genres.json";
import data_song from "~/data/songs.json";

const route = useRoute();
const genres_id = route.params.id;
const genres_filter = genres.filter((g) => g.id == genres_id);
const song_filter = data_song.filter((s) =>
  genres_filter[0].song_id.includes(s.id)
);

const shareLink = async () => {
  const shareData = {
    url: route.fullPath,
  };

  try {
    if (!navigator || !navigator.share || !navigator.canShare)
      alert("เบราว์เซอร์ของคุณไม่รอบรับฟีเจอร์การแชร์เนื้อหา");
    else if (!navigator.canShare(shareData))
      alert(
        'ขออภัยเราไม่สามารถแชร์เนื้อหาบางอย่างได้ในขณะนี้ หากมีปัญหาใดๆ กรุณาแจ้งให้เราทราบผ่านป่ม "?"'
      );
    else {
      await navigator.share(shareData);
    }
  } catch (error) {
    alert(`เกิดข้อผิดพลาดขณะกำลังแชร์เนื้อหา:\n${error}`);
  }
};
</script>
