/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        customTilt: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(3deg) scale(1.05)' },
          '50%': { transform: 'rotate(-3deg) scale(1.1)' },
          '75%': { transform: 'rotate(3deg) scale(1.05)' },
        },
        
      },
      animation: {
        customTilt: 'customTilt 5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}