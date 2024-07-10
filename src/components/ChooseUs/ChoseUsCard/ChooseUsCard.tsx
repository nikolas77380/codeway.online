import { Box, Typography } from '@mui/material'

import style from './../ChooseUs.style'
import React from 'react';

interface ChooseUsCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

const ChooseUsCard = ({ IconComponent, title, description }: ChooseUsCardProps) => {
  return (
    <Box sx={style.cardContainer}>
      <Box sx={style.cardWrapper}>
        <Box sx={style.iconWrapper}>
        <IconComponent fontSize='large' />
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