import { getTranslation } from "@/app/i18n";
import HeaderCoursesPage from "@/components/CoursesPage/HeaderCoursesPage";
import CoursesList from "@/components/common/coursesList/CoursesList";
import { coursesInfoList } from "@/src/mocks/mocks";
import { aboutUsPageScrollUp } from "@/utils/motionVariants";
import { Box, Typography } from "@mui/material";
import style from "./CoursesPage.style";
import MotionBox from "@/components/customComponents/MotionBox";

interface ICoursesPage {
  params: {
    lang: string;
  };
}

const CoursesPage = async ({ params: { lang } }: ICoursesPage) => {
  const { t } = await getTranslation(lang, "CoursesPage");

  return (
    <Box sx={style.mainPageContainer}>
      <HeaderCoursesPage lang={lang} />
      <Box sx={style.courseContainer}>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          <Typography variant="h6">
            {t("subtitle")}
          </Typography>
        </MotionBox>
        <CoursesList coursesList={coursesInfoList} lang={lang} />
      </Box>
    </Box>
  );
};

export default CoursesPage;
