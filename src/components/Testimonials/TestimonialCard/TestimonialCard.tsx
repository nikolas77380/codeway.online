'use client'

import { useState } from "react";

import { dataTestimonialCard } from "@/src/mocks/TestimonialSection/dataTestimonialCard";

import { Box, IconButton } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import style from "../Testimonials.style";

const TestimonialCard = () => {

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const handleVideoClick = (id: number) => {
    setActiveVideo(id);
  };

  return (
    <Box sx={style.testimonialCardContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        loop
        modules={[Pagination, Navigation]}
        className="swiperContainer"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {dataTestimonialCard.map(card => (
          <SwiperSlide className="sliderContainer" key={card.id}>
            <Box
              onClick={() => handleVideoClick(card.id)}
              sx={style.sliderWrapper}
            >
              <Box component="iframe"
                  width="100%"
                  height="720px"
                  src={card.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  allowFullScreen
                  onClick={() => handleVideoClick(card.id)}
                  sx={{ pointerEvents: activeVideo === card.id ? 'auto' : 'none' }}
              ></Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={style.navButtonsContainer}>
        <IconButton className="custom-prev" sx={style.navButton}>
          <ArrowBackIosNewIcon sx={style.arrowIcon} />
        </IconButton>
        <IconButton className="custom-next" sx={style.navButton}>
          <ArrowForwardIosIcon sx={style.arrowIcon} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TestimonialCard