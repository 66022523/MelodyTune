<template>
  <div class="flex justify-between m-10 max-sm:flex-col">
    <div class="flex max-sm:flex-col max-sm:gap-5">
      <div class="text-3xl font-bold text-primary mt-12 pr-10 max-lg:hidden">
        {{ number }}
      </div>
      <NuxtLink
        :to="link"
        class="w-[200px] h-[150px] shadow-md shadow-black rounded-[10px] hover:scale-105 transition-all duration-200 ease-in-out max-xl:w-2/3 max-sm:w-full max-sm:h-52 max-lg:w-2/5 max-xl:h-60 max-lg:h-48"
      >
        <img
          :src="image"
          class="w-full rounded-[10px] h-full object-cover object-center"
        />
      </NuxtLink>
      <div class="w-[700px] pl-10 max-lg:w-full max-sm:pl-0">
        <NuxtLink
          :to="link"
          class="text-3xl font-bold mb-[8px] text-primary hover:underline decoration-primary decoration-solid decoration-2"
        >
          {{ title }}
        </NuxtLink>
        <p class="text-lg text-black line-clamp-3">{{ des }}</p>
      </div>
    </div>
    <div class="mt-12 text-3xl max-sm:mt-5">
      <label class="swap ml-3">
        <input type="checkbox" />
        <div class="swap-on">
          <div class="text-primary">
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
        <div class="swap-off">
          <div class="text-primary">
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  des: {
    type: String,
  },
  image: {
    type: String,
  },
  number: {
    type: String,
  },
  link: String,
});
</script>
