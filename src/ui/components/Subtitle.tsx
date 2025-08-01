/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { subtitleTypes } from "../../data/data";
type SubtitleProps = {
  data: subtitleTypes[];
  type: "notice" | "programs" | "media";
};
export default function Subtitle(props: SubtitleProps) {
  const theme = useTheme();
  const styles = css`
    &::after {
      display: ${props.type !== "notice" ? "inline-block" : "none"};
      content: "";
      margin-top: 15px;
      width: 25px;
      height: 2px;
      background-color: ${theme.colors.line};
    }
    text-align: ${props.type !== "notice" ? "center" : "left"};
    h3 {
      font-size: 24px;
      em {
        color: ${theme.colors.point};
      }
      p {
        margin-bottom: 10px;
        font-weight: normal;
      }
      strong,
      span {
        font-size: 28px;
      }
      strong {
        color: ${theme.colors.point};
      }
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: ${props.type === "notice" ? "202px" : "auto"};
      &::after {
        width: 80px;
        margin-top: 34px;
      }
      h3 {
        font-size: 40px;
        strong,
        span {
          font-size: 50px;
        }
      }
    }
  `;
  return (
    <div css={styles}>
      {props.type === "notice" ? (
        <>
          <h3>
            <em>{props.data[0].title}</em>
          </h3>
        </>
      ) : props.type === "programs" ? (
        <>
          <h3>
            <span>{props.data[1].title}&nbsp;</span>
            <strong>{props.data[1].title2}</strong>
          </h3>
        </>
      ) : (
        <>
          <h3>
            <p>{props.data[2].title}</p>
            <span>{props.data[2].title2}&nbsp;</span>
            <strong>{props.data[2].title3}</strong>
          </h3>
        </>
      )}
    </div>
  );
}
