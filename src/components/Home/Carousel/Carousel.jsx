import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.scss";
import CardUniversity from "../../CardUniversity/CardUniversity";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
