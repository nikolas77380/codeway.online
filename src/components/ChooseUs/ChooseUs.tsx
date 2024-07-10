'use client'

import { useEffect } from 'react'

import { Box, Typography } from '@mui/material'

import ChooseUsCard from './ChoseUsCard/ChooseUsCard'

import { dataChooseUsCard } from '@/src/mocks/ChooseUsItem/dataChooseUsCard'

import AOS from 'aos';

import 'aos/dist/aos.css';

import style from './ChooseUs.style'

const ChooseUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 500,
      easing: 'ease-out',
    });
  }, []);

  return (
    <Box sx={style.mainSection}>
      <Box 
        id="text-section" 
        sx={style.textSection}
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-anchor-placement="top-center"
      >
        <Typography variant='h6' component='span'>
          Why Choose Us
        </Typography>
        <Typography variant='h3' component='p' className="title">
          It{"'s"} the bright one, it{"'s"} the right one, {"\n"}
          that{"'s"} education.
        </Typography>
        <Typography variant='body1' component='p' className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec{"\n"}
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
      </Box>
      <Box 
        id="card-section" 
        sx={style.cardSection}
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1400"
      >
        {dataChooseUsCard.map(card => (
          <ChooseUsCard 
            key={card.id}
            IconComponent={card.icon}
            {...card}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ChooseUs