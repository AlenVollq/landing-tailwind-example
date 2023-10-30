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
        padding: "0.625rem", //10px
        center: true,
        screens: {
          sm: "81.25rem", //1300px
          md: "81.25rem", //1300px
          lg: "81.25rem", //1300px
          xl: "81.25rem", //1300px
          "2xl": "81.25rem", //1300px
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
        accent: "#9B51E0",
      },
      backgroundImage: {
        gradient: "linear-gradient(94deg, #9B51E0 2.84%, #3081ED 99.18%)",
      },
      spacing: {
        sm: "0.625rem", //10px
        md: "1.875rem", //30px
        lg: "2.5rem", //40px
        xl: "8.75rem", //140px
        "2xl": "9.375rem", //150px
      },
      lineHeight: {
        1: "1.375rem", //22px
        2: "1.5rem", //24px
        3: "2.25rem", //36px
        4: "3.75rem", //60px
        5: "4.5rem", //72px
        6: "5.125rem", //82px
      },
      fontSize: {
        1: "0.75rem", //12px
        2: "1rem", //16px
        3: "1.5rem", //24px
        4: "2rem", //32px
        5: "2.5rem", //40px
        6: "3rem", //48px
        7: "4.5rem", //42px
      },
      letterSpacing: {
        standard: "0.09375em",
      },
    },
  },
  plugins: [],
};
