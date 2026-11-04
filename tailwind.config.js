/** @type {import('tailwindcss').Config} */
// Todas as cores vêm de variáveis CSS (ver src/index.css) — edite lá para trocar a paleta.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        ink: token("ink"), // fundo escuro / texto no tema claro
        paper: token("paper"), // texto no tema escuro / fundo claro
        acid: token("acid"), // acento primário (ciano neon)
        cyan: token("violet"), // acento secundário (violeta) — nome legado
        violet: token("violet"),
        neon: token("green"), // acento de status (verde)
      },
      boxShadow: {
        glass: "0 18px 60px rgb(0 0 0 / 0.14), inset 0 1px 0 rgb(255 255 255 / 0.08)",
        glow: "0 0 0 1px rgb(var(--c-acid) / 0.25), 0 10px 40px rgb(var(--c-acid) / 0.18), 0 6px 30px rgb(var(--c-violet) / 0.14)",
      },
    },
  },
  plugins: [],
};
