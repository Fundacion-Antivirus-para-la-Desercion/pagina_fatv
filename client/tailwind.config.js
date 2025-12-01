/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFBA08",
        "dark-blue": "#222D56",
        "blue-base": "#32526E",
        "primary-purple": "#7C76B5",
        "blue-links": "#222D56",
        "btn-back": "#7c78b3",
        title: "#33526d",
        ourteam: "#ffba08",
        content: "#232e55",
        banner: "#faa307",
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
