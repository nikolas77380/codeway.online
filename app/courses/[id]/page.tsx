import style from "./CoursePage.style";

import HeaderCoursePage from "@/components/CoursePage/HeaderCoursePage/HeaderCoursePage";
import MainBlock from "@/components/CoursePage/MainBlock/MainBlock";
import RelatedCoursesBlock from "@/components/CoursePage/RelatedCoursesBlock/RelatedCoursesBlock";
import TestimonialsBlock from "@/components/CoursePage/TestimonialsBlock/TestimonialsBlock";
import { coursesInfoList } from "@/src/mocks/mocks";
import { Box } from "@mui/material";

interface CoursePageProps {
  params: {
    id: number;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {
  return (
    <Box sx={style.mainPageContainer}>
      <HeaderCoursePage {...coursesInfoList[params.id]} />
      <MainBlock />
      <TestimonialsBlock />
      <RelatedCoursesBlock />
    </Box>
  );
};

export default CoursePage;
