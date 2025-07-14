/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Header() {
  const styles = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: red;
    font-size: 20px;
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
  `;
  return <header css={styles}>Header</header>;
}
