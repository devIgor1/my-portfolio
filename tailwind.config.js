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
        "purple-gradient":
          "url('https://www.ansubkhan.com/images/gradient.svg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        nunitoSans: ["Nunito Sans", "san-serif"],
        instrumentoSans: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
