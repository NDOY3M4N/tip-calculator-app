module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono"],
      },
      colors: {
        primary: "hsl(172, 67%, 45%)",
        neutral: {
          100: "hsl(189, 41%, 97%)",
          200: "hsl(185, 41%, 84%)",
          300: "hsl(184, 14%, 56%)",
          400: "hsl(186, 14%, 43%)",
          500: "hsl(183, 100%, 15%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
