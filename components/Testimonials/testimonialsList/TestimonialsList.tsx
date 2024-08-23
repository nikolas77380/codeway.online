"use client";
import { feedbackArray } from "@/constants/imageImports";
import { Paper } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./TestimonialList.style";

const TestimonialsList = () => {
  return (
    <Swiper
      initialSlide={2}
      style={
        {
          padding: "20px",
          "--swiper-pagination-color": "#a855f7",
          "--swiper-pagination-bullet-inactive-color": "#FFF",
          "--swiper-pagination-bullet-size": "10px",
          maskImage:
            "linear-gradient( to right, transparent, #000 10% 90%, transparent)",
        } as React.CSSProperties
      }
      speed={600}
      parallax={true}
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      slidesPerGroupAuto
    >
      {feedbackArray.map((item, index) => (
        <SwiperSlide key={index} style={{ width: 450 }}>
          <Paper sx={style.item} data-swiper-parallax="-300">
            <Image
              src={item}
              alt={"feedback"}
              width={350}
              style={{ height: "auto" }}
            />
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsList;
