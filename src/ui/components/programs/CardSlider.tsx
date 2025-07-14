/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { programsTypes } from "../../../data/data";
import Card from "./Card";

type CardSliderProps = {
  data: programsTypes[];
};

export default function CardSlider(props: CardSliderProps) {
  const programs = props.data;
  const theme = useTheme();

  const swiperStyle = css`
    padding-top: 25px;

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding-top: 87px;
      .swiper-button-next,
      .swiper-button-prev {
        display: block;
        color: ${theme.colors.text};
      }
    }
  `;
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
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
