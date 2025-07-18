/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { CnbData } from "../../../data/cnb";
import { useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { VeilText } from "../../../styles/common";

type NavigationProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const theme = useTheme();

  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    if (!isMobile) return;
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const styles = css`
    visibility: ${isOpen ? "visible" : "hidden"};
    //margin: 15px 0;
    padding: 0 15px;
    padding: 20% 5% 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: ${theme.colors.white.text};
    z-index: 2;
    background-color: ${theme.colors.text};

    h2 {
      padding-bottom: 15px;
      margin: 0 0 15px 0;
      border-bottom: 1px solid ${theme.colors.white.text};
      cursor: pointer;
    }
    ul {
      margin: 0 15px 15px;
      li {
        position: relative;
        padding-top: 3%;
        font-size: 18px;
        &:nth-of-type(1) {
          padding-top: 0;
        }
        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          height: 15px;
          width: 19px;
          background: url("/images/header/menu-arrow.svg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        &:hover {
          font-weight: bold;
          &::after {
            transform: scaleX(1);
          }
        }
      }
    }
    button {
      display: none;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      justify-content: space-around;
      z-index: 11;
      padding: 0;
      color: ${theme.colors.text};
      background-color: ${theme.colors.background};

      .wrapper {
        flex: 1;
        padding: 18% 4% 0;
        border-right: 1px solid #8c8a8a1c;
        cursor: pointer;
        &:hover {
          color: ${theme.colors.white.text};
          background-color: ${theme.colors.point};
          transition: background-color 0.5s ease;
          h2:after {
            transform: scaleX(1);
          }
        }
        h2 {
          position: relative;
          font-size: 30px;
          border-bottom: none;
          margin: 25px 0 0 0;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            width: 100%;
            background-color: ${theme.colors.white.text};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
          }
        }
        ul {
          padding: 0;
          margin: 0;
          li {
            padding-top: 10%;
            a {
              font-size: 23px;
            }
          }
        }
      }

      button {
        display: block;
        width: 6%;
        margin: 20px;
        background: url("/images/header/close-button-inner.svg");
        background-repeat: no-repeat;
        background-position: left top;
        background-size: 28px 28px;
        ${VeilText}
      }
    }
  `;

  const ulStyle = (isOpen: boolean) => css`
    overflow: hidden;
    transition: max-height 0.1s ease;
    ${isMobile && `max-height: ${isOpen ? "1000px" : "0"};`}
    ${!isMobile && `max-height: none;`}
  `;

  return (
    <div css={styles}>
      {CnbData.map((item, index) =>
        item.cnb.map((section, sectionIndex) => {
          const globalIndex = index * 10 + sectionIndex;
          const isOpen = isMobile ? openIndex === globalIndex : true;
          return (
            <div className="wrapper" key={globalIndex}>
              <h2 onClick={() => handleToggle(globalIndex)}>
                <span>{section.title}</span>
              </h2>
              <ul css={ulStyle(isOpen)}>
                {section.deps.map((dep, depIndex) => (
                  <li key={depIndex}>
                    <a
                      href={section.links[depIndex]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{dep}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      )}
      <button type="button" onClick={() => setIsOpen(false)}>
        메뉴
      </button>
    </div>
  );
}
