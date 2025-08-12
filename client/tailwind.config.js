/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-links': '#222D56',
        'btn-back': '#7c78b3',
        'title' : '#33526d',
        'ourteam' : '#ffba08',
        'content' : '#232e55',
        'banner' : '#faa307' ,
        'h1-banner': '#f8b732',
        'cc': '#33526d;',
        'btn': '#7c78b3'
        
      },
      fontFamily: {
        'oswald': ['Oswald'],
        'roboto': ['Roboto'],
        'anton' : ['Anton'] ,
      },
      letterSpacing: {
        'nm': '0.3em'
      },
      width: {
        '450': '28.125rem'
      }
    },
  },
  plugins: [],
  base: './',
}
