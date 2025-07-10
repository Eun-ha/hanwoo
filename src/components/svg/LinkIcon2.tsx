/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

function LinkIcon2() {
  const theme = useTheme();
  const style = css`
    width: 43px;
    height: 48px;
    path {
      fill: ${theme.colors.point};
      transition: fill 0.3s ease;
    }

    &:hover path {
      fill: ${theme.colors.white.text};
    }
  `;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 68" css={style}>
      <path
        id="signpost_24dp_FILL0_wght400_GRAD0_opsz24"
        d="M147.111-812v-13.6H130.167L120-835.8,130.167-846h16.944v-6.8H123.389v-20.4h23.722V-880h6.778v6.8h16.944L181-863l-10.167,10.2H153.889v6.8h23.722v20.4H153.889V-812Zm-16.944-47.6h37.871l3.389-3.4-3.389-3.4H130.167Zm2.8,27.2h37.871v-6.8H132.963l-3.389,3.4Zm-2.8-27.2v0Zm40.667,27.2v0Z"
        transform="translate(-120 880)"
      />
    </svg>
  );
}

export default LinkIcon2;
