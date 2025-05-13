/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f1219",
        secondary: "#94a3b8",
        tertiary: "#171F2A",
        "accent-1": "#10b981",
        "accent-2": "#059669",
        "accent-3": "#047857",
        "black-100": "#1e293b",
        "black-200": "#0f172a",
        "white-100": "#f8fafc",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(16, 185, 129, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, rgba(15, 18, 25, 0.9), rgba(23, 31, 42, 0.95))",
      },
    },
  },
  plugins: [],
} 