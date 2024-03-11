/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DA0037",
        secondary: "#444444",
        dark: "#171717",
        light: "#EDEDED",
        success: "#06992d"
      },
    },
  },
  plugins: [],
}