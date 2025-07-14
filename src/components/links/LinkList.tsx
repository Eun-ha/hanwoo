/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../data/data";
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
    padding-top: 79px;

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `;
  return (
    <ul css={styles}>
      {links.map((item, index) => (
        <LinkItem data={item} index={index} />
      ))}
    </ul>
  );
}
