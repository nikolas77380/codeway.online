import React from 'react';

import { Box, Typography } from '@mui/material'

import { contactData } from '@/src/mocks/AboutUsPage/contactData';

import { ScrollAnimationWrapper } from '@/hooks/useScrollAnimationWrapper';

import MotionBox from '@/components/customComponents/MotionBox';
import { contactInfoContainer, teamScrollDown } from '@/utils/motionVariants';

import style from './ContactInfo.style'

const ContactInfo = () => {
  return (
    <ScrollAnimationWrapper threshold={0.2}>
      <Box sx={style.wrapperInfo}>
        <MotionBox
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={teamScrollDown(0.2, 1.5)}
        >
          <Typography component="label">
            Contact Information
          </Typography>
        </MotionBox>
        <MotionBox 
          initial="hidden"
          whileInView='visible'
          variants={contactInfoContainer()}
        >
          <Box sx={style.cardInfoContainer}>
            {contactData.map((item, index) => (
              <Box key={index}>
                <Box sx={style.textInfoSection}>
                  <Typography className='title'>{item.title}</Typography>
                  <Typography className='subtitle'>{item.subtitle}</Typography>
                </Box>
                {index < contactData.length - 1 && <Box sx={style.infoSeparator}></Box>}
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Box>
    </ScrollAnimationWrapper>
  )
};

export default ContactInfo;