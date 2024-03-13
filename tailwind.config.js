/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'headerBgTop':'#0F172A',
        'headerBgBottom':"#05080F",
        'viewAllLeft':"#445265",
        'viewAllRight':'#040406',
        'guideSectionBg':"#F9FAFB"
         // Replace with your desired color code
      },
    },
  },
  plugins: [],
};
