import HeaderCoursePage from "@/src/components/CoursePage/HeaderCoursePage/HeaderCoursePage";
import MainBlock from "@/src/components/CoursePage/MainBlock/MainBlock";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import { CourseProvider } from "@/src/context/CourseContext";
import { coursesInfoList } from "@/src/mocks/mocks";
import { Box } from "@mui/material";
import { Metadata } from "next";
import style from "./CoursePage.style";

interface CoursePageProps {
  params: {
    id: string;
    lang: string;
  };
}

const getCourseData = (id: string) =>
  coursesInfoList.find((el) => el.id === id);

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const course = getCourseData(params.id);

  return {
    title: course ? course.title : "Course Not Found",
  };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const course = getCourseData(params.id);

  if (!course) {
    return <Box>Course Not Found</Box>;
  }

  return (
    <CourseProvider course={course}>
      <Box sx={style.mainPageContainer}>
        <HeaderCoursePage />
        <MainBlock />
        <Testimonials lang={params.lang} />
      </Box>
    </CourseProvider>
  );
};

export default CoursePage;
