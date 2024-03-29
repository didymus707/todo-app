/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sil: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
