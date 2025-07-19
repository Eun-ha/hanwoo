/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../data/data";
import LinkList from "./links/LinkList";
import LinkCharacters from "../animation/LinkCharacters";
import { coverBg } from "../../styles/common";

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
    height: 100%;
    &::before {
      ${coverBg}
      background: url("/images/mobile/links-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      margin-top: 123px;
      &::before {
        background: url("/images/pc/links-bg.png");
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100% 100%;
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
