/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { css } from "@emotion/react";

type Props = {
  children: ReactNode;
};

const styles = css`
  position: relative;
`;

export default function Layout({ children }: Props) {
  return (
    <div css={styles}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
