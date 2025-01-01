/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'toLeft':{
          '0%':{
            transform: 'translate(110%)',
            zIndex: '10'
          },
          '100%':{
            transform: 'translate(0%)',
            zIndex:'10'
          }
        },
        'toRight':{
          '0%':{
            transform: 'translate(-110%)',
          },
          '100%':{
            transform: 'translate(0%)'
          }
        }
      },
      animation:{
        'toLeft':'toLeft 1s linear',
        'toRight':'toRight 1s linear'
      },
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
  plugins: [require("tailwindcss-animate")],
}