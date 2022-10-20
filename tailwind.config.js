/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: []
};
