import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper";
import uni1 from "../../../assets/uni1.png";
import uni2 from "../../../assets/uni2.png";
import uni3 from "../../../assets/uni3.png";
import uni4 from "../../../assets/uni4.png";
import uni5 from "../../../assets/uni5.png";
import uni6 from "../../../assets/uni6.png";
import uni7 from "../../../assets/uni7.png";
import uni8 from "../../../assets/uni8.png";
import uni9 from "../../../assets/uni9.png";
import uni10 from "../../../assets/uni10.png";
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
          <CardUniversity
            place={1}
            name={"Universidad de Buenos Aires"}
            img={uni1}
            faculties={60}
            careers={"+"+100}
            students={100000}
            starts={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={2}
            name={"Universidad Nacional de la Plata"}
            img={uni2}
            faculties={"+"+150}
            careers={120}
            students={105000}
            starts={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={3}
            name={"Universidad de Córdoba"}
            img={uni3}
            faculties={70}
            careers={"+"+100}
            students={190000}
            starts={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={4}
            name={"Universidad de Nac. de Mar del Plata"}
            img={uni4}
            faculties={"+"+100}
            careers={160}
            students={244410}
            starts={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={5}
            name={"Universidad Nacional de Tucumán"}
            img={uni5}
            faculties={5}
            careers={80}
            students={10}
            starts={4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={6}
            name={"Universidad Nac. del Centro de Bs As"}
            img={uni6}
            faculties={20}
            careers={60}
            students={120000}
            starts={4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={7}
            name={"Universidad Nacional del Sur"}
            img={uni7}
            faculties={50}
            careers={95}
            students={12450}
            starts={4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={8}
            name={"Universidad Nacional de Quilmes"}
            img={uni8}
            faculties={+100}
            careers={90}
            students={100000}
            starts={4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={9}
            name={"Universidad Nacional de Rosario"}
            img={uni9}
            faculties={"+"+100}
            careers={60}
            students={10233}
            starts={3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardUniversity
            place={10}
            name={"Universidad Nacional del Nordeste"}
            img={uni10}
            faculties={13}
            careers={+100}
            students={140000}
            starts={3}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
