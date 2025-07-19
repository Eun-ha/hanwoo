/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { floatUpDown, rotate } from "../../styles/animations";

const LinkCharacters = () => {
  const characters = [
    {
      name: "character01",
      mWidth: 58.81,
      mHeight: 47.7,
      width: 104.573,
      height: 84.821,
      left: 5,
      right: "inherit",
      top: "inherit",
      bottom: 15,
      duration: 3,
    },
    {
      name: "character02",
      mWidth: 11.25,
      mHeight: 17.74,
      width: 20,
      height: 31.54,
      left: 9,
      right: "inherit",
      top: "inherit",
      bottom: 20,
      duration: 4,
    },
    {
      name: "character03",
      mWidth: 60.09,
      mHeight: 63.79,
      width: 106.85,
      height: 113.44,
      left: "inherit",
      right: 20,
      top: 0,
      bottom: "inherit",
      duration: 2,
    },
    {
      name: "character04",
      mWidth: 21.17,
      mHeight: 46.13,
      width: 37.64,
      height: 82.03,
      left: "inherit",
      right: 10,
      top: "inherit",
      bottom: 15,
      duration: 1,
    },
    {
      name: "character05",
      mWidth: 11.29,
      mHeight: 13.19,
      width: 25.52,
      height: 29.82,
      left: "inherit",
      right: 40,
      top: 5,
      bottom: "inherit",
      duration: 2.5,
    },
    {
      name: "character06",
      mWidth: 11.25,
      mHeight: 17.74,
      width: 26.2,
      height: 41.31,
      left: "inherit",
      right: 12,
      top: 7,
      bottom: "inherit",
      duration: 2.5,
    },
  ];

  const theme = useTheme();

  const characterStyle = ({
    name,
    mWidth,
    mHeight,
    width,
    height,
    left = "auto",
    right = "auto",
    top = "auto",
    bottom = "auto",
    duration,
  }: {
    name: string;
    mWidth: number | string;
    mHeight: number | string;
    width: number | string;
    height: number | string;
    left: number | string;
    right: number | string;
    top: number | string;
    bottom: number | string;
    duration: number;
  }) => css`
    display: block;
    position: absolute;
    left: ${left}%;
    right: ${right}%;
    top: ${top}%;
    bottom: ${bottom}%;
    width: ${typeof mWidth === "number" ? `${mWidth}px` : mWidth};
    height: ${typeof mHeight === "number" ? `${mHeight}px` : mHeight};
    background: url("/images/links/${name}.png");
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    animation: ${name !== "character04" ? rotate : floatUpDown} ${duration}s
      linear infinite;

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: ${typeof width === "number" ? `${width}px` : width};
      height: ${typeof height === "number" ? `${height}px` : height};
    }
  `;

  return (
    <>
      {characters.map((char, index) => (
        <div key={index} css={characterStyle(char)}></div>
      ))}
    </>
  );
};

export default LinkCharacters;
