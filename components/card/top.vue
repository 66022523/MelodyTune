<template>
  <div class="card w-full lg:card-side">
    <NuxtLink
      class="relative lg:w-5/12 bg-cover bg-center shadow-[inset_0px_-98px_89px_0px_#000000] rounded-[50px] xl:h-[400px] lg:h-80 md:h-[570px] max-sm:h-80"
      :style="`background-image: url('${song.image}');`"
      :to="`/music/${song.id}`"
    >
      <div
        class="absolute inset-x-0 bottom-3 text-white font-semibold text-center max-sm:text-xl xl:text-2xl max-lg:bottom-4 max-sm:bottom-[10px] md:text-4xl lg:text-xl"
      >
        {{ song.name }}
      </div>
    </NuxtLink>
    <div class="card-body lg:w-7/12">
      <NuxtLink
        class="card-title text-4xl xl:text-5xl"
        :to="`/music/${song.id}`"
        >{{ song.topic }}</NuxtLink
      >
      <span class="line-clamp-3">{{ song.description }}</span>
      <div class="card-actions">
        <NuxtLink
          class="btn btn-primary rounded-full text-white"
          :to="`/music/${song.id}`"
        >
          Readmore
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ song: Object });
</script>
