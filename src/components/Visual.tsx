/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { visualTypes } from "../data/dataes";

type VisualProps = {
  data: visualTypes;
};

export default function Visual(props: VisualProps) {
  const { title, date, location, slogan } = props.data;
  const theme = useTheme();
  const styles = css`
    width: 100%;
    height: 100vh;
    color: ${theme.colors.white.text};

    background-image: url("/images/pc/VISUAL.jpg");

    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    @media (max-width: ${theme.breakpoints.desktop}) {
      background: url("/images/mobile/visual.jpg");

      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  `;

  return (
    <div css={styles}>
      <h2>{title}</h2>
      <p>
        {date}
        {location}
      </p>
      <p>{slogan}</p>
    </div>
  );
}
