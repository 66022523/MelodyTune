<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img class="w-full" :src="img" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ topic }}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-start">
        <div>
          <i class="fa-regular fa-clock mr-3"></i>
        </div>
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: { type: String },
  topic: {
    type: String,
  },
  description: {
    type: String,
  },
  time: {
    type: String,
  },
});
</script>
