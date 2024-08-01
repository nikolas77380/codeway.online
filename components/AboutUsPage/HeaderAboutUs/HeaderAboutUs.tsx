'use client'

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { aboutUsPageScrollUp } from '@/utils/motionVariants';

import style from './HeaderAboutUs.style'


const HeaderAboutUs = () => {

  const MotionTypography = motion(Typography);

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionTypography 
          sx={style.name}
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScrollUp(0, 1)}
        >
          About Us
        </MotionTypography>
        <MotionTypography 
          sx={style.subtitle}
          variant="h5"
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          Join our community of learners and start your journey towards success.
        </MotionTypography>
      </Box>
    </Box>
  );
}

export default HeaderAboutUs