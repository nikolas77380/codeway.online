import { Box } from '@mui/material'
import style from '../../../app/courses/[id]/CoursePage.style'
import { TCourse } from '@/src/mocks/mocks'

interface HeaderCoursePageProps {
  course: TCourse;
}

const HeaderCoursePage = ( {course}: HeaderCoursePageProps) => {
  return (
    <Box>
      {course?.name}
    </Box>
  )
}

export default HeaderCoursePage