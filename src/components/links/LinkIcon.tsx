/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../data/data";

type LinkIconProps = {
  data: linksTypes;
};
export default function LinkIcon(props: LinkIconProps) {
  const { title, icon, url } = props.data;

  console.log(url);

  const theme = useTheme();
  const styles = css`
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 146px;
    height: 146px;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.white.text};
    border-radius: 100%;
    text-align: center;
    z-index: 1;

    span {
      margin-top: 30px;
      display: inline-block;
      width: ${icon === "intro"
        ? "49px"
        : icon === "schedule"
        ? "43px"
        : icon === "map"
        ? "43px"
        : icon === "location"
        ? "43px"
        : "47px"};
      height: ${icon === "intro"
        ? "43px"
        : icon === "schedule"
        ? "48px"
        : icon === "map"
        ? "48px"
        : icon === "location"
        ? "38px"
        : "38px"};
      background-image: url(images/icons/link-${icon}-default.svg);
      background-size: contain;
      background-repeat: no-repeat;
      text-indent: -9999px;
      white-space: nowrap;
    }
    h4 {
      margin-top: 18px;
      font-size: 18px;
    }

    &:hover {
      color: ${theme.colors.white.text};
      background-color: ${theme.colors.point};

      span {
        background-image: url(images/icons/link-${icon}-hover.svg);
        color: ${theme.colors.white.text};
      }
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 246px;
      height: 246px;
      span {
        margin-top: 66px;
        width: ${icon === "intro"
          ? "71px"
          : icon === "schedule"
          ? "61px"
          : icon === "map"
          ? "61px"
          : icon === "location"
          ? "61px"
          : "66px"};
        height: ${icon === "intro"
          ? "61px"
          : icon === "schedule"
          ? "68px"
          : icon === "map"
          ? "68px"
          : icon === "location"
          ? "54px"
          : "54px"};
      }
      h4 {
        margin-top: 24px;
        font-size: 29px;
      }
    }
  `;
  return (
    <a href={url?.startsWith("http") ? url : `https://${url}`} css={styles}>
      <span>{icon}</span>
      <h4>{title}</h4>
    </a>
  );
}
