/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        my_inner: "inset 0px -23px 32px 5px rgba(0, 0, 0, 0.59)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#190C5E",
          secondary: "#221D37",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
        backgroundSize: {
          auto: "auto",
          cover: "cover",
          contain: "contain",
          zoom: "150rem",
        },
      },
      "light",
      "dark",
    ],
  },
};
