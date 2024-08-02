import { Box } from "@mui/material";

import HeaderCoursePage from "@/components/CoursePage/HeaderCoursePage/HeaderCoursePage";
import MainBlock from "@/components/CoursePage/MainBlock/MainBlock";
import RelatedCoursesBlock from "@/components/CoursePage/RelatedCoursesBlock/RelatedCoursesBlock";
import Testimonials from "@/components/Testimonials/Testimonials";

import { coursesInfoList } from "@/src/mocks/mocks";

import { CourseProvider } from "@/src/context/CourseContext";

import style from "./CoursePage.style";

interface CoursePageProps {
  params: {
    id: number;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {

  const course = coursesInfoList[params.id];

  if(!course) {
    return <Box>Course Not Found</Box>
  };

  return (
    <CourseProvider course={course}>
      <Box sx={style.mainPageContainer}>
        <HeaderCoursePage />
        <MainBlock />
        <Testimonials />
        <RelatedCoursesBlock />
      </Box>
    </CourseProvider>
  );
};

export default CoursePage;
