/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../data/data";
import LinkList from "./links/LinkList";
import LinkCharacters from "../animation/LinkCharacters";

type LinksProps = {
  data: linksTypes[];
};
export default function Links(props: LinksProps) {
  const links = props.data;

  const theme = useTheme();
  const styles = css`
    position: relative;
    margin-top: 100px;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    &::before {
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url("/images/mobile/links-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      margin: 123px 0 200px;
      &::before {
        background: url("/images/pc/links-bg.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
    }
  `;
  return (
    <div css={styles}>
      <LinkList data={links} />
      <LinkCharacters />
    </div>
  );
}
