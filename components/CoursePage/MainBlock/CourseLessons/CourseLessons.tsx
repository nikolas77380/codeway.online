import { TCourseInfo } from '@/src/mocks/mocks';
import { Box, Typography } from '@mui/material';

interface CourseLessonsProps {
  lessons: TCourseInfo['lessons'];
}

const CourseLessons = ({ lessons }: CourseLessonsProps) => {

  

  return (
    <Box>
      {lessons.map((lesson, index) => (
        <Box key={index}>
          {lesson.lessonTopic}
          <Box>
            {lesson.lessonsList.map(list => (
              <Box key={list.id}>
                {list.lessonName}
                {list.lessonDescription}
              </Box>
            ) )}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default CourseLessons