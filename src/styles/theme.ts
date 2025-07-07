const theme = {
  colors: {
    point: "#E54A5B",
    text: "#333",
    subtext: "#999",
    background: "#fff",
    white: {
      text: "#fff",
    },
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
};

export default theme;

export type ThemeType = typeof theme;
