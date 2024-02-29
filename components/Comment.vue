<template>
  <div>
    <div class="flex gap-x-3 items-center">
      <div
        class="avatar size-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-0"
      >
        <div class="rounded-full">
          <img src="/img/profile/guest.jpeg" />
        </div>
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
