<template>
  <NuxtLink
    class="card bg-primary shadow-xl xl:hover:scale-95 transition-all duration-[450] ease-out"
    :to="link"
  >
    <figure>
      <img
        :src="image"
        class="object-cover w-full xl:h-72 lg:h-64 md:h-48 max-sm:h-52"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white sm:text-2xl xl:text-3xl">
        {{ topic }}
      </h2>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  topic: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    default: "#",
  },
});
</script>
