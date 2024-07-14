'use client'

import { useEffect } from "react";

import Image from "next/image";

import { dataTestimonialCard } from "@/src/mocks/TestimonialSection/dataTestimonialCard";

import { Box, IconButton } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from 'aos';

import 'aos/dist/aos.css';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import style from "../Testimonials.style";

const TestimonialCard = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Box sx={style.testimonialCardContainer}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        loop
        modules={[Pagination, Navigation]}
        className="swiperContainer"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top"
      >
        {dataTestimonialCard.map(card => (
          <SwiperSlide key={card.id} className="sliderContainer">
            <Image
              src={card.img}
              alt={card.video}
              width={1200}
              height={600}
              objectFit="cover"
              objectPosition="center"
            />
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