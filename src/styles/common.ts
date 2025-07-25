/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const VeilText = css`
  text-indent: -9999px;
  white-space: nowrap;
`;

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ellipsisLines = (lineCount: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: calc(1.5em * ${lineCount});
`;

export const coverBg = css`
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
