/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-grey": "#333333",
      },
    },
  },
  // darkMode: "class",
  plugins: [import("tw-elements-react/dist/plugin.cjs")],
};
