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
        'primary': '#bb86ff',
        'secondary': '#262127',
        'accent': '#d586ff',
      }
    },
    boxShadow: {
      'card' : '0 0 30px 1px rgb(0 0 0 / 0.05);'
    }
  },
  plugins: [],
}
