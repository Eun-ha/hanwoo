/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { floatUpDown, rotate } from "../../styles/animations";

const LinkCharacters = () => {
  const characters = [
    {
      name: "character01",
      width: 105,
      height: 150,
      left: 17,
      right: "inherit",
      top: "inherit",
      bottom: 5,

      duration: 3,
      display: true,
    },
    {
      name: "character02",
      width: 128,
      height: 82,
      left: 11,
      right: "inherit",
      top: 11.3,
      bottom: "inherit",
      duration: "none",
      display: true,
    },
    {
      name: "character03",
      width: 107,
      height: 113,
      left: 63,
      right: "inherit",
      top: 20,
      bottom: "inherit",
      duration: 2,
      display: true,
    },
    {
      name: "character04",
      width: 38,
      height: 82,
      left: 50,
      right: "inherit",
      top: "inherit",
      bottom: 10,
      duration: 1,
      display: true,
    },
    {
      name: "character05",
      width: 69,
      height: 50,
      left: 30,
      right: "inherit",
      top: 20,
      bottom: "inherit",
      duration: 1.5,
      display: false,
    },
    {
      name: "character06",
      width: 137,
      height: 116,
      left: 2.6,
      right: "inherit",
      top: 50,
      bottom: "inherit",
      duration: "none",
      display: false,
    },
    {
      name: "character07",
      width: 99,
      height: 71,
      left: "inherit",
      right: 19,
      top: "inherit",
      bottom: 20,
      duration: "none",
      display: false,
    },
    {
      name: "character08",
      width: 136,
      height: 124,
      left: "inherit",
      right: 3,
      top: 50,
      bottom: "inherit",
      duration: "none",
      display: false,
    },
  ];

  const theme = useTheme();

  const characterStyle = ({
    name,
    width,
    height,
    left,
    right,
    top,
    bottom,
    duration,
    display,
  }: {
    name: string;
    width: number | string;
    height: number | string;
    left: number | string;
    right: number | string;
    top: number | string;
    bottom: number | string;
    duration: number | string;
    display: boolean;
  }) => css`
    display: ${display === true ? "block" : "none"};
    position: absolute;
    left: ${left}%;
    right: ${right}%;
    top: ${top}%;
    bottom: ${bottom}%;
    width: ${width}px;
    height: ${height}px;
    background: url("/images/links/${name}.svg");
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    animation: ${duration === "none"
        ? "none"
        : !["character04"].includes(name)
        ? rotate
        : floatUpDown}
      ${duration}s linear infinite;

    @media (min-width: ${theme.breakpoints.tablet}) {
      //width: ${typeof width === "number" ? `${width}px` : width};
      //height: ${typeof height === "number" ? `${height}px` : height};
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: block;
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
