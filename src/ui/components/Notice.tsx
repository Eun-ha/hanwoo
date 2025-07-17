/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { AllDataTypes } from "../../data/data";
import Subtitle from "./Subtitle";
import NoticeList from "./notice/NoticeList";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      css={styles}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Subtitle data={subtitle} type="notice" />
      <NoticeList data={notice} />
    </motion.div>
  );
}
