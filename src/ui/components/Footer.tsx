/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { FooterData } from "../../data/footer";
import { VeilText } from "../../styles/common";

export default function Footer() {
  const {
    contact: { organizationName, representativeName, contactPhone, address },
    links: { youtube, instagram },
    copyright,
  } = FooterData;
  const theme = useTheme();
  const styles = css`
    padding: 50px 18px 60px;
    font-size: 13px;
    color: ${theme.colors.white.text};
    background-color: ${theme.colors.block.background};
    h4 {
      width: 107px;
      height: 51px;
      margin: 0 auto;
      background: url("/images/mobile/ic.png");
      background-repeat: no-repeat;
      background-position: left top;
      background-size: cover;
      ${VeilText}
    }
    h5 {
      margin-bottom: 22px;
      font-size: 18px;
    }
    .info {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
    }
    .social {
      a {
        ${VeilText}
        display: inline-block;
        &:nth-of-type(1) {
          width: 20px;
          height: 20px;
          background: url("/images/footer/instagram.svg");
          background-repeat: no-repeat;
          background-position: left top;
          background-size: cover;
        }
        &:nth-of-type(2) {
          width: 23px;
          height: 17px;
          background: url("/images/footer/youtube.svg");
          background-repeat: no-repeat;
          background-position: left top;
          background-size: cover;
        }
      }
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      display: flex;
      padding: 83px 320px 91px;
      font-size: 16px;

      h4 {
        width: 242px;
        height: 114px;
        margin: 0 61px 0 0;
        background: url("/images/pc/ic.png");
        background-repeat: no-repeat;
        background-position: left top;
        background-size: cover;
      }
      h5 {
        margin-bottom: 13px;
        font-size: 25px;
      }
      .info {
        flex-grow: 1;
      }
    }
  `;
  return (
    <footer css={styles}>
      <h4>{organizationName}</h4>
      <div className="info">
        <div>
          <h5>{organizationName}</h5>
          <p>
            <span>대표자: {representativeName}</span>
            <span>문의전화: {contactPhone}</span>
          </p>
          <p>{address}</p>
          <p>{copyright}</p>
        </div>
        <div className="social">
          {youtube && <a href={youtube}>YouTube</a>}
          {instagram && <a href={instagram}>Instagram</a>}
        </div>
      </div>
    </footer>
  );
}
