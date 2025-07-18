/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { marquee } from "../../styles/animations";

const VisualText = () => {
  const theme = useTheme();

  const wrapperStyle = css`
    width: 100%;
    overflow: hidden;
    margin-top: 66.5px;
  `;

  const svgStyle = css`
    display: inline-block;
    animation: ${marquee} 20s linear infinite;
    width: 200%; // 두 세트의 텍스트 길이를 커버
    height: 61.46px; // SVG의 높이와 일치

    @media (min-width: ${theme.breakpoints.tablet}) {
      height: 198.33px;
    }
  `;

  return (
    <div css={wrapperStyle}>
      <svg
        css={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 575.316 61.46"
        role="img"
        aria-labelledby="visual section title"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="사각형_9"
              data-name="사각형 9"
              width="272.864"
              height="61.46"
              fill="none"
            />
          </clipPath>
        </defs>
        <g id="text" transform="translate(12.261 -366)">
          <g
            id="그룹_11"
            data-name="그룹 11"
            transform="translate(-12.261 366)"
          >
            <g
              id="그룹_10"
              data-name="그룹 10"
              transform="translate(0 0)"
              clipPath="url(#clip-path)"
            >
              <path
                id="패스_81"
                data-name="패스 81"
                d="M48.759,58.216a73.909,73.909,0,0,1-3.9-6.77,20.961,20.961,0,0,1-2.092-9.73A20.989,20.989,0,0,1,44.863,32a69.091,69.091,0,0,1,3.9-6.753H52.3a39.8,39.8,0,0,0-3.86,8.725,27.891,27.891,0,0,0-1.175,7.74,27.984,27.984,0,0,0,1.175,7.773,39.781,39.781,0,0,0,3.86,8.726Z"
                transform="translate(5.495 3.244)"
                fill="#ffe397"
              />
              <path
                id="패스_82"
                data-name="패스 82"
                d="M67.95,46.6v9.9H63.323V46.6H51.553V42.921h11.77V36.73H57.778a14.786,14.786,0,0,1-1.6,2.347,10.012,10.012,0,0,1-1.6,1.634l-3.367-2.79a21.254,21.254,0,0,0,1.75-1.854,20.507,20.507,0,0,0,2.162-3.181,15.03,15.03,0,0,0,1.479-3.2q.355-1.258.392-1.327l3.912,1.395a10.664,10.664,0,0,1-.613,1.769q-.479,1.122-.613,1.462h3.742l-.1-3.946c-.023-.658-.05-1.247-.085-1.769s-.051-.793-.051-.816l5.034.306c0,.114-.05.914-.153,2.4s-.152,2.285-.152,2.4v1.429h8.708V36.7H67.95v6.226h11.43V46.6Z"
                transform="translate(6.579 3.399)"
                fill="#ffe397"
              />
              <path
                id="패스_83"
                data-name="패스 83"
                d="M80.266,49.483a27.47,27.47,0,0,0,0-15.547,36.048,36.048,0,0,0-3.81-8.505h3.1a65.58,65.58,0,0,1,3.845,6.7,20.875,20.875,0,0,1,2.04,9.559,20.848,20.848,0,0,1-2.04,9.577,69.969,69.969,0,0,1-3.845,6.719h-3.1a36.069,36.069,0,0,0,3.81-8.505"
                transform="translate(9.822 3.267)"
                fill="#ffe397"
              />
              <path
                id="패스_84"
                data-name="패스 84"
                d="M46.5,36.271H28.612V52.426c0,7.212-3.994,8.763-9.656,8.763V36.271H0V27.924H21.579A12.361,12.361,0,0,0,29.447,17.91c.418-4.233-2.265-7.273-6.2-7.273-3.278,0-6.616,2.265-6.616,6.08a5.1,5.1,0,0,0,5.425,5.008C20.8,24.229,17.525,25.48,14.127,25c-5.781-.895-7.094-4.829-7.152-8.822-.121-7.929,6.2-14.128,16.272-14.069s15.917,6.975,15.917,14.6A14.565,14.565,0,0,1,33.62,27.924H46.5Z"
                transform="translate(0 0.272)"
                fill="#ffe397"
              />
              <path
                id="패스_85"
                data-name="패스 85"
                d="M97.547,23.972A8.659,8.659,0,0,1,106.6,32.99a9.071,9.071,0,0,1-18.141,0c0-5.517,4-9.018,9.089-9.018m0,13.12c2.688,0,3.643-2.122,3.643-4.138s-.955-4.031-3.643-4.031-3.678,2.05-3.678,4.067.99,4.1,3.678,4.1m11.528-13.085H114.8v7.037h4.1v5.093h-4.1v9.018c0,4.279-2.37,5.2-5.729,5.2Z"
                transform="translate(11.364 3.08)"
                fill="#ffe397"
              />
              <path
                id="패스_86"
                data-name="패스 86"
                d="M136.264,30.994h-2.511A6.967,6.967,0,0,1,135.2,35.31a8.611,8.611,0,0,1-17.222,0,6.939,6.939,0,0,1,1.415-4.315h-2.547V26.221h7.108V22.154h5.729v4.067h6.578ZM122.083,58.614V46.378h5.729v7.143h12.024c2.97,0,4.031-.812,4.632-1.874V57.2c-.636.991-1.909,1.415-4.562,1.415Zm4.491-19.556a3.494,3.494,0,0,0,3.394-3.784,3.391,3.391,0,1,0-6.754.036,3.457,3.457,0,0,0,3.359,3.748M138.1,24.241h5.729V31.6h3.961v5.093h-3.961v11H138.1Z"
                transform="translate(15.011 2.846)"
                fill="#ffe397"
              />
              <path
                id="패스_87"
                data-name="패스 87"
                d="M197.692,13.723h-5.028a14.469,14.469,0,0,1,1.242,5.737,12.686,12.686,0,0,1-5.087,10.53h12.422v8.282h-9.227v16.09c0,5.56-3.963,7.1-9.583,7.1V38.272h-7.454v3.312c0,5.561-3.963,7.1-9.583,7.1V38.272H155.1V29.99h22.124a11.711,11.711,0,0,0,7.039-9.346c.414-4.2-2.189-6.921-6.093-6.921-3.253,0-6.271,1.952-6.271,5.737a4.585,4.585,0,0,0,5.087,4.674c-1.241,2.484-4.495,3.785-7.867,3.253-3.963-.592-6.744-4.5-6.8-8.459a12.555,12.555,0,0,1,.946-5.206h-4.673V5.915H173.38V0h9.583V5.915h14.729Z"
                transform="translate(19.925 0)"
                fill="#ffe397"
              />
              <path
                id="패스_88"
                data-name="패스 88"
                d="M227.861,3.632V12.15h-4.436c-2.129,0-3.609,1.952-4.91,4.614,2.544,4.2,5.5,7.394,10.234,7.394h3.312v8.518h-3.372c-7.926,0-10.943-3.609-13.842-8.045-2.425,4.556-5.8,8.577-11.948,8.577H199.29V24.691H202.6c7.632,0,7.395-21.058,20.29-21.058Zm9.82,57.437V46.162H210.351V37.941h36.911V53.5c0,5.147-3.608,7.572-8.1,7.572Zm0-58.029h9.583V35.515H237.68Z"
                transform="translate(25.602 0.391)"
                fill="#ffe397"
              />
            </g>
          </g>
          <g
            id="그룹_11-2"
            data-name="그룹 11"
            transform="translate(290.19 366)"
          >
            <g
              id="그룹_10-2"
              data-name="그룹 10"
              transform="translate(0 0)"
              clipPath="url(#clip-path)"
            >
              <path
                id="패스_81-2"
                data-name="패스 81"
                d="M48.759,58.216a73.909,73.909,0,0,1-3.9-6.77,20.961,20.961,0,0,1-2.092-9.73A20.989,20.989,0,0,1,44.863,32a69.091,69.091,0,0,1,3.9-6.753H52.3a39.8,39.8,0,0,0-3.86,8.725,27.891,27.891,0,0,0-1.175,7.74,27.984,27.984,0,0,0,1.175,7.773,39.781,39.781,0,0,0,3.86,8.726Z"
                transform="translate(5.495 3.244)"
                fill="#ffe397"
              />
              <path
                id="패스_82-2"
                data-name="패스 82"
                d="M67.95,46.6v9.9H63.323V46.6H51.553V42.921h11.77V36.73H57.778a14.786,14.786,0,0,1-1.6,2.347,10.012,10.012,0,0,1-1.6,1.634l-3.367-2.79a21.254,21.254,0,0,0,1.75-1.854,20.507,20.507,0,0,0,2.162-3.181,15.03,15.03,0,0,0,1.479-3.2q.355-1.258.392-1.327l3.912,1.395a10.664,10.664,0,0,1-.613,1.769q-.479,1.122-.613,1.462h3.742l-.1-3.946c-.023-.658-.05-1.247-.085-1.769s-.051-.793-.051-.816l5.034.306c0,.114-.05.914-.153,2.4s-.152,2.285-.152,2.4v1.429h8.708V36.7H67.95v6.226h11.43V46.6Z"
                transform="translate(6.579 3.399)"
                fill="#ffe397"
              />
              <path
                id="패스_83-2"
                data-name="패스 83"
                d="M80.266,49.483a27.47,27.47,0,0,0,0-15.547,36.048,36.048,0,0,0-3.81-8.505h3.1a65.58,65.58,0,0,1,3.845,6.7,20.875,20.875,0,0,1,2.04,9.559,20.848,20.848,0,0,1-2.04,9.577,69.969,69.969,0,0,1-3.845,6.719h-3.1a36.069,36.069,0,0,0,3.81-8.505"
                transform="translate(9.822 3.267)"
                fill="#ffe397"
              />
              <path
                id="패스_84-2"
                data-name="패스 84"
                d="M46.5,36.271H28.612V52.426c0,7.212-3.994,8.763-9.656,8.763V36.271H0V27.924H21.579A12.361,12.361,0,0,0,29.447,17.91c.418-4.233-2.265-7.273-6.2-7.273-3.278,0-6.616,2.265-6.616,6.08a5.1,5.1,0,0,0,5.425,5.008C20.8,24.229,17.525,25.48,14.127,25c-5.781-.895-7.094-4.829-7.152-8.822-.121-7.929,6.2-14.128,16.272-14.069s15.917,6.975,15.917,14.6A14.565,14.565,0,0,1,33.62,27.924H46.5Z"
                transform="translate(0 0.272)"
                fill="#ffe397"
              />
              <path
                id="패스_85-2"
                data-name="패스 85"
                d="M97.547,23.972A8.659,8.659,0,0,1,106.6,32.99a9.071,9.071,0,0,1-18.141,0c0-5.517,4-9.018,9.089-9.018m0,13.12c2.688,0,3.643-2.122,3.643-4.138s-.955-4.031-3.643-4.031-3.678,2.05-3.678,4.067.99,4.1,3.678,4.1m11.528-13.085H114.8v7.037h4.1v5.093h-4.1v9.018c0,4.279-2.37,5.2-5.729,5.2Z"
                transform="translate(11.364 3.08)"
                fill="#ffe397"
              />
              <path
                id="패스_86-2"
                data-name="패스 86"
                d="M136.264,30.994h-2.511A6.967,6.967,0,0,1,135.2,35.31a8.611,8.611,0,0,1-17.222,0,6.939,6.939,0,0,1,1.415-4.315h-2.547V26.221h7.108V22.154h5.729v4.067h6.578ZM122.083,58.614V46.378h5.729v7.143h12.024c2.97,0,4.031-.812,4.632-1.874V57.2c-.636.991-1.909,1.415-4.562,1.415Zm4.491-19.556a3.494,3.494,0,0,0,3.394-3.784,3.391,3.391,0,1,0-6.754.036,3.457,3.457,0,0,0,3.359,3.748M138.1,24.241h5.729V31.6h3.961v5.093h-3.961v11H138.1Z"
                transform="translate(15.011 2.846)"
                fill="#ffe397"
              />
              <path
                id="패스_87-2"
                data-name="패스 87"
                d="M197.692,13.723h-5.028a14.469,14.469,0,0,1,1.242,5.737,12.686,12.686,0,0,1-5.087,10.53h12.422v8.282h-9.227v16.09c0,5.56-3.963,7.1-9.583,7.1V38.272h-7.454v3.312c0,5.561-3.963,7.1-9.583,7.1V38.272H155.1V29.99h22.124a11.711,11.711,0,0,0,7.039-9.346c.414-4.2-2.189-6.921-6.093-6.921-3.253,0-6.271,1.952-6.271,5.737a4.585,4.585,0,0,0,5.087,4.674c-1.241,2.484-4.495,3.785-7.867,3.253-3.963-.592-6.744-4.5-6.8-8.459a12.555,12.555,0,0,1,.946-5.206h-4.673V5.915H173.38V0h9.583V5.915h14.729Z"
                transform="translate(19.925 0)"
                fill="#ffe397"
              />
              <path
                id="패스_88-2"
                data-name="패스 88"
                d="M227.861,3.632V12.15h-4.436c-2.129,0-3.609,1.952-4.91,4.614,2.544,4.2,5.5,7.394,10.234,7.394h3.312v8.518h-3.372c-7.926,0-10.943-3.609-13.842-8.045-2.425,4.556-5.8,8.577-11.948,8.577H199.29V24.691H202.6c7.632,0,7.395-21.058,20.29-21.058Zm9.82,57.437V46.162H210.351V37.941h36.911V53.5c0,5.147-3.608,7.572-8.1,7.572Zm0-58.029h9.583V35.515H237.68Z"
                transform="translate(25.602 0.391)"
                fill="#ffe397"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default VisualText;
