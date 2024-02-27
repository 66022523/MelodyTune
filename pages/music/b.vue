<template>
  <Navbar />
  <div class="max-w-screen-xl pt-2 px-5 w-full sm:m-auto">
    <div class="bg-white rounded-3xl h-fit">
      <div
        class="w-full bg-cover bg-center bg-[url('/img/hard.png')] h-[425px] rounded-t-3xl"
      ></div>
      <div
        class="mt-[-200px] ml-4 flex justify-around items-center max-md:mx-5 max-md:flex-col max-sm:mt-[-200px] max-lg:mt-[-118px] max-xl:mt-[-148px]"
      >
        <div
          class="w-2/3 flex items-center justify-center max-sm:flex-col-reverse max-sm:w-full"
        >
          <div class="sm:w-1/2 sm:mb-[-100px]">
            <NuxtLink
              to="#"
              class="flex items-center gap-2 w-full flex-wrap justify-center max-sm:flex-col max-sm:mt-5"
            >
              <img
                src="/img/profile/pawarich.jpeg"
                class="size-10 rounded-full"
              />
              <span class="text-xl font-medium text-primary">
                Pawarich Inthaphan
              </span>
              <p class="text-primary text-xl font-medium">
                <i class="fa-regular fa-calendar fa-sm"></i> 19 July 2024
              </p>
            </NuxtLink>
          </div>
          <div class="sm:w-1/2 max-sm:w-full">
            <img src="/img/hard.png" class="w-full" />
          </div>
        </div>
        <div
          class="w-1/3 flex justify-end max-md:w-full max-md:justify-center h-10 mt-3"
        >
          <div
            class="flex flex-col items-center gap-3 text-white mt-[-50px] mr-10 max-md:mt-0 max-md:text-primary max-md:mr-0 max-md:flex-row-reverse"
          >
            <p class="font-semibold text-xl">ถูกใจ</p>
            <div>
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
      </div>
      <h1
        class="text-primary text-3xl font-bold mt-5 sm:ml-4 lg:text-5xl max-sm:text-center mx-1"
      >
        คนที่เจ็บใจที่สุดคือคนที่เห็นเธอโดนทำร้ายจิต
      </h1>
      <div class="flex gap-3 mx-6 my-4 pb-10 max-sm:mx-4 max-sm:flex-col">
        <main class="text-2xl w-2/3 max-md:w-full max-lg:text-lg">
          <article>
            <p class="leading-9 tracking-wide">
              หนึ่งในเรื่องราวจากเพลง “เธอชอบมันหรือชอบร้องไห้มากกว่ากัน - HardBoy” เพลงใหม่จากคณะ Hard Boy ค่าย Gene Labเจ้าของเพลง “Kiss MeBaby,ค่ำคืนนั้น” ที่คราวนี้กลับมาพร้อมเพลงเตือนสติให้คิดได้สักที“ว่าถ้าเขารักเราจริงเขาไม่ทำแบบนี้หรอก” ทุกคนส่วนใหญ่อาจจะรู้จักHard Boy จากเพลงเร็วของเขาแต่ครั้งนี้กลับมา พร้อมเพลงช้าบาดใจสำหรับคนที่เบื่อแล้วกับการที่จะปลอบใจเธอทุกครั้งที่โดนเขาทำร้ายเลยอยากบอกออกไปว่า“เธอชอบมันหรือชอบร้องไห้มากกว่า”แต่ถึงจะเป็นเพลงช้าก็ยังคงเอกลักษณ์ของความเป็น Glam Rock ของ Hard Boy ไว้เต็มเปี่ยมไม่ว่าจะเป็นการแต่งตัวไลน์ Solo พร้อม High Note จากคุณภีร์ และก็ภาพเรื่องราวใน MV ที่ค่อนข้างจะ 80'sเหมือนเดิมเลยส่วนเนื้อเพลงก็ค่อนข้างจะเตือนสติได้ดีเลยโดยเฉพาะท่อน“ถ้าชอบร้องไห้เหมือนเดิมทุกวันก็อยู่กับมันต่อไปถ้าสมองเธอนั้นทำงานได้ดีเธอจะรู้ต้องคิดยังไง”
            </p>
            <!-- <br />
            <p class="leading-9 tracking-wider">
              ทุกคนส่วนใหญ่อาจจะรู้จักHard Boy จากเพลงเร็วของเขา
              แต่ครั้งนี้กลับมา พร้อมเพลงช้าบาดใจสำหรับคนที่เบื่อ
              แล้วกับการที่จะปลอบใจเธอทุกครั้งที่โดนเขาทำร้าย
              เลยอยากบอกออกไปว่า“เธอชอบมันหรือชอบร้องไห้มากกว่า”แต่ถึงจะเป็นเพลงช้าก็ยังคงเอกลักษณ์ของความเป็น
              Glam Rock ของ Hard Boy ไว้เต็มเปี่ยมไม่ว่าจะเป็นการแต่งตัวไลน์
              Solo พร้อม High Note จากคุณภีร์ และก็ภาพเรื่องราวใน MV
              ที่ค่อนข้างจะ
              80'sเหมือนเดิมเลยส่วนเนื้อเพลงก็ค่อนข้างจะเตือนสติได้ดีเลย
              โดยเฉพาะท่อน
              “ถ้าชอบร้องไห้เหมือนเดิมทุกวันก็อยู่กับมันต่อไปถ้าสมองเธอนั้นทำงานได้ดี
              เธอจะรู้ต้องคิดยังไง”
            </p> -->
          </article>
        </main>
        <aside class="text-2xl w-1/3 max-md:w-full max-md:hidden">
          <h1
            class="text-4xl font-bold text-primary border-b-4 border-b-primary mt-2 mb-4 pb-2"
          >
            Most Popular
          </h1>
          <div class="grid gap-y-5">
            <CardSide />
            <CardSide />
            <CardSide />
          </div>
        </aside>
      </div>
      <div class="md:pb-5 mx-5">
        <h1 class="text-primary text-4xl font-semibold max-md:text-3xl">
          สามารถตามไปฟังได้ที่นี่
        </h1>
        <div
          class="flex flex-wrap justify-evenly mb-16 mt-10 max-md:gap-y-5 max-md:justify-between"
        >
          <Linksong
            text="Apple Music"
            image="/img/streaming/AppleMusic.png"
            class="max-sm:w-1/2"
            link="https://music.apple.com/th/album/%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B8%8A%E0%B8%AD%E0%B8%9A%E0%B8%A1-%E0%B8%99%E0%B8%AB%E0%B8%A3-%E0%B8%AD%E0%B8%8A%E0%B8%AD%E0%B8%9A%E0%B8%A3-%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%AB-%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%A7-%E0%B8%B2%E0%B8%81-%E0%B8%99/1707210761?i=1707210762"
          />
          <Linksong
            text="Spotify"
            image="/img/streaming/spotify.png"
            class="max-md:w-1/2"
            link="https://open.spotify.com/track/3o76rqI7ZLB9DJYxcbWa2Z?autoplay=true"
          />
          <Linksong
            text="Youtube"
            image="/img/streaming/youtube.png"
            class="max-md:w-1/2"
            link="https://youtu.be/V7DyE7qvtEg?si=0zhhuM10yrdLm1Ts"
          />
          <Linksong
            text="Youtube Music"
            image="/img/streaming/youtube_music.png "
            class="max-md:w-1/2"
            link="https://music.youtube.com/watch?v=PP7CKaBKNcg&si=16m5fLg_JQLKrUNm"
          />
        </div>
      </div>
      <aside class="text-2xl mx-5 pb-5 md:w-full md:hidden">
        <h1
          class="text-4xl font-bold text-primary border-b-4 border-b-primary mt-2 mb-4 pb-2"
        >
          Most Popular
        </h1>
        <div class="grid gap-y-5">
          <CardSide />
          <CardSide />
          <CardSide />
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
import data_comments from "~/data/comments.json";

const text_comment = ref("");
const comments_filter = ref([]);

comments_filter.value = data_comments.filter((c) => {
  return c.name && c.comments;
});

const comment = () => {
  if (text_comment.value !== "") {
    comments_filter.value.push({ name: "123", comments: text_comment.value });
    text_comment.value = "";
    saveData();
  }
};

function saveData() {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("data", JSON.stringify(comments_filter.value));
  }
}

function showComments() {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      comments_filter.value = JSON.parse(storedData);
    }
  }
}

showComments();
</script>
