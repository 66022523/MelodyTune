<template>
  <NuxtLink
    :to="`/music/${songs.id}`"
    class="relative w-full hover:scale-105 transition-all duration-300 ease-out bg-cover bg-center shadow-[inset_0px_-78px_89px_0px_#000000] rounded-[50px] max-sm:shadow-[inset_0px_-48px_89px_0px_#000000]"
    :style="`background-image: url('${songs.image}');`"
  >
    <div>
      <div
        class="absolute inset-x-0 bottom-2 text-white font-semibold text-center text-lg"
      >
        {{ songs.name }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  defineProps({ songs: Object });
</script>
