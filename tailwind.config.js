/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // Include shared components
    "./pages/**/*.{js,ts,jsx,tsx}", // Include Pages Router if applicable
  ],
  theme: {
    extend: {
      // Extend font families
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Default sans-serif font
        heading: ['"Poppins"', 'sans-serif'], // Optional: Add a heading font
      },
      // Extend custom colors
      colors: {
        darkBlue: "#17345C", // Orbis Dark Blue
        azureBlue: "#4168B1", // Orbis Azure Blue
        orbitBlue: "#6DCFF6", // Orbis Orbit Blue
        light: "#FFFFFF", // White
        accent: "#F8F9FA", // Light gray for background
        danger: "#FF5A5A", // Optional: Add a danger (error) color
        success: "#4CAF50", // Optional: Add a success color
        // Adding dark mode colors for potential future support
        darkAccent: "#212529", // Dark gray for background in dark mode
        darkLight: "#343A40", // Dark text for light mode
      },
      // Add container settings for better responsiveness
      container: {
        center: true,
        padding: "1rem",
      },
      // Extend spacing, if needed
      spacing: {
        18: "4.5rem", // Custom spacing value
        36: "9rem",
        72: "18rem", // Adding a larger spacing value for wider sections
      },
      // Add optional box shadow presets
      boxShadow: {
        light: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
        medium: "0 4px 6px rgba(0, 0, 0, 0.2)", // Medium shadow
        heavy: "0 10px 15px rgba(0, 0, 0, 0.3)", // Heavy shadow for important elements
      },
      // Extend opacity utilities for transparency effects
      opacity: {
        85: "0.85", // Custom opacity level
        90: "0.9",  // Custom opacity level
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
  darkMode: "class", // Enabling dark mode support
  plugins: [],
};
