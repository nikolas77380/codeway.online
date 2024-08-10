import { Box } from '@mui/material'

import { MotionTypography } from '@/utils/motionElements'
import { aboutUsPageScrollUp } from '@/utils/motionVariants'

import style from './HeaderCoursesPage.style'

const HeaderCoursesPage = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionTypography 
          sx={style.name}
          initial='hidden'
          animate='visible'
          variants={aboutUsPageScrollUp(0, 1)}
        >
          Courses
        </MotionTypography>
        <MotionTypography 
          variant="h5" 
          sx={style.subtitle}
          initial='hidden'
          animate='visible'
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          Unlock your IT potential with ByteSkill today and embark on a journey of learning and growth!
        </MotionTypography>
      </Box>
    </Box>
  )
}

export default HeaderCoursesPage