/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#07090c",
        panel: "#10141a",
        line: "#1e2630",
        mist: "#e7e4dc",
        steel: "#8b95a1",
        petrol: "#3db8e8",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(61, 184, 232, 0.35)",
      },
    },
  },
  plugins: [],
};
