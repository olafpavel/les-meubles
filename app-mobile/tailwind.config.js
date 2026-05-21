/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        accent: "#E94E1B",
        success: "#1B5E3F",
        background: "#FAFAF7",
        "text-primary": "#1A1A1A",
        "text-secondary": "#6B7280",
        border: "#E5E7EB",
        "accent-light": "#FEF0EB",
        "success-light": "#ECFDF5",
        "card-bg": "#FFFFFF",
      },
      fontFamily: {
        sans: ["System"],
      },
    },
  },
  plugins: [],
};
