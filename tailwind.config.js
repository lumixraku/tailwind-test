/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fill-list-hover": "var(--fill-list-hover)",
        "fill-list-active": "var(--fill-list-active)",
        "bg-selection": "var(--bg-selection)",
        "content-on-tag": "var(--content-on-tag)",
        "bg-body": "var(--bg-body)",
      },
    },
  },
  plugins: [],
};