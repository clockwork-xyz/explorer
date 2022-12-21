const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter"],
        body: ['"FK Grotesk Neue"'],
        header: ['"TT Firs Neue"'],
        sans: ['"FK Grotesk Neue"', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      dropShadow: {
        "3xl": "0 20px 20px rgba(10, 10, 10, 0.25)",
      },
      colors: {
        black: {
          100: "#0E1114",
        },
        gray: {
          100: "#979797",
          200: "#393939",
        },
      },
    },
  },
  variants: {
    typography: ["dark", "light"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin"),
  ],
};
