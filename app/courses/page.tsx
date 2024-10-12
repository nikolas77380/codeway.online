import HeaderCoursesPage from "@/src/components/CoursesPage/HeaderCoursesPage";
import CoursesList from "@/src/components/common/coursesList/CoursesList";
import MotionBox from "@/src/components/customComponents/MotionBox";
import { coursesInfoList } from "@/src/mocks/mocks";
import { aboutUsPageScrollUp } from "@/src/utils/motionVariants";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import style from "./CoursesPage.style";

const CoursesPage = () => {
  const t = useTranslations("CoursesPage");

  return (
    <Box sx={style.mainPageContainer}>
      <HeaderCoursesPage />
      <Box sx={style.courseContainer}>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          <Typography variant="h6">{t("subtitle")}</Typography>
        </MotionBox>
        <CoursesList coursesList={coursesInfoList} />
      </Box>
    </Box>
  );
};

export default CoursesPage;
