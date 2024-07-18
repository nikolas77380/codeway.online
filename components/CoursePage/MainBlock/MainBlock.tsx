import { Box } from '@mui/material'

import style from './MainBlock.style'
import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import { TCourseInfo } from '@/src/mocks/mocks';

interface MainBlockProps {
  keyPoints: string[];
  description: string;
  lessons: TCourseInfo['lessons'];
}

const MainBlock = ({ keyPoints, description, lessons }: MainBlockProps) => {
  return (
    <Box sx={style.mainContainer}>
      <DescriptionItem shortDescription={description} />
      <KeyPointsItem keyPoints={keyPoints} />
      <CourseLessons lessons={lessons} />
    </Box>
  )
}

export default MainBlock