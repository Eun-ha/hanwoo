/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { mediaTypes } from "../../../data/data";
import MediaText from "../../animation/MediaText";
import YouTubeEmbed from "./YoutubeEmbed";
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
    padding-bottom: 70px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 157, 132, 1) 35%,
      rgba(229, 74, 91, 1) 55%,
      rgba(39, 27, 41, 1) 84%,
      rgba(39, 27, 41, 1) 100%
    );

    @media (min-width: ${theme.breakpoints.mini}) {
      margin-top: 56px;
      padding-bottom: 100px;
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
