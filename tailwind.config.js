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
        acid: "#ffe602",
        cyan: "#34d5ff",
      },
      boxShadow: {
        brutal: "8px 8px 0 0 currentColor",
        brutalSm: "4px 4px 0 0 currentColor",
        glass: "0 18px 60px rgba(17, 17, 17, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.42)",
        glow: "0 18px 60px rgba(52, 213, 255, 0.14), 0 8px 30px rgba(255, 59, 59, 0.18)",
      },
    },
  },
  plugins: [],
};
