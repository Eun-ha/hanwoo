/** @jsxImportSource @emotion/react */
import { css, keyframes, useTheme } from "@emotion/react";
import { linksTypes } from "../../data/data";
import LinkIcon from "./LinkIcon";

type LinkItemProps = {
  data: linksTypes;
  index: number; // Assuming key is passed as a prop for unique identification
};
export default function LinkItem(props: LinkItemProps) {
  const { title, icon } = props.data;

  console.log(props.index);

  const theme = useTheme();
  const floatUpDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;
  const styles = (delay: number) => css`
    position: relative;
    display: inline-block;
    &::after {
      display: block;
      content: "";
      width: 160px;
      height: 160px;
      background-color: ${theme.colors.background};
      opacity: 0.2;
      border-radius: 100%;
    }
    &:hover {
      a {
        color: ${theme.colors.white.text};
        background-color: ${theme.colors.point};
      }

      span {
        background-image: url(images/icons/link-${icon}-hover.svg);
        color: ${theme.colors.white.text};
      }
      &::after {
        background-color: ${theme.colors.point2};
      }
    }
    &:nth-child(2n) {
      margin: 20px 0 0 20px;
    }
    animation: ${floatUpDown} 2s ease-in-out infinite;
    animation-delay: ${delay}s;

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `;
  return (
    <li key={props.index} css={styles(props.index * 0.3)}>
      <LinkIcon data={{ title, icon }} />
    </li>
  );
}
