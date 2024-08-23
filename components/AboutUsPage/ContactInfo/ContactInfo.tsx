import React from 'react';

import { Box, Typography } from '@mui/material'

import { contactData } from '@/src/mocks/AboutUsPage/contactData';

import style from './ContactInfo.style'
import { ScrollAnimationWrapper } from '@/hooks/useScrollAnimationWrapper';
import { MotionBox } from '@/utils/motionElements';
import { contactInfoContainer, teamScrollDown } from '@/utils/motionVariants';

const ContactInfo = () => {
  return (
    <ScrollAnimationWrapper threshold={0.2}>
    <Box sx={style.mainContainer}>
      <Box sx={style.wrapper}>
      <MotionBox
        initial='hidden'
        whileInView='visible'
        variants={teamScrollDown(0.2, 1.5)}
      >
        <Typography component="label">
          Contact Information
        </Typography>
      </MotionBox>
        <MotionBox 
          sx={style.cardContainer}
          initial="hidden"
          whileInView='visible'
          variants={contactInfoContainer()}
        >
          {contactData.map((item, index) => (
            <Box key={index}>
              <Box sx={style.textSection}>
                <Typography className='title'>{item.title}</Typography>
                <Typography className='subtitle'>{item.subtitle}</Typography>
              </Box>
              {index < contactData.length - 1 && <Box sx={style.separator}></Box>}
            </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
    </ScrollAnimationWrapper>
  )
};

export default ContactInfo;