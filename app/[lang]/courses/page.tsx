import { Box } from '@mui/material';
import style from './CoursesPage.style';
import HeaderCoursesPage from '@/components/CoursesPage/HeaderCoursesPage';
import CoursesListBlock from '@/components/coursesListBlock/CoursesListBlock';

interface ICoursesPage {
  params: {
    lang: string;
  };
}

const CoursesPage = ({ params: { lang } }: ICoursesPage) => {
  return (
    <Box sx={style.mainPageContainer}>
      <HeaderCoursesPage />
      <Box sx={style.courseContainer}>
        <CoursesListBlock lang={lang} />
      </Box>
    </Box>
  )
}

export default CoursesPage