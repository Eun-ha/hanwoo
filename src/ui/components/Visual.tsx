/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { visualTypes } from "../../data/data";
import VisualText from "../animation/VisualText";
import TwinklingStars from "../animation/TwinklingStarts";

type VisualProps = {
  data: visualTypes;
};

export default function Visual(props: VisualProps) {
  const { title, date, location } = props.data;

  const theme = useTheme();
  const styles = css`
    position: relative;
    width: 100vw;
    height: 100vh;
    color: ${theme.colors.white.text};
    text-align: center;

    background: url("/images/mobile/visual-bg.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    &::after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("/images/mobile/characters.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    h2 {
      padding-top: 102px;
      font-size: 36px;
    }
    p {
      padding-top: 20px;
      font-size: 16px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      background: url("/images/pc/visual-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;

      h2 {
        padding-top: 216px;
        font-size: 60px;
      }
      p {
        padding-top: 13px;
        font-size: 30px;
      }

      &::after {
        display: none;
        background-image: url("/images/pc/bg-1.png"), url("/images/pc/bg-0.png");
        background-repeat: no-repeat, no-repeat;
        background-position: center, center;
        background-size: cover, cover;
      }
    }
  `;

  return (
    <div css={styles}>
      <TwinklingStars />
      <h2>{title}</h2>
      <p>
        {date}
        {location}
      </p>
      <VisualText />
    </div>
  );
}
