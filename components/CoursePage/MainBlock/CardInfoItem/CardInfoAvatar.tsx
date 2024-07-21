'use client';

import { Box, Typography } from '@mui/material'

import Avatar from '@mui/material/Avatar';

import style from './/CardInfoItem.style'
import { useCourse } from '@/src/context/CourseContext';

const CardInfoAvatar = () => {

  const { course } = useCourse();

  return (
    <Box sx={style.avatarMainContainer}>
      <Box sx={style.avatarWrapper}>
        <Avatar alt="Mykolai Kipnyak" src={course.instructor.image} component='image' />
      </Box>
      <Box sx={style.avatarTextContainer}>
        <Typography component='label'>
          {course.instructor.name}
        </Typography>
        <Typography component='span'>
          {course.instructor.rank}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardInfoAvatar