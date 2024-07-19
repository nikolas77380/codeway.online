
import { Box, Button, Typography } from '@mui/material'

import style from './MainBlock.style'
import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import { TCourseInfo } from '@/src/mocks/mocks';
import CardInfoItem from './CardInfoItem/CardInfoItem';
import { useEffect, useState } from 'react'
import CardInfoVideoPlayer from './CardInfoItem/CardInfoVideoPlayer'
import CardInfoAvatar from './CardInfoItem/CardInfoAvatar'
import CardInfoIncludes from './CardInfoItem/CardInfoIncludes'
import Link from 'next/link'

interface MainBlockProps {
  keyPoints: string[];
  description: string;
  lessons: TCourseInfo['lessons'];
  course: TCourseInfo;
}

const MainBlock = ({ keyPoints, description, lessons, course }: MainBlockProps) => {

  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.mainContent}>
        <DescriptionItem description={description} />
        <KeyPointsItem keyPoints={keyPoints} />
        <CourseLessons lessons={lessons} />
      </Box>
      <Box sx={style.cardInfoBlock}>
        <CardInfoItem course={course} />
      </Box>
    </Box>
  )
}

export default MainBlock