"use client";
import Pict from "@/public/assets/testimonials/feedback_1.jpg";
import { Paper } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./TestimonialList.style";

const TestimonialsList = () => {
  return (
    <Swiper slidesPerView={3} slidesPerGroupAuto>
      {[...Array(7)].map((_, index) => (
        <SwiperSlide key={index}>
          <Paper sx={style.item}>
            <Image src={Pict} alt={"feedback"} width={400} />
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsList;
