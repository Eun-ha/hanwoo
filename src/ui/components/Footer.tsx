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
    background-color: ${theme.colors.block.background};
    .wrapper {
      padding: 50px 18px 60px;
      font-size: 13px;
      color: ${theme.colors.white.text};
    }

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
    .address {
      flex-shrink: 1;
      p {
        line-height: 1.625;
        span {
          display: inline-block;
          padding-left: 15px;
          &:nth-of-type(1) {
            padding-left: 0;
          }
        }
      }
    }
    .social {
      min-width: 70px;
      a {
        ${VeilText}
        display: inline-block;
        margin-left: 10px;
        width: 30px;
        height: 30px;
        background: url("/images/footer/youtube.svg");
        background-repeat: no-repeat;
        background-position: left top;
        background-size: cover;
        &:nth-of-type(1) {
          margin-left: 0;
        }
        &:nth-of-type(2) {
          background: url("/images/footer/instagram.svg");
          background-repeat: no-repeat;
          background-position: left top;
          background-size: cover;
        }
      }
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      .wrapper {
        display: flex;
        max-width: 1362px;
        margin: 0 auto;
        padding: 85px 50px 100px;
        font-size: 16px;
      }

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
        padding-top: 0;
      }
      .social {
        a {
          width: 48px;
          height: 48px;
        }
      }
    }
    @media (min-width: ${theme.breakpoints.desktop}) {
      .wrapper {
        padding: 85px 0 100px;
      }
    }
  `;
  return (
    <footer css={styles}>
      <div className="wrapper">
        <h4>{organizationName}</h4>
        <div className="info">
          <div className="address">
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
      </div>
    </footer>
  );
}
