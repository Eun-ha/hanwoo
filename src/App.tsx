import React from "react";

import "./App.css";
import Programs from "./components/Programs";
import Visual from "./components/Visual";
import Notice from "./components/Notice";
import Link from "./components/Link";
import Media from "./components/Media";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Visual />
      <Notice />
      <Programs />
      <Link />
      <Media />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
