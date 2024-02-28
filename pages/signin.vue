<template>
  <div class="grid place-items-center min-h-screen">
    <div class="flex flex-col items-center gap-5">
      <img class="w-[500px] max-sm:w-80" src="/img/Logo_with_icon.png" />
      <form class="flex flex-col add-from">
        <div class="max-md:w-screen-sm max-sm:px-5">
          <h1 class="text-xl font-bold mt-3 text-primary">E-mail</h1>
          <div class="w-96 bg-white rounded-lg pl-5 max-sm:w-full">
            <input
              class="bg-white justify-center flex h-12 rounded-lg outline-none placeholder-primary font-medium text-primary w-full"
              type="email"
              required
              v-model="email"
            />
          </div>
          <p
            class="text-md text-red-600 font-medium mt-1"
            v-if="email.length !== 0"
          >
            {{ errorMessageEmail }}
          </p>
        </div>
        <div class="mb-2 max-sm:w-screen max-sm:px-5">
          <h1 class="text-lg font-bold mt-3 text-primary">Password</h1>
          <div class="w-96 bg-white rounded-lg pl-5 max-sm:w-full">
            <input
              class="bg-white h-12 w-full rounded-lg outline-none text-primary"
              type="password"
              v-model="password"
            />
          </div>
          <p
            class="text-md text-red-600 font-medium mt-1"
            v-if="password.length !== 0"
          >
            {{ errorMessagePasswordEnglish }}
          </p>
          <p
            class="text-md text-red-600 font-medium mt-1"
            v-if="password.length !== 0"
          >
            {{ errorMessagePasswordLength }}
          </p>
        </div>
        <div class="flex justify-end text-md font-bold text-primary mr-4">
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
        <img class="mx-auto my-3 w-44" src="/img/or.png" />
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
      password: "",
      errorMessagePasswordLength: "",
      errorMessagePasswordEnglish: "",
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
    validatePassword(password) {
      const isEnglish = /^[A-Za-z0-9#?!@$%^&*-]+$/.test(password);
      if (!isEnglish) {
        this.errorMessagePasswordEnglish = "กรุณาเปลี่ยนภาษาเป็น Eng";
        this.errorMessagePasswordLength = "";
      } else {
        this.errorMessagePasswordEnglish = "";
        if (password.length < 8) {
          let least = 8 - password.length;
          this.errorMessagePasswordLength = "ขาดอีก " + least + " ตัวอักษร";
        } else {
          this.errorMessagePasswordLength = "";
        }
      }
    },
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
};
</script>
