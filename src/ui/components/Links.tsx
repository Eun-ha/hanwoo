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
    width: 100%;
    height: 100vh;
    background: url("/images/mobile/links-bg.png");
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    @media (min-width: ${theme.breakpoints.mini}) {
      margin: 123px 0 200px;
      background: url("/images/pc/links-bg.png");
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
    }
  `;
  return (
    <div css={styles}>
      <LinkList data={links} />
      <LinkCharacters />
    </div>
  );
}
