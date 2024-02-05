<template>
  <div
    :class="{
      ' fixed top-0 z-10 py-1 w-screen bg-white bg-opacity-30 transition-all duration-300 ease-in-out backdrop-blur-sm':
        header,
    }"
  >
    <div
      class="navbar text-primary font-bold max-w-screen-xl m-auto sm:px-6 xl:px-2"
    >
      <div class="navbar-start">
        <!-- Dropdown on mobile -->
        <div class="dropdown">
          <div tabindex="0" role="" class="mr-3 md:hidden">
            <i class="fa-solid fa-bars fa-xl"></i>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NuxtLink to="/music">Music</NuxtLink></li>
            <li><NuxtLink to="#">Playlist</NuxtLink></li>
            <li><NuxtLink to="#">New Releases</NuxtLink></li>
          </ul>
        </div>
        <!-- LoGo -->
        <NuxtLink to="/" class="flex flex-shrink-0 items-center">
          <img class="h-9 w-auto max-md:h-8" src="public/img/logo.png" alt="" />
        </NuxtLink>
        <!-- link on laptop -->
        <div class="hidden md:flex">
          <ul class="menu-horizontal gap-5 px-5">
            <li>
              <HoverUnderline text="Music" link="/music" />
            </li>
            <li>
              <HoverUnderline text="Playlist" link="#" />
            </li>
            <li>
              <HoverUnderline text="NewReleases" link="#" />
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-end gap-2 max-md:gap-3">
        <!-- Search -->
        <NuxtLink to="/search" class="flex gap-2">
          <div>
            <i class="fa-solid fa-magnifying-glass fa-xl"></i>
          </div>

          <span class="text-center text-xl font-bold hidden md:flex">
            Search
          </span>
        </NuxtLink>
        <!-- Profile -->
        <NuxtLink
          href="#"
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle no-animation avatar"
        >
          <div class="w-10 rounded-full">
            <img src="/img/profile.png" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const header = ref(false);

const scrollHeader = () => {
  header.value = window.scrollY >= 30;
};

onMounted(() => {
  window.addEventListener("scroll", scrollHeader);

  return () => {
    window.removeEventListener("scroll", scrollHeader);
  };
});
</script>
