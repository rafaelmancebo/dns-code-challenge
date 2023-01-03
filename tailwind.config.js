/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { sans: ["Inter, sans-serif"] },
    extend: {
      colors: {
        "txt-dark": "#222542",
        "txt-light": "#686A7E",
        "bg-dark": "#203B3C",
        "bg-light": "#EDF2EA",
        "bg-x-light": "#EDF2EA",
      },
    },
  },
  plugins: [],
};
