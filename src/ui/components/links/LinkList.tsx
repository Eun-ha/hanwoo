/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../../data/data";
import LinkItem from "./LinkItem";

type LinkListProps = {
  data: linksTypes[];
};
export default function LinkList(props: LinkListProps) {
  const links = props.data;

  const theme = useTheme();
  const styles = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 39px 0;

    @media (min-width: ${theme.breakpoints.mini}) {
      padding: 75px 0;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 0;
      flex-wrap: nowrap;
      align-items: anchor-center;
    }
  `;
  return (
    <ul css={styles}>
      {links.map((item, index) => (
        <LinkItem data={item} index={index} key={index} />
      ))}
    </ul>
  );
}
