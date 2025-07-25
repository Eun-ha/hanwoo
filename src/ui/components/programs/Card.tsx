/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { programsTypes } from "../../../data/data";
import { ellipsisLines } from "../../../styles/common";

type CardProps = {
  data: programsTypes;
};
export default function Card(props: CardProps) {
  const { title, title2, content, image, url } = props.data;

  const theme = useTheme();
  const styles = css`
    display: block;
    position: relative;
    overflow: hidden;
    z-index: 0;
    //padding: 153px 33px 0;
    /*
    background: url(${image});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    */
    border-radius: 20px;
    width: 234px;
    height: 326px;

    transition: transform 0.4s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .contents {
      position: absolute;
      left: 0;
      top: 0;
      padding: 153px 33px 0;
    }

    &::before {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      //z-index: -1;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.background};
      opacity: 0.8;
      transition: background-color 0.5s ease;
    }

    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 30px;
      right: 30px;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background: url("/images/programs/icon_plus.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-color: ${theme.colors.text};
    }

    &:hover {
      transform: translateY(-8px);
      color: ${theme.colors.background};
      &::before {
        background-color: ${theme.colors.text};
        opacity: 0.6;
      }
      &::after {
        background-color: ${theme.colors.point};
      }
    }

    h4 {
      font-size: 23px;
      font-weight: bold;
    }

    p {
      margin-top: 25px;
      font-size: 14px;
      ${ellipsisLines(2)}
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      //padding: 235px 51px 0;
      width: 360px;
      height: 503px;
      .contents {
        position: absolute;
        left: 0;
        top: 0;
        padding: 235px 51px 0;
      }
      h4 {
        font-size: 36px;
      }

      p {
        margin-top: 25px;
        font-size: 18px;
      }
      &::after {
        width: 45px;
        height: 45px;
      }
    }
  `;
  return (
    <a href={url?.startsWith("http") ? url : `https://${url}`} css={styles}>
      <img src={image} alt={content} />
      <div className="contents">
        <h4>
          <span>{title}</span>
          <br />
          <span>{title2}</span>
        </h4>
        <p>{content}</p>
      </div>
    </a>
  );
}
