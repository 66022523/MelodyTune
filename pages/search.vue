<template>
  <div>
    <div class="h-screen max-w-screen-2xl mx-auto p-10">
      <div class="flex items-center">
        
        <img src="/img/search_logo.png" />
        <button
          @click="$router.back()"
          class="btn btn-circle no-animation btn-base-100"
        >
          <i class="fa-solid fa-xmark fa-xl text-primary"></i>
        </button>
      </div>
    </div>
  </div>
</template>
