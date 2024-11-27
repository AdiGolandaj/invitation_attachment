/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'lblu': '#D4EBF8',
        'dblu':'#1F509A',
        'Dblu':'#0A3981',
        'ora':'#E38E49',
      },
    },
  },
  plugins: [],
}