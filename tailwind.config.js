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
        stars:
          "url('https://lh3.googleusercontent.com/pw/ABLVV87TzW6WvGlPQ7r7WYZgjwBm6lGuSea7R95T4vZ5q0_Hc55clUW5tpzNccGY6f1ZWgLIUrEBwxdfMcShlrO97Jh6f3FJFjYAcgc6jgZFqt2LOXHHv5U-8tTdpaxqNhbCrEv-ex6L5zWDv0tn6TZj1lTTCGQpH-miS9aVdlSGm9QiNe7AnEpM80_zcpGVqTNt-MV4DmdzwcTZrWx-akMvKkiyImE-Y_V8tzdi1BseWNoMdVSSRrBJcd4qQuI02dYCZI0dGE6GUsmo9GyrPNzO0pD1p-YLLXfE_wywu9rlhFhg-adysolsk7JzPGMF3uVXyUNvTvJmYWBhAzkiI9_tbGI_fGXNaOHN4nw_pBETU3q9vjGzGaOw6YUBEGBuSiNYDui1pYLUI4yqr5XslgBeOXSOzftBAj7WpUkwgeVi4wF9Cns2nZwDTvP8Zk6UZEQymFEWI9ulRYRFH7m0gKa3GHtokTOQEn8QSZ6HyqSdlsLgs9mWlwS8CHJbXa0nMzDthC-soUcMcNkkku86hH9zZuD-wAZC9afvE4aXsXUjBXjRHnS3Xpi6kPj_NJdaTgYuLMvOIJp-zoXyR3itt-wqvTUhWVfxlvqi_KuEM_GbXPHViCqiOMxeAWvZRZSss1-QaZuSLwtkNS9H9L48bjwpN7td5V2A5G0c2qOUbigzEdq24Izb1uRklhT7eRALJ7wGEkCCjG6G3IBie90TsCiwCIEHhqnlkr-wSsC7r7LBbK8ui2eYjYOPLe-LpZqLADWbklZJK4Lihbl9herFECLwfLfu0IYkkVy3ZuOyI1pxts30MJFgsj3t7kA9SCCq-Ia7YjewMT-xJ-S0dPnL7MSvOoiCpF-mCqNxe9YfHDVf6U_lHdQDZcVNl0Go96ihwEeJ9x9JTuQOUB5nE7oDkO2iYOg2Ebd8VZH0KlYoF8zsMQYsceeu3XvpWjU8EQ4OUOXbhG5t8LHXzFm3HWODNBtLbe7OpsNHY48dE69OzBCIsK-gO98gnC3DpEavVP56Ce1yI62hkuN3rGvHJynK=w1920-h938-s-no-gm?authuser=0')",
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
