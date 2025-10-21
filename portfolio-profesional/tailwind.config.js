/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable class-based dark mode, optional
  theme: {
    // In Tailwind v4, prefer defining colors in CSS via `@theme`.
    // We still keep useful layout tokens here.
    extend: {},
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1600px",
    },
    // 0..200 * 0.25rem => 0, 0.25rem, 0.5rem, ...
    spacing: Object.fromEntries(
      Array.from({ length: 201 }, (_, i) => [i, `${i * 0.25}rem`])
    ),
  },
  plugins: [],
}