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
    block: {
      background: "#000",
    },
  },
  breakpoints: {
    mobile: "768px",
    mini: "670px", //테블릿 미니
    tablet: "1024px",
    desktop: "1280px",
    wide: "1536px",
  },
};

export default theme;

export type ThemeType = typeof theme;
