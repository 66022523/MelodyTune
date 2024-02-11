<template>
  <div class="grid place-items-center min-h-screen">
    <div class="flex flex-col items-center gap-5">
      <img class="w-[500px]" src="/img/Logo_with_icon.png" />
      <form class="flex flex-col w-fit add-from">
        <div>
          <h1 class="text-xl font-bold mt-3 text-primary">E-mail</h1>
          <input
            class="bg-white justify-center flex h-12 rounded-lg outline-none placeholder-primary font-medium text-primary w-96"
            type="email"
            required
            v-model="email"
          />
        </div>
        <h1
          class="text-md text-red-600 font-medium mt-1"
          v-if="email.length !== 0"
        >
          {{ errorMessageEmail }}
        </h1>
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
          <NuxtLink to="#">
            <img class="w-12 mr-2 rounded-full" src="/img/google.png"
          /></NuxtLink>
          <NuxtLink to="#">
            <img class="w-12 ml-2 rounded-full" src="/img/facebook.png"
          /></NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errorMessageEmail: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(event);
    },
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.errorMessageEmail = "";
      } else {
        this.errorMessageEmail = "อีเมลไม่ถูกต้อง";
      }
    },
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
};
</script>
