import React from "react";

import "./App.css";
import Programs from "./components/Programs";
import Visual from "./components/Visual";
import Notice from "./components/Notice";
import Link from "./components/Link";
import Media from "./components/Media";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { visualData } from "./data/data";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Visual data={visualData} />
        <Notice />
        <Programs />
        <Link />
        <Media />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
