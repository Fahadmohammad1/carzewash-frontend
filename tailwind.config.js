/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cw-primary': "#6AB4D4",
        'cw-secondary': "#0E252F",
      },
      fontFamily: {
        'cw-primary': ['CREATO'],
        'cw-medium': ['CREATO MEDIUM',],
        'cw-regular': ['CREATO REGULAR',]
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}