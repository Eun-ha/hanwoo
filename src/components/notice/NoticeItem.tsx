/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { noticeTypes } from "../../data/data";

type NoticeItemProps = {
  data: noticeTypes;
};
export default function NoticeItem(props: NoticeItemProps) {
  const { date, content } = props.data;

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
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      p,
      span {
        display: inline-block;
        margin-top: 0;
      }
    }
  `;
  return (
    <li css={styles}>
      <p>{content}</p>
      <span>{date}</span>
    </li>
  );
}
