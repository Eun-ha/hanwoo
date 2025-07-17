/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { noticeTypes } from "../../../data/data";
import NoticeItem from "./NoticeItem";

type NoticeListProps = {
  data: noticeTypes[];
};
export default function NoticeList(props: NoticeListProps) {
  const notice = props.data;

  const theme = useTheme();
  const styles = css`
    padding: 20px 28px;
    margin-top: 15px;
    box-shadow: 3px 3px 10px #00000014;
    border-radius: 15px;
    @media (min-width: ${theme.breakpoints.desktop}) {
      flex-grow: 1;
      padding: 20px 70px;
    }
  `;

  return (
    <ul css={styles}>
      {notice.map((item, index) => (
        <NoticeItem data={item} key={index} />
      ))}
    </ul>
  );
}
