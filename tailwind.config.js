/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPurple: "#0B021A",
        gray: "#9B96B0",
      },
      backgroundImage: {
        starsBg: "url('./src/assets/bg-stars.png')",
      },

      fontFamily: {
        poppins: ["Poppins"],
        nunitoSans: ["Nunito Sans", "san-serif"],
        instrumentoSans: ["Instrument Sans", "sans-serif"],
        neon: ["Neon"],
      },
      animation: {
        moveHorizontal: "moveHorizontal 2s infinite",
      },
    },
  },
  plugins: [],
}
