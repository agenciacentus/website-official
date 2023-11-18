/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  daisyui: {
    themes: ["cupcake"],
  },
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  plugins: [require("daisyui")],
}