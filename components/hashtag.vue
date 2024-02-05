<template>
  <button
    class="btn btn-secondary rounded-full text-white text-xl font-semibold max-sm:text-sm"
  >
    <h1>#{{ text }}</h1>
  </button>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: "text",
  },
});
</script>
