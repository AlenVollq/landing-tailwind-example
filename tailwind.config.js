/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "dark-background": "var(--dark)",
        "dark-gray-1": "var(--dark-1)",
        "dark-gray-2": "var(--dark-2)",
        "light-background": "var(--light)",
        "light-gray": "var(--light-gray)",
        blue: "var(--blue)",
        pink: "var(--pink)",
        accent: "var(--accent)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
        "double-gradient-light": "var(--gradient-light)",
        "double-gradient-dark": "var(--gradient-dark)",
      },
    },
  },
};
