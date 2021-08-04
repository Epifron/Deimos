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
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#1AC8FF",
    }),
  },
  variants: {
    extend: { borderColor: ["active"] },
  },
  plugins: [],
};
