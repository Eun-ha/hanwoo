/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { noticeTypes } from "../../../data/data";
import { ellipsis } from "../../../styles/common";

type NoticeItemProps = {
  data: noticeTypes;
};
export default function NoticeItem(props: NoticeItemProps) {
  const { date, content, url } = props.data;

  const theme = useTheme();
  const styles = css`
    font-size: 15px;
    margin-top: 18px;
    &:first-of-type {
      margin-top: 0;
    }

    span {
      display: block;
      margin-top: 8px;
      color: ${theme.colors.subtext};
    }
    @media (min-width: ${theme.breakpoints.tablet}) {
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
      }
      p {
        flex-grow: 1;
        ${ellipsis}
      }
      p,
      span {
        display: inline-block;
        margin-top: 0;
        flex-shrink: 0;
        width: 123px;
      }
    }
  `;
  return (
    <li css={styles}>
      <a href={url?.startsWith("http") ? url : `https://${url}`}>
        <p>{content}</p>
        <span>{date}</span>
      </a>
    </li>
  );
}
