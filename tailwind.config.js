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
        'primary': ['"CreatoDisplay-Black"']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}