/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#eeeeee',
        'background': '#141016',
        'background-g': '#120E13',
        'primary': '#bb86ff',
        'secondary': '#262127',
        'accent': '#d586ff',
      },
      screens: {
        'desktop': '1100px',
        'tablet': '750px', 
      }
    },
    boxShadow: {
      'card' : '0 0 30px 1px rgb(0 0 0 / 0.05);'
    },
  },
  plugins: [],
}
