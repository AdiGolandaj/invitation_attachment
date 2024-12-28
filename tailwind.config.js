/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '15': '90px',
        '17': '100px'
      },
      colors : {
        'lblu': '#D4EBF8',
        'dblu':'#1F509A',
        'Dblu':'#0A3981',
        'ora':'#E38E49',
      },
      fontSize: {
        'custom-xs': '12.25px',
        'custom-4.5xl': '40px',
        'custom-5.5xl': '80px'
      }
    },
  },
  plugins: [],
}