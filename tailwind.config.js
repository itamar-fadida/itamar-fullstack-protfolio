/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo-based blue gradient palette
        brand: {
          50: '#E6F5FF',
          100: '#CCE9FF',
          200: '#99D4FF',
          300: '#66BEFF',
          400: '#3AA6FF',  // Light gradient start
          500: '#0C65FF',  // Dark gradient end
          600: '#0A54D6',
          700: '#0843AD',
          800: '#063284',
          900: '#04215B',
        },
        // Neutral blacks/grays for minimalist design
        dark: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#212529',
          900: '#0A0A0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
