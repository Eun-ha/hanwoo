/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../data/data";

type LinkIconProps = {
  data: linksTypes;
};
export default function LinkIcon(props: LinkIconProps) {
  const { title, icon, url } = props.data;

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
      width: 49px;
      height: 43px;
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
    }
  `;
  return (
    <a href={url} css={styles}>
      <span>{icon}</span>
      <h4>{title}</h4>
    </a>
  );
}
