<template>
  <Navbar />
  <div class="max-w-screen-xl m-auto px-5 pb-8 mt-3">
    <h1
      class="text-5xl font-bold text-primary pb-5 border-b-8 border-b-secondary border-solid"
    >
      NewReleases
    </h1>
    <div class="flex justify-end my-3">
      <div>
        <label for="droplist" style="font-weight: bold"
          ><i class="fa-solid fa-arrow-up"></i>
          <i class="fa-solid fa-arrow-down"></i> Sort by:
        </label>
        <select id="droplist" name="droplist" class="bg-white rounded-xl p-2">
          <option value="option1">Date</option>
          <option value="option2">Rating</option>
          <option value="option3">Trending</option>
          <option value="option3">Views</option>
          <option value="option3">Name</option>
          <!-- Add more options as needed -->
        </select>
      </div>
    </div>
    <main class="bg-white h-96 rounded-3xl"></main>
  </div>
</template>
