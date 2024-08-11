import { Box } from "@mui/material";

import { MotionTypography } from "@/utils/motionElements";
import { aboutUsPageScrollUp } from "@/utils/motionVariants";

import { getTranslation } from "@/app/i18n";
import style from "./HeaderCoursesPage.style";

interface IHeaderPage {
  lang: string;
}

const HeaderCoursesPage = async ({ lang }: IHeaderPage) => {
  const { t } = await getTranslation(lang, "CoursesPage");

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionTypography
          initial="hidden"
          animate="visible"
          variant="h2"
          variants={aboutUsPageScrollUp(0, 1)}
        >
          {t("title")}
        </MotionTypography>
      </Box>
    </Box>
  );
};

export default HeaderCoursesPage;
