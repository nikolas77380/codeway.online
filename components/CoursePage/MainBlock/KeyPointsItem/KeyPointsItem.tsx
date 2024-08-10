'use client';

import { Box, Typography } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check';

import { useCourse } from '@/src/context/CourseContext';

import { MotionBox, MotionTypography } from '@/utils/motionElements';
import { scrollLeftToRight, scrollUp } from '@/utils/motionVariants';

import style from './KeyPointsItem.style'

const KeyPointsItem = () => {

  const { course } = useCourse();

  return (
    <Box sx={style.keyPointsContainer}>
      <MotionTypography 
        variant='h5' 
        component='span'
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        variants={scrollLeftToRight(0.2, 1.4)}
      >
        Key Points
      </MotionTypography>
      <Box sx={style.separator} />
      <Box sx={style.gridContainer}>
        {course.keyPoints.map((point, index) => (
          <MotionBox 
            sx={style.checkTextContainer} 
            key={index}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            variants={scrollUp(0.4, 1.4)}
          >
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              {point}
            </Typography>
          </MotionBox>
        ))}
      </Box>
      <Box sx={style.separator} />
    </Box>
  )
}

export default KeyPointsItem