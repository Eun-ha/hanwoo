/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { useTheme } from "@emotion/react";

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html,
        body {
          width: 100%;
          height: 100%;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: "Pretendard", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
          transition: background 0.3s ease, color 0.3s ease;
          overflow-x: hidden;
          overflow-y: scroll;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        em {
          font-style: unset;
        }
        li {
          list-style: none;
        }
        button {
          all: unset;
          cursor: pointer;
        }
        .swiper {
          position: initial;
        }
        .swiper-wrapper {
          padding-left: 18px;
          @media (min-width: ${theme.breakpoints.desktop}) {
            padding: 0 0;
          }
        }
      `}
    />
  );
}
