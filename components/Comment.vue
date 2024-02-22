<template>
  <div>
    <div class="flex gap-5 items-center">
      <div>
        <i class="fa-solid fa-user fa-2xl text-white"></i>
      </div>
      <span class="text-white font-semibold text-2xl">{{ name }}</span>
    </div>
    <div class="bg-white text-lg rounded-2xl h-fit px-4 py-5 w-[90%] ml-9 mt-5">
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "#",
  },
  body: {
    type: String,
    default: "",
  },
});
</script>
