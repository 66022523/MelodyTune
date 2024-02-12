<template>
  <div class="h-screen grid place-items-center">
    <div>
      <img class="w-96 mx-3" src="/img/Logo_with_icon.png" />
      <form>
        <div
          class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
        >
          <div>
            <i class="fa-solid fa-user fa-xl ml-2"></i>
          </div>
          <input
            class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
            type="text"
            placeholder="USER NAME"
            required
          />
        </div>

        <div
          class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
        >
          <div>
            <i class="fa-solid fa-envelope fa-xl ml-2"></i>
          </div>
          <input
            class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
            type="text"
            placeholder="E-MAIL"
            required
            v-model="email"
          />
        </div>
        <span
          class="text-md text-red-600 font-medium mt-1"
          v-if="email.length !== 0"
        >
          {{ errorMessageEmail }}
        </span>

        <div
          class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
        >
          <div>
            <i class="fa-solid fa-lock fa-lg ml-3"></i>
          </div>
          <input
            class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
            type="password"
            placeholder="PASSWORD"
            required
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
        <p
          class="text-md text-red-600 font-medium mt-1"
          v-if="password.length !== 0"
        >
          {{ errorMessagePasswordUpper }}
        </p>
        <p
          class="text-md text-red-600 font-medium mt-1"
          v-if="password.length !== 0"
        >
          {{ errorMessagePasswordLower }}
        </p>
        <p
          class="text-md text-red-600 font-medium mt-1"
          v-if="password.length !== 0"
        >
          {{ errorMessagePasswordNumber }}
        </p>
        <p
          class="text-md text-red-600 font-medium mt-1"
          v-if="password.length !== 0"
        >
          {{ errorMessagePasswordSpecial }}
        </p>

        <div
          class="flex justify-center items-center gap-x-3 bg-white mt-5 rounded-lg"
        >
          <div>
            <i class="fa-solid fa-key fa-lg ml-3"></i>
          </div>
          <input
            class="bg-white justify-center flex h-12 w-full rounded-lg outline-none ml-1"
            type="password"
            placeholder="CONFIRM PASSWORD"
            required
            v-model="confirmPassword"
          />
        </div>
        <span
          class="text-md text-red-600 font-medium mt-1"
          v-if="confirmPassword.length !== 0"
        >
          {{ errorMessageConfirm }}
        </span>

        <div class="justify-center flex">
          <button
            type="submit"
            class="btn btn-primary text-2xl rounded-full w-64 text-white mt-5"
          >
            Sign Up
          </button>
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
      errorMessagePasswordUpper: "",
      errorMessagePasswordLower: "",
      errorMessagePasswordNumber: "",
      errorMessagePasswordSpecial: "",
      errorMessagePasswordEnglish: "",
      confirmPassword: "",
      errorMessageConfirm: "",
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
      const containsUppercase = /[A-Z]/.test(password);
      const containsLowercase = /[a-z]/.test(password);
      const containsNumber = /[0-9]/.test(password);
      const containsSpecial = /[#?!@$%^&*-]/.test(password);
      const isEnglish = /^[A-Za-z0-9#?!@$%^&*-]+$/.test(password);

      this.errorMessagePasswordUpper = "";
      this.errorMessagePasswordLower = "";
      this.errorMessagePasswordNumber = "";
      this.errorMessagePasswordSpecial = "";

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
        if (!containsUppercase) {
          this.errorMessagePasswordUpper = "อักษรตัวใหญ่อย่างน้อย 1 ตัว [A-Z]";
        }
        if (!containsLowercase) {
          this.errorMessagePasswordLower =
            "อักษรตัวเล็กอย่างน้อยหนึ่งตัว [a-z]";
        }
        if (!containsNumber) {
          this.errorMessagePasswordNumber = "ตัวเลขอย่างน้อย 1 ตัว [0-9]";
        }
        if (!containsSpecial) {
          this.errorMessagePasswordSpecial =
            "อักษรพิเศษอย่างน้อย 1 ตัว [#?!@$%^&*-]";
        }
      }
    },
    validateConfirmPassword(confirmPassword, password) {
      if (confirmPassword !== password) {
        this.errorMessageConfirm = "รหัสผ่านไม่ตรงกัน";
      } else {
        this.errorMessageConfirm = "";
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
      this.validateConfirmPassword(this.confirmPassword, value);
    },
    confirmPassword(value) {
      this.confirmPassword = value;
      this.validateConfirmPassword(value, this.password);
    },
  },
};
</script>
