/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors (soft, healthcare-friendly)
      colors: {
        primary: '#4CAF50', // Example: a calming green
        secondary: '#B2DFDB', // Example: a subtle blue-green
        neutral: '#F5F5F5', // Example: a light grey
        accent: '#FFC107', // Example: a soft yellow for highlights
        // ... add more custom colors as per docs/design/color-palette.md
      },
      // Custom typography, spacing, etc. can be extended here
    },
  },
  plugins: [],
}
