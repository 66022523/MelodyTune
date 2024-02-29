<template>
  <NuxtLink :to="`/genres/${genres.id}`">
    <div class="flex h-40 gap-x-2 max-lg:h-32">
      <div class="w-1/2 drop-shadow-2xl shadow-black">
        <img
          :src="genres.image"
          class="object-cover object-center h-full rounded-3xl"
        />
      </div>
      <div class="w-1/2 flex flex-col justify-between">
        <p
          class="text-xl text-black font-semibold max-lg:text-base xl:hover:text-primary xl:hover:font-bold transition-all duration-75 ease-in-out"
        >
          {{ genres.name }}
        </p>
        <div class="">
          <span class="text-lg text-black max-lg:text-sm"
            ><i class="fa-regular fa-clock fa-sm"></i> {{ genres.date }}</span
          >
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  genres: Object,
});
</script>
