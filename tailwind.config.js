module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#e6e6ff",
        bgalt: "#f5f5f5",
        "color-default": "#111",
        primary: "#896eff",
        secondary: "#6888df",
        link: "#0a71c5",
        medium: "#cfd8dc",
        white: "#fff",
        black: "#000",
        transparent: "rgba(0,0,0,0)",
        error: "#ef5350",
        success: "#8bc34a"
      }
    }
  },
  variants: {},
  plugins: []
}
