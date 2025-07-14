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
      marginL: -160,
      marginT: 200,
      duration: 3,
    },
    {
      name: "character02",
      mWidth: 11.25,
      mHeight: 17.74,
      width: 20,
      height: 31.54,
      marginL: -130,
      marginT: 170,
      duration: 4,
    },
    {
      name: "character03",
      mWidth: 60.09,
      mHeight: 63.79,
      width: 106.85,
      height: 113.44,
      marginL: 40,
      marginT: -460,
      duration: 2,
    },
    {
      name: "character04",
      mWidth: 21.17,
      mHeight: 46.13,
      width: 37.64,
      height: 82.03,
      marginL: 120,
      marginT: 200,
      duration: 1,
    },
    {
      name: "character05",
      mWidth: 11.29,
      mHeight: 13.19,
      width: 25.52,
      height: 29.82,
      marginL: 0,
      marginT: -410,
      duration: 2.5,
    },
    {
      name: "character06",
      mWidth: 11.25,
      mHeight: 17.74,
      width: 26.2,
      height: 41.31,
      marginL: 120,
      marginT: -390,
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
    marginL = 0,
    marginT = 0,
    duration,
  }: {
    name: string;
    mWidth: number | string;
    mHeight: number | string;
    width: number | string;
    height: number | string;
    marginL: number | string;
    marginT: number | string;
    duration: number;
  }) => css`
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: ${marginL}px;
    margin-top: ${marginT}px;
    width: ${typeof mWidth === "number" ? `${mWidth}px` : mWidth};
    height: ${typeof mHeight === "number" ? `${mHeight}px` : mHeight};
    background: url("/images/links/${name}.png");
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    animation: ${name !== "character04" ? rotate : floatUpDown} ${duration}s
      linear infinite;

    @media (min-width: ${theme.breakpoints.desktop}) {
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
