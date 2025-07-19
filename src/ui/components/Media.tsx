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

    @media (min-width: ${theme.breakpoints.tablet}) {
      margin: 106px 0 0 0;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="media" />
      <MediaWrapper data={media} />
    </div>
  );
}
