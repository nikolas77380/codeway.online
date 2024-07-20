import { Box, Typography } from '@mui/material'

import Avatar from '@mui/material/Avatar';

import { TCourseInfo } from '@/src/mocks/mocks';

import style from './/CardInfoItem.style'

interface CardInfoAvatarProps {
  course: TCourseInfo;
}

const CardInfoAvatar = ({ course }: CardInfoAvatarProps) => {
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