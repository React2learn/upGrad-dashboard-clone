/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a202c',
          200: '#2d3748',
          // Add more dark theme colors as needed
        },
      },
    },
  },
  plugins: [],
}
