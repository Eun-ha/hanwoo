/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../data/data";
import LinkList from "./links/LinkList";

type LinksProps = {
  data: linksTypes[];
};
export default function Links(props: LinksProps) {
  const links = props.data;

  const theme = useTheme();
  const styles = css`
    margin-top: 100px;
    width: 100vw;
    height: 100vh;
    background: url("/images/mobile/links-bg.png");
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    @media (min-width: ${theme.breakpoints.desktop}) {
      background: url("/images/pc/links-bg.png");
      background-repeat: no-repeat;
      background-position: left top;
      background-size: contain;
    }
  `;
  return (
    <div css={styles}>
      <LinkList data={links} />
    </div>
  );
}
