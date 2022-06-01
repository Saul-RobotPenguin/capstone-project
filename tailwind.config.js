module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      milk: "#E4E4E4",
      red: "#E1604D",
      dark_orange: "#EBA177",
      sky: "#7CC6D6",
      dark_green: "#2D6A6A",
    },
  },
  plugins: [require("daisyui")],
};
