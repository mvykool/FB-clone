/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        colors: {
          'custom-bg':'#EEF0F4',
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}