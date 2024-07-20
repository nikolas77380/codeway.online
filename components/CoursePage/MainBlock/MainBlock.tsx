'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material'

import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import CardInfoItem from './CardInfoItem/CardInfoItem';

import { TCourseInfo } from '@/src/mocks/mocks';

import { useCourse } from '@/src/context/CourseContext';

import style from './MainBlock.style'

// interface MainBlockProps {
//   keyPoints: string[];
//   description: string;
//   lessons: TCourseInfo['lessons'];
//   course: TCourseInfo;
// }

const MainBlock = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={style.mainContainer}>
      {isMobile && (
        <Box sx={style.mobileCardInfoBlock}>
          <CardInfoItem />
        </Box>
      )}
      <Box sx={style.mainContent}>
        <DescriptionItem />
        <KeyPointsItem />
        <CourseLessons />
      </Box>
      {!isMobile && (
        <Box sx={style.cardInfoBlock}>
          <CardInfoItem />
        </Box>
      )}
    </Box>
  )
}

export default MainBlock