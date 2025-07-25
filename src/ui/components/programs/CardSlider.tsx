/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { programsTypes } from "../../../data/data";
import Card from "./Card";

type CardSliderProps = {
  data: programsTypes[];
};

export default function CardSlider(props: CardSliderProps) {
  const programs = props.data;
  const theme = useTheme();

  const swiperStyle = css`
    //position: relative;
    padding-top: 25px;
    //background-color: aquamarine;
    .swiper-slide {
      /*flex-shrink: 1;
      margin-left: 22px;
      &:nth-of-type(1) {
        margin-left: 0;
      }*/
    }
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding-top: 87px;
      .swiper-slide {
        //margin-left: 29px;
      }
      .swiper-button-next,
      .swiper-button-prev {
        display: block;
        top: 60%;
        &::after {
          display: none;
        }
        &::before {
          display: block;
          content: "";
          width: 22.61px;
          height: 45px;
          background: url("/images/programs/swipe-btn.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
      }
      .swiper-button-prev {
        left: -48px;
      }
      .swiper-button-next {
        &::before {
          transform: rotate(180deg);
        }
        right: -48px;
      }
    }
  `;
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      //loop={true}
      slidesPerView={1.5} // 기본값 (모바일 기준)
      breakpoints={{
        640: {
          slidesPerView: 3, // 작은 태블릿
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3, // 일반 태블릿
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3, // 데스크탑
          spaceBetween: 32,
        },
        1440: {
          slidesPerView: 4, // 대형 데스크탑
          spaceBetween: 40,
        },
      }}
      css={swiperStyle}
    >
      {programs.map((card, index) => (
        <SwiperSlide key={index}>
          <Card data={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
