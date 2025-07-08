// components/TwinklingStars.tsx
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useMemo } from "react";

const NUM_STARS = 30;

const twinkle = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(1); }
`;

const generateStarStyle = () => {
  const size = Math.random() * 5 + 1; // 1~3px
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 2 + 1; // 2~5s
  const delay = Math.random() * 5; // 0~5s

  return css`
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: white;
    border-radius: 50%;
    top: ${top}%;
    left: ${left}%;
    animation: ${twinkle} ${duration}s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const TwinklingStars = () => {
  const stars = useMemo(
    () => Array.from({ length: NUM_STARS }, generateStarStyle),
    []
  );

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 0;
      `}
    >
      {stars.map((style, index) => (
        <div key={index} css={style} />
      ))}
    </div>
  );
};

export default TwinklingStars;
