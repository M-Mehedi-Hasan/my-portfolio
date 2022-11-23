/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        greatVibes: 'Great Vibes'
      },
    },
  },
  plugins: [],
}