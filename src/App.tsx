import React from "react";

import "./App.css";
import Programs from "./ui/components/Programs";
import Visual from "./ui/components/Visual";
import Notice from "./ui/components/Notice";
import Media from "./ui/components/Media";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./ui/components/Layout";
import { AllData } from "./data/data";
import Links from "./ui/components/Links";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Visual data={AllData[0].visual[0]} />
        <Notice data={AllData[0]} />
        <Programs data={AllData[0]} />
        <Links data={AllData[0].links} />
        <Media data={AllData[0]} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
