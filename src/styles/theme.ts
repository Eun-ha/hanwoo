const theme = {
  colors: {
    point: "#E54A5B",
    point2: "#8B2B36",
    text: "#333",
    subtext: "#999",
    background: "#fff",
    line: "#d4d4d4",
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
