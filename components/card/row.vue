<template>
  <div class="flex justify-between m-10">
    <div class="flex">
      <div class="text-3xl font-bold text-primary mt-12 pr-10">
        {{ number }}
      </div>
      <div class="w-[200px] h-[150px] shadow-md shadow-black rounded-[10px]">
        <img
          :src="image"
          class="w-full rounded-[10px] h-full object-cover object-center"
        />
      </div>

      <div class="top-[-50px] right-[100px] w-[700px] pl-10">
        <p class="text-3xl font-bold mb-[8px] text-primary">{{ title }}</p>
        <p class="text-lg text-black line-clamp-3">{{ des }}</p>
      </div>
    </div>
    <div class="mt-12 text-3xl">
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
});
</script>
