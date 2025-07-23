/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { AllDataTypes } from "../../data/data";
import Subtitle from "./Subtitle";
import MediaWrapper from "./media/MediaWrapper";

type MediaProps = {
  data: AllDataTypes;
};

export default function Media(props: MediaProps) {
  const subtitle = props.data.subtitle;
  const media = props.data.media;

  const theme = useTheme();
  const styles = css`
    margin-top: 60px;
    padding-bottom: 70px;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 157, 132, 1) 35%,
      rgba(229, 74, 91, 1) 55%,
      rgba(39, 27, 41, 1) 84%,
      rgba(39, 27, 41, 1) 100%
    );

    @media (min-width: ${theme.breakpoints.tablet}) {
      margin-top: 106px;
      padding-bottom: 100px;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="media" />
      <MediaWrapper data={media} />
    </div>
  );
}
