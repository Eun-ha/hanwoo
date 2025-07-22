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
    overflow: hidden;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 1) 60%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 1) 100%
    );

    @media (min-width: ${theme.breakpoints.tablet}) {
      margin-top: 106px;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="media" />
      <MediaWrapper data={media} />
    </div>
  );
}
