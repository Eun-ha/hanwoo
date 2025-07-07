const theme = {
  colors: {
    primary: "#4f46e5",
    secondary: "#6366f1",
    background: "#f9fafb",
    text: "#111827",
    dark: {
      background: "#111827",
      text: "#f9fafb",
    },
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
  },
};

export default theme;

export type ThemeType = typeof theme;
