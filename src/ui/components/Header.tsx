/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { VeilText } from "../../styles/common";
import { useEffect, useState } from "react";
import Cnb from "./header/Cnb";
import Navigation from "./header/Navigation";
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  const theme = useTheme();
  const btnUrl = isOpen
    ? "images/header/close-button.svg"
    : isHovered
    ? "images/header/open-button-on.svg"
    : "images/header/open-button.svg";
  const logoUrl = isHovered
    ? "images/header/logo-on.svg"
    : "images/header/logo.svg";

  const styles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 5% 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: ${isHovered
      ? `${theme.colors.background}`
      : "transparent"};

    h1 {
      width: 52px;
      height: 33px;
      background: url(${logoUrl});
      background-repeat: no-repeat;
      background-position: left top;
      background-size: cover;
      ${VeilText}
    }
    button {
      width: 24px;
      height: 24px;
      background: url(${btnUrl});
      background-repeat: no-repeat;
      background-position: left top;
      background-size: cover;
      ${VeilText}
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      align-items: flex-start;
      padding: 0 5% 0;
      h1 {
        margin: 20px 0;
        width: 120px;
        height: 75px;
      }
      button {
        margin: 40px 0;
        width: 28px;
        height: 28px;
      }
    }
  `;

  return (
    <header>
      <div css={styles}>
        <h1>logo</h1>
        <Cnb
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        />
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          메뉴
        </button>
      </div>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
