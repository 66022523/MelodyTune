<template>
  <div
    :class="{
      ' fixed top-0 z-50 py-1 w-screen bg-white bg-opacity-30 transition-all duration-300 ease-in-out backdrop-blur-sm':
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
            <li><NuxtLink to="/genres">Genres</NuxtLink></li>
            <li><NuxtLink to="#">New Releases</NuxtLink></li>
          </ul>
        </div>
        <!-- LoGo -->
        <NuxtLink to="/" class="flex flex-shrink-0 mb-3 max-md:mb-2">
          <img
            class="h-10 w-auto max-md:h-[29px]"
            src="/img/Logo_with_icon.png"
            alt=""
          />
        </NuxtLink>
        <!-- link on laptop -->
        <div class="hidden md:flex">
          <ul class="menu-horizontal gap-5 px-5 max-lg:px-3 max-lg:gap-2">
            <li>
              <HoverUnderline text="Music" link="/music" />
            </li>
            <li>
              <HoverUnderline text="Genres" link="/genres" />
            </li>
            <li>
              <HoverUnderline text="NewReleases" link="/" />
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-end gap-5 max-lg:gap-2">
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
          to="/signin"
          tabindex="0"
          role="button"
          class="flex flex-row items-center gap-[5px] border-2 border-primary rounded-full py-2 px-2 max-md:py-1"
        >
          <div>
            <i class="fa-solid fa-user fa-lg"></i>
          </div>
          <span class="text-xl font-bold max-md:font-semibold">Sign in</span>
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
