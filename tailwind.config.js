/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "50": "#315765",
        "100": "#040716",
      },
      white: {
        "50": "#A09FAF",
        "100": "#fff",
      },
      green: {
        "50": "#0DF3B8",
        "100": "#04936E",
      },
    },  
    fontFamily: {
      'mulish': ["'Mulish', sans-serif"],
      'questrial': ["'Questrial', sans-serif"],
      'rage': ["rage"]
    }
  },
  plugins: [],
}
