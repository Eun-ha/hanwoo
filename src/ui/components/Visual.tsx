/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { visualTypes } from "../../data/data";
import VisualText from "../animation/VisualText";
import TwinklingStars from "../animation/TwinklingStarts";
import { motion } from "framer-motion";

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
    z-index: 0;

    background: url("/images/mobile/visual-bg.png");
    background-position: center center;
    background-repeat: no-repeat;
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
      background-position: center center;
      background-repeat: no-repeat;
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

    @media (min-width: ${theme.breakpoints.mini}) {
      height: 1050px;
      background: ${theme.colors.white.text};
      h2 {
        padding-top: 216px;
        font-size: 60px;
      }
      p {
        padding-top: 13px;
        font-size: 30px;
      }
      &::after {
        background: url("/images/pc/characters.png");
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: contain;
      }
      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 90%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        background: linear-gradient(
          180deg,
          rgba(39, 27, 41, 1) 0%,
          rgba(39, 27, 41, 1) 15%,
          rgba(198, 66, 83, 1) 60%,
          rgba(255, 157, 132, 1) 100%
        );
      }
      @media (min-width: ${theme.breakpoints.tablet}) {
        &::before {
          height: 85%;
        }
      }
      @media (min-width: ${theme.breakpoints.desktop}) {
        &::before {
          height: 80%;
        }
      }
      @media (min-width: ${theme.breakpoints.wide}) {
        &::before {
          height: 75%;
        }
      }
    }
  `;

  return (
    <div css={styles}>
      <TwinklingStars />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {date}
        {location}
      </motion.p>
      <VisualText />
    </div>
  );
}
