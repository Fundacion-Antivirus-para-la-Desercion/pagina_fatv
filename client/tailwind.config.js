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
        "dark-yellow": "#FAA307", //Amarillo intenso
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
      // Animación para el texto desplazándose horizontalmente
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        coinSpin: {
          "0%, 100%": { transform: "rotateY(0deg) scale(1)" },
          "25%": { transform: "rotateY(180deg) scale(1.1)" },
          "50%": { transform: "rotateY(360deg) scale(1)" },
          "75%": { transform: "rotateY(180deg) scale(1.05)" },
        },
      },
      animation: {
        "spin-slower": "spin 25s linear infinite",
        scroll: "scroll linear infinite",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-up": "slideUp 0.35s ease-out forwards",
        "coin-spin": "coinSpin 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  base: "./",
};
