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
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#190C5E",
          secondary: "#221D37",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        backgroundSize: {
          auto: "auto",
          cover: "cover",
          contain: "contain",
          "zoom": "150rem",
        },
      },
      "light",
      "dark",
    ],
  },
};
