/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPurple: "#0B021A",
      },
      backgroundImage: {
        "purple-gradient":
          "url('https://www.ansubkhan.com/images/gradient.svg')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        merriweather: ["Merriweather"],
      },
    },
  },
  plugins: [],
}
