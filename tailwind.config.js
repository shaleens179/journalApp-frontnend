/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Enable class-based dark mode
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo
        accent: "#f472b6",  // Pink
        dark: "#1e293b",    // Slate
      },
    },
  },
  plugins: [],
}


