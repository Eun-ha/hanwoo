/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

export default function Visual() {
  const theme = useTheme();
  const styles = css`
    color: red;
    font-size: 20px;
    background-color: lightblue;
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background: ${theme.colors.secondary};
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
      background: ${theme.colors.secondary};
    }
  `;
  return <div css={styles}>Visual</div>;
}
