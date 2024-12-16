import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color from CSS variable
        foreground: "var(--foreground)", // Custom foreground color from CSS variable
        // Adding predefined colors for more control
        primary: "#4168B1", // Example: Primary brand color (Azure Blue)
        secondary: "#17345C", // Example: Dark Blue
        accent: "#6DCFF6", // Example: Accent color (Orbit Blue)
        light: "#F8F9FA", // Example: Light background color
        danger: "#FF5A5A", // Optional: Danger color for error states
        success: "#4CAF50", // Optional: Success color for success states
      },
      spacing: {
        18: "4.5rem", // Custom spacing
        36: "9rem",
        72: "18rem", // Large spacing for wide elements
      },
      boxShadow: {
        light: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow for subtle depth
        medium: "0 4px 6px rgba(0, 0, 0, 0.2)", // Medium shadow
        heavy: "0 10px 15px rgba(0, 0, 0, 0.3)", // Strong shadow for important elements
      },
      opacity: {
        85: "0.85", // Custom opacity for lighter transparency
        90: "0.9", // Custom opacity for slightly transparent elements
      },
      // Extend breakpoints for responsive design
      screens: {
        sm: "640px", // Small screens (mobile)
        md: "768px", // Medium screens (tablet)
        lg: "1024px", // Large screens (desktop)
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // Extra extra large screens
      },
    },
  },
  darkMode: "class", // Enable dark mode by class
  plugins: [],
} satisfies Config;
