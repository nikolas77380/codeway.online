import { Box } from '@mui/material'

import style from './MainBlock.style'
import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import { TCourseInfo } from '@/src/mocks/mocks';

interface MainBlockProps {
  keyPoints: string[];
  shortDescription: string;
  lessons: TCourseInfo['lessons'];
}

const MainBlock = ({ keyPoints, shortDescription, lessons }: MainBlockProps) => {
  return (
    <Box sx={style.mainContainer}>
      <DescriptionItem shortDescription={shortDescription} />
      <KeyPointsItem keyPoints={keyPoints} />
      <CourseLessons lessons={lessons} />
    </Box>
  )
}

export default MainBlock