import HeaderCoursePage from "@/components/CoursePage/HeaderCoursePage/HeaderCoursePage";
import MainBlock from "@/components/CoursePage/MainBlock/MainBlock";
import Testimonials from "@/components/Testimonials/Testimonials";
import { CourseProvider } from "@/src/context/CourseContext";
import { coursesInfoList } from "@/src/mocks/mocks";
import { Box } from "@mui/material";
import style from "./CoursePage.style";

interface CoursePageProps {
  params: {
    id: number;
    lang: string;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const course = coursesInfoList[params.id];

  if (!course) {
    return <Box>Course Not Found</Box>;
  }

  return (
    <CourseProvider course={course}>
      <Box sx={style.mainPageContainer}>
        <HeaderCoursePage />
        <MainBlock />
        <Testimonials lang={params.lang} />
        {/* <RelatedCoursesBlock lang={params.lang} /> */}
      </Box>
    </CourseProvider>
  );
};

export default CoursePage;
