/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes, noticeTypes } from "../../data/data";

type LinkItemProps = {
  data: linksTypes;
};
export default function LinkItem(props: LinkItemProps) {
  const { title, icon, hover } = props.data;

  const theme = useTheme();
  const styles = css`
    display: inline-block;
    width: 146px;
    height: 146px;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.white.text};
    border-radius: 100%;
    text-align: center;
    em {
      display: block;
      margin-top: 30px;
    }
    span {
      display: none;
      margin-top: 30px;
    }
    h4 {
      margin-top: 18px;
      font-size: 18px;
    }

    &:hover {
      color: ${theme.colors.white.text};
      background-color: ${theme.colors.point};
      em {
        display: none;
      }
      span {
        display: inline-block;
        color: ${theme.colors.white.text};
      }
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `;
  return (
    <li css={styles}>
      <em>{icon}</em>
      <span>{hover}</span>
      <h4>{title}</h4>
    </li>
  );
}
