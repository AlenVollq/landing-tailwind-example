/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        padding: "0.625rem",
        center: true,
        screens: {
          sm: "81.25rem",
          md: "81.25rem",
          lg: "81.25rem",
          xl: "81.25rem",
          "2xl": "81.25rem",
        },
      },
      colors: {
        "dark-background": "#1F1D2B",
        "light-background": "#F2F2F2",
        black: "#222222",
        white: "#FFFFFF",
        "light-gray": "#BCBCBC",
        "dark-gray": "#333333",
        blue: "#18B2DE",
        pink: "#FB37FF",
      },
      backgroundImage: {
        gradient: "linear-gradient(94deg, #9B51E0 2.84%, #3081ED 99.18%)",
      },
      spacing: {
        sm: "0.625rem",
        md: "1.875rem",
        lg: "2.5rem",
        xl: "8.75rem",
      },
      lineHeight: {
        1: "1.375rem",
        2: "1.5rem",
        3: "2.25rem",
        4: "3.75rem",
        5: "4.5rem",
        6: "5.125rem",
      },
      fontSize: {
        1: "0.75rem",
        2: "1rem",
        3: "1.5rem",
        4: "2.5rem",
        5: "3rem",
        6: "4.5rem",
      },
      letterSpacing: {
        standard: "0.09375em",
      },
    },
  },
  plugins: [],
};
