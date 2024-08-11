import { getTranslation } from "@/app/i18n";
import HeaderCoursesPage from "@/components/CoursesPage/HeaderCoursesPage";
import CoursesList from "@/components/common/coursesList/CoursesList";
import { coursesInfoList } from "@/src/mocks/mocks";
import { MotionTypography } from "@/utils/motionElements";
import { aboutUsPageScrollUp } from "@/utils/motionVariants";
import { Box } from "@mui/material";
import style from "./CoursesPage.style";

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
        <MotionTypography
          variant="h6"
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          {t("subtitle")}
        </MotionTypography>
        <CoursesList coursesList={coursesInfoList} lang={lang} />
      </Box>
    </Box>
  );
};

export default CoursesPage;
