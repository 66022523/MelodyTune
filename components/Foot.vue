<template>
  <footer
    data-theme="mytheme"
    class="footer footer-center grid-cols-2 py-8 bg-primary text-base-100 max-md:grid-cols-1 gap-3"
  >
    <aside>
      <p>Copyright © 2024 MelodyTune. All rights reserved.</p>
    </aside>
    <nav class="grid grid-col gap-3">
      <h4 class="text-lg font-light">MelodyTune</h4>
      <div class="flex gap-5">
        <NuxtLink to="/"><i class="fa-brands fa-facebook fa-2xl"></i></NuxtLink>
        <NuxtLink to="/"
          ><i class="fa-brands fa-instagram fa-2xl"></i
        ></NuxtLink>
        <NuxtLink to="/"
          ><i class="fa-brands fa-x-twitter fa-2xl"></i
        ></NuxtLink>
      </div>
    </nav>
  </footer>
</template>
