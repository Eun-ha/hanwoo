/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { mediaTypes } from "../../../data/data";
import MediaText from "../../animation/MediaText";
import YouTubeEmbed from "./YoutubeEmbed";

type MediaWrapperProps = {
  data: mediaTypes[];
};

export default function MediaWrapper(props: MediaWrapperProps) {
  const media = props.data;
  const theme = useTheme();

  const styles = css`
    margin-top: 25px;
    padding-bottom: 161px;
    position: relative;
    overflow: hidden;
    background: url("/images/mobile/media-bg.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    @media (min-width: ${theme.breakpoints.desktop}) {
      margin-top: 56px;
      background: url("/images/pc/media-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  `;
  return (
    <div css={styles}>
      <MediaText />
      {media.map((item, index) => (
        <YouTubeEmbed data={item} />
      ))}
    </div>
  );
}
