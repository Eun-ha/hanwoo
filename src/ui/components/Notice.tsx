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
    padding: 50px 18px 0;
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      align-items: center;
      padding: 50px 320px 0;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="notice" />
      <NoticeList data={notice} />
    </div>
  );
}
