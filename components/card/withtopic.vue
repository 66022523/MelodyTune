<template>
  <a
    class="card bg-primary shadow-xl hover:scale-95 transition-all duration-[450] ease-out"
    href="#"
  >
    <figure>
      <img :src="image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white sm:text-2xl xl:text-3xl ">
        {{ topic }}
      </h2>
    </div>
  </a>
</template>

<script setup>
defineProps({
  topic: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>
