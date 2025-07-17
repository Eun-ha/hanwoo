/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { CnbData } from "../../../data/cnb";
import { useState } from "react";

export default function Navigation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const theme = useTheme();
  const styles = css`
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
      margin: 15px 0;
      border-bottom: 1px solid ${theme.colors.white.text};
    }
    ul {
      padding: 3%;
      li {
        padding-top: 2%;
        &:nth-of-type(1) {
          padding-top: 0;
        }
      }
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `;
  return (
    <>
      {CnbData.map((item, index) => (
        <div css={styles} key={index}>
          {item.cnb.map((section, sectionIndex) => (
            <div className="wrapper" key={sectionIndex}>
              <h2>
                <button onClick={() => handleClick(sectionIndex)}>
                  {section.title}
                </button>
              </h2>
              {openIndex === sectionIndex && (
                <ul>
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
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
