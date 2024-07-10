'use client'

import { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'

import ChooseUsCard from './ChoseUsCard/ChooseUsCard'

import { dataChooseUsCard } from '@/src/mocks/ChooseUsItem/dataChooseUsCard'

import style from './ChooseUs.style'

const ChooseUs = () => {

  const [textSectionVisible, setTextSectionVisible] = useState(false);
  const [cardSectionVisible, setCardSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textSectionPosition = document.getElementById('text-section')?.getBoundingClientRect().top;
      const cardSectionPosition = document.getElementById('card-section')?.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (textSectionPosition && textSectionPosition < screenPosition) {
        setTextSectionVisible(true);
      }
      if (cardSectionPosition && cardSectionPosition < screenPosition) {
        setCardSectionVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={style.mainSection}>
      <Box 
        id="text-section" 
        sx={{ 
          ...style.textSection, 
          animation: textSectionVisible ? 'slideDown 1s ease-out' : 'none' 
        }}
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
        sx={{ 
          ...style.cardSection, 
          animation: cardSectionVisible ? 'slideInRight 2s ease-out' : 'none' 
        }}
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