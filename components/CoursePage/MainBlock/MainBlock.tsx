'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'

import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import CardInfoItem from './CardInfoItem/CardInfoItem';

import { TCourseInfo } from '@/src/mocks/mocks';

import style from './MainBlock.style'

interface MainBlockProps {
  keyPoints: string[];
  description: string;
  lessons: TCourseInfo['lessons'];
  course: TCourseInfo;
}

const MainBlock = ({ keyPoints, description, lessons, course }: MainBlockProps) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={style.mainContainer}>
      {isMobile && (
        <Box sx={style.mobileCardInfoBlock}>
          <CardInfoItem course={course} />
        </Box>
      )}
      <Box sx={style.mainContent}>
        <DescriptionItem description={description} />
        <KeyPointsItem keyPoints={keyPoints} />
        <CourseLessons lessons={lessons} />
      </Box>
      {!isMobile && (
        <Box sx={style.cardInfoBlock}>
          <CardInfoItem course={course} />
        </Box>
      )}
    </Box>
  )
}

export default MainBlock