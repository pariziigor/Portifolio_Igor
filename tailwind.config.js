/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#111111",
        paper: "#f4f1ea",
        acid: "#d7ff3f",
        cyan: "#34d5ff",
      },
      boxShadow: {
        brutal: "8px 8px 0 0 currentColor",
        brutalSm: "4px 4px 0 0 currentColor",
      },
    },
  },
  plugins: [],
};
