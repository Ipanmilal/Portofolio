/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'putararah' : 'putararah 3s linear infinite'
      },
      keyframes: {
        putararah: {
          from : { transform: 'rotate(0deg)'},
          to : {transform: 'rotate(-360deg)' }
        }
      }
    },
  },
  plugins: [],

  
}

