<template>
  <NuxtLink
    class="group text-xl transition-all duration-300 ease-in-out"
    :to="link"
  >
    <span
      class="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2.5px] bg-no-repeat lg:group-hover:bg-[length:100%_2.5px] transition-all duration-300 ease-out"
    >
      {{ text }}
    </span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "text",
  },
  link: {
    type: String,
  },
});
</script>
