/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "hsl(190, 64%, 52%)",         // qui il colore che vuoi
          foreground: "hsl(700, 40%, 98%)",      // colore testo su accent
        },
      },
    },
  },
  plugins: [],
};
