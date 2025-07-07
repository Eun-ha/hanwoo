/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Container() {
  const styles = css`
    color: red;
    font-size: 20px;
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
  `;
  return <div css={styles}>Container</div>;
}
