/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Notice() {
  const styles = css`
    color: red;
    font-size: 20px;
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
  `;
  return <div css={styles}>Notice</div>;
}
