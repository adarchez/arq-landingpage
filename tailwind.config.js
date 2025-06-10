// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827", // Gris oscuro / azul petróleo  - primary: "#4F46E5" // azul indigo principal
        secondary: "#D1A954", // Dorado suave
        light: "#f9f9f9", // Gris claro
        darkText: "#1f1f1f", // Texto gris oscuro
        background: "#FAFAFA", // fondo claro general
      },
    },
  },
  plugins: [],
};
