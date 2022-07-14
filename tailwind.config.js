/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova']
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
