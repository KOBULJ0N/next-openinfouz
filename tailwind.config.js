/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 'media' for system preferences or 'class' for manual toggling
  theme: {
    extend: {
      // Colors for both light and dark modes
      colors: {
        primary: {
          DEFAULT: "#1DA1F2", // Primary color for light mode
          dark: "#0D74AF", // Primary color for dark mode
        },
        background: {
          DEFAULT: "#F9FAFB", // Light background
          dark: "#0f172a", // Dark background
        },
        text: {
          DEFAULT: "#111827", // Light text
          dark: "#E5E5E5", // Dark text
        },
        accent: {
          DEFAULT: "#FFC107", // Accent for highlights
          dark: "#FFA000",
        },
        border: {
          DEFAULT: "#E0E0E0", // Light border
          dark: "#303030", // Dark border
        },
      },

      // Typography
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"], // Default sans-serif fonts
        serif: ["Georgia", "serif"], // Serif fonts
        mono: ["Courier New", "monospace"], // Monospace fonts
      },
      fontSize: {
        sm: ["14px", "20px"], // Small font size with line height
        base: ["16px", "24px"], // Base font size with line height
        lg: ["18px", "28px"], // Large font size with line height
        xl: ["20px", "32px"], // Extra large font size
      },

      // Spacing Utilities
      spacing: {
        18: "4.5rem", // Custom spacing
        72: "18rem",
        84: "21rem",
      },

      // Border Radius for UI Elements
      borderRadius: {
        lg: "8px", // Larger border radius
      },
    },
  },
  plugins: [],
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{vue,js,jsx,ts,tsx}", // Include all files in src folder
  ],
};
