module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#E0E0E0",
        secondary: "#d9d9d9",
        footer: "#9c9c9c",
        button: "#1AC8FF",
        input: "#EFFBFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
