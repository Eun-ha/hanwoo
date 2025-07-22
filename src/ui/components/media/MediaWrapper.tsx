/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { mediaTypes } from "../../../data/data";
import MediaText from "../../animation/MediaText";
import YouTubeEmbed from "./YoutubeEmbed";
import { coverBg } from "../../../styles/common";
import TwinklingStars from "../../animation/TwinklingStarts";

type MediaWrapperProps = {
  data: mediaTypes[];
};

export default function MediaWrapper(props: MediaWrapperProps) {
  const media = props.data;
  const theme = useTheme();

  const styles = css`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 25px;
    &::before {
      ${coverBg};
      background: url("/images/mobile/media-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    @media (min-width: ${theme.breakpoints.mini}) {
      margin-top: 56px;
      &::before {
        background: url("/images/pc/media-bg.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }
  `;
  return (
    <div css={styles}>
      <MediaText />
      <TwinklingStars />
      {media.map((item, index) => (
        <YouTubeEmbed data={item} key={index} />
      ))}
    </div>
  );
}
