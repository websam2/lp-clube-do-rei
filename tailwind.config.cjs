/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Open Sans', 'sans-serif'],
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#212121',
      'red': '#CA1517',
      'orange':'#BE1F16',
      'yellow': '#FDD015',
      'silver': '#ECECEC',
    },
    variants: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
    },
  },
    
  plugins: [require("daisyui")],
}
