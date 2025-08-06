/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb', // Tailwind blue-600
          dark: '#1e3a8a',    // Tailwind blue-900
        },
      },
    },
  },
  plugins: [],
}