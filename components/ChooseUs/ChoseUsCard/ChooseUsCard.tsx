'use client'

import React from 'react';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

import style from './../ChooseUs.style'

interface ChooseUsCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

const ChooseUsCard = ({ IconComponent, title, description }: ChooseUsCardProps) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={style.cardContainer}>
      <Box sx={style.cardWrapper}>
        <Box sx={style.iconWrapper}>
        <IconComponent fontSize={isMobile ? 'medium' : 'large'} />
        </Box>
        <Box sx={style.cardTitle}>
          <Typography variant='h6' component='span'>
            {title}
          </Typography>
          <Typography variant='body1' component='p'>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChooseUsCard