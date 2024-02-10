<template>
  <div class="grid place-items-center h-screen">
    <div class="flex flex-col items-center gap-5">
      <img class="w-[500px]" src="/img/Logo_with_icon.png" />
      <div class="flex flex-col w-fit">
        <div>
          <h1 class="text-xl font-bold mt-3 text-primary">E-mail</h1>
          <input
            class="bg-white justify-center flex h-12 rounded-lg outline-none placeholder-primary font-medium text-primary w-96"
            type="email"
          />
        </div>
        <div class="mb-3">
          <h1 class="text-lg font-bold mt-3 text-primary">Password</h1>
          <input
            class="bg-white h-12 w-96 rounded-lg outline-none text-primary"
            type="password"
          />
        </div>
        <div class="flex justify-end text-md font-bold text-primary">
          <NuxtLink to="/signup">Sign Up</NuxtLink>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="btn btn-primary text-2xl rounded-full w-32 text-white"
          >
            Sign In
          </button>
        </div>
        <img class="mx-auto mt-3 w-44" src="/img/or.png" />
        <div class="justify-center flex">
          <NuxtLink to="https://www.gmail.com/" target="_blank">
            <img class="w-12 mr-2 rounded-full" src="/img/google.png"
          /></NuxtLink>
          <NuxtLink to="https://www.facebook.com/" target="_blank">
            <img class="w-12 ml-2 rounded-full" src="/img/facebook.png"
          /></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
