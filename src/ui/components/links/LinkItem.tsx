/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { linksTypes } from "../../../data/data";
import LinkIcon from "./LinkIcon";
import { floatUpDown } from "../../../styles/animations";

type LinkItemProps = {
  data: linksTypes;
  index: number;
};
export default function LinkItem(props: LinkItemProps) {
  const { title, icon, url } = props.data;

  const theme = useTheme();

  const styles = (delay: number) => css`
    position: relative;
    display: inline-block;
    //width: 42.67%;
    //height: 42.67%;
    &::after {
      display: block;
      content: "";
      width: 160px;
      height: 160px;
      //width: 42.67%;
      //height: 42.67%;
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
    &:nth-of-type(2n) {
      //margin: 20px 0 0 20px;
    }
    animation: ${floatUpDown} 2s ease-in-out infinite;
    animation-delay: ${delay}s;

    @media (min-width: ${theme.breakpoints.mini}) {
      &::after {
        width: 306px;
        height: 306px;
      }
      &:nth-of-type(1) {
        //margin-top: 188px;
      }
      &:nth-of-type(2) {
        // margin: 353px 0 0 65px;
      }
      &:nth-of-type(3) {
        //margin-top: 35px;
      }
      &:nth-of-type(4) {
        //margin: 322px 72px 0 0;
      }
      &:nth-of-type(5) {
        //margin-top: 142px;
      }
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      &::after {
        width: 306px;
        height: 306px;
      }
      &:nth-of-type(1) {
        margin-top: 108px;
      }
      &:nth-of-type(2) {
        margin: 303px 0 0 30px;
      }
      &:nth-of-type(3) {
        margin-top: 35px;
      }
      &:nth-of-type(4) {
        margin: 232px 20px 0 0;
      }
      &:nth-of-type(5) {
        margin-top: 62px;
      }
    }
  `;
  return (
    <li key={props.index} css={styles(props.index * 0.3)}>
      <LinkIcon data={{ title, icon, url }} />
    </li>
  );
}
