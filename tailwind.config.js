/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./src/**/*.{html,svelte,js,ts}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [require("daisyui")],
};
