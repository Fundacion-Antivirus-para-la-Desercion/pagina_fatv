/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Paleta de color principal
        "blue-base": "#32526E", //titulos y textos
        "dark-blue": "#222D56", //Fondos azul oscuro
        "primary-yellow": "#FFBA08", //Fondos amarillo oscuro
        "primary-purple": "#7C76B5",
        "primary-mediumblue": "#708BC6",
        "primary-ice": "#DCEBF9",

        // Paletas de color complementarias
        // Azul
        "brand-blue": {
          50: "#ADD6FF",
          100: "#90C4F9",
          200: "#2C9BC7",
          300: "#06407A",
          400: "#2C395B",
        },
        //Rojo
        "brand-red": {
          50: "#FF1416",
          100: "#D00000",
          200: "#6A040F",
        },
        //Verde Azulado
        "brand-teal": {
          50: "#CCEDE8",
          100: "#83D8C8",
          200: "#81F0E7",
          300: "#28A499",
          400: "#0B8F84",
        },
        //Morado
        "brand-purple": {
          50: "#D3C3E3",
          100: "#7D88BC",
          200: "#7D77BC",
          300: "#765497",
          400: "#4D3281",
        },
        // Otros
        "blue-links": "#222D56",
        "btn-back": "#7c78b3",
        ourteam: "#ffba08",
        "h1-banner": "#f8b732",
        btn: "#7c78b3",
      },
      fontFamily: {
        impact: ["impact"],
        renogare: ["renogare"],
        myriadPro: ["myriad-pro"],
      },
      letterSpacing: {
        nm: "0.3em",
      },
      width: {
        450: "28.125rem",
      },
      animation: {
        "spin-slower": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
  base: "./",
};
