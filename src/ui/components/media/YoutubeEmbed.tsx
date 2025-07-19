/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { mediaTypes } from "../../../data/data";

type YouTubeEmbedProps = {
  data: mediaTypes;
};

const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const { videoId, title, aspectRatio, allowOptions } = props.data;

  const theme = useTheme();
  const containerStyle = css`
    margin: 0 4.8% 10%;
    position: relative;
    aspect-ratio: ${aspectRatio};
    overflow: hidden;
    border-radius: 15px;
    max-width: 1362px;
    @media (min-width: ${theme.breakpoints.desktop}) {
      margin: 0 auto 10%;
    }
  `;

  const iframeStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  `;

  return (
    <div css={containerStyle}>
      <iframe
        css={iframeStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow={allowOptions}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
