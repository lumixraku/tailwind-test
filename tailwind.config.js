/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,scss}", // 添加 scss
  ],
  theme: {
    extend: {
      colors: {
        "fill-list-active": "var(--fill-list-active)",
        "bg-selection": "var(--bg-selection)",
        "content-on-tag": "var(--content-on-tag)",
        "bg-body": "var(--bg-body)",
      },
      backgroundColor: {
        "my-custom-bg": "green", // Use hardcoded color for testing
      }
    },
  },
  safelist: ["bg-my-custom-bg", "bg-purple-500"], // Updated safelist
  plugins: [],
};
