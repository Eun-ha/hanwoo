/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { AllDataTypes } from "../../data/data";
import Subtitle from "./Subtitle";
import NoticeList from "./notice/NoticeList";

type NoticeProps = {
  data: AllDataTypes;
};
export default function Notice(props: NoticeProps) {
  const notice = props.data.notice;
  const subtitle = props.data.subtitle;

  const theme = useTheme();
  const styles = css`
    margin-top: 50px;
    padding: 0 18px;
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      align-items: center;
      margin-top: 20px;
      padding: 0 320px;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="notice" />
      <NoticeList data={notice} />
    </div>
  );
}
