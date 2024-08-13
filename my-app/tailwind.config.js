/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lemon: ["lemon"],
      league: ['"League Spartan"'],
    },
    screens: {
      // note that some people use devices as small as 320px.
      sm: "375px",
      md: "412px",
      lg: "768px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
