<template>
  <NuxtLink
    :to="link"
    class="grid place-items-center z-0 hover:scale-110 transition-all duration-300 hover:z-10"
  >
    <div class="h-[510px] w-[350px] rounded-3xl bg-white shadow-xl relative">
      <img
        class="rounded-t-3xl h-64 w-full object-cover object-top"
        :src="data.image"
      />
      <h1 class="text-primary font-bold text-2xl mx-5 mt-2">
        {{ data.name }}
      </h1>
      <div
        v-if="data.description !== '' && data.description !== undefined"
        class="text-lg mx-8 mt-2 text-gray-500 font-medium line-clamp-4"
      >
        {{ data.description }}
      </div>
      <div class="text-lg text-secondary mx-6 font-semibold absolute bottom-3">
        <div class="flex items-center">
          <div>
            <i class="fa-regular fa-clock mr-3" v-if="data.date"></i>
          </div>
          {{ data.date }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
defineProps({ data: Object, link: String });
</script>
