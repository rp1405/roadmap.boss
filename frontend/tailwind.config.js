/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        headerBgTop: "#0F172A",
        headerBgBottom: "#05080F",
        viewAllLeft: "#445265",
        viewAllRight: "#040406",
        guideSectionBg: "#F9FAFB",
        alignJustifyOverlayBg: "#1E293B",
        overlayHoverColor:'#313F53',
        // Replace with your desired color code
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
