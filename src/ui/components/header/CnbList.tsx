/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { CnbData } from "../../../data/cnb";
type ChildProps = {
  onHoverStart: () => void;
  onHoverEnd: () => void;
};
export default function CnbList({ onHoverStart, onHoverEnd }: ChildProps) {
  const theme = useTheme();
  const styles = css`
    display: none;
    text-align: center;
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      color: ${theme.colors.white.text};
      .wrapper {
        position: relative;
        width: 215px;
        h2 {
          height: 100px;
          line-height: 100px;
          font-size: 22px;
          cursor: pointer;
        }
        ul {
          display: none;
          position: absolute;
          left: 50%;
          top: 110px;
          transform: translateX(-50%);
          li {
            padding-top: 25px;
            font-size: 17px;
            cursor: pointer;
            &:hover {
              font-weight: bold;
            }
          }
        }
        &:hover {
          color: ${theme.colors.white.text};
          background-color: ${theme.colors.point};
        }
      }
      &:hover {
        height: 455px;
        color: ${theme.colors.text};
        &::before {
          display: block;
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 340px;
          background-color: ${theme.colors.white.text};
          transition: background-color 0.5s ease;
          border-top: 1px solid #8c8a8a1c;
        }
        ul {
          display: block;
          &::before {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 2px;
            background-color: ${theme.colors.white.text};
          }
        }
      }
    }
  `;
  return (
    <>
      {CnbData.map((item, index) => (
        <div
          css={styles}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          key={index}
        >
          {item.cnb.map((section, sectionIndex) => (
            <div className="wrapper" key={sectionIndex}>
              <h2>
                <span>{section.title}</span>
              </h2>
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
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
