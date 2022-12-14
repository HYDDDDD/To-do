/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0 0 10px 1000px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
