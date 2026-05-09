/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        muted: "var(--muted)",
        "risk-high": "var(--risk-high)",
        "risk-med": "var(--risk-med)",
        "risk-low": "var(--risk-low)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
