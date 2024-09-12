/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        primary: "#3D00B7",
        // secondary: '#525f81',
        // primaryHover: '#971b1f',
        // bgPrimary: '#e01f26', //dff2f0
        textPrimary: "#565656",
        borderText: "#000000",
      },
    },
  },
  plugins: [],
};
