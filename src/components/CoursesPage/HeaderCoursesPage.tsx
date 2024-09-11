import { Box, Typography } from "@mui/material";

import { aboutUsPageScrollUp } from "@/src/utils/motionVariants";

import { getTranslation } from "@/app/i18n";

import MotionBox from "../customComponents/MotionBox";

import style from "./HeaderCoursesPage.style";

interface IHeaderPage {
  lang: string;
}

const HeaderCoursesPage = async ({ lang }: IHeaderPage) => {
  const { t } = await getTranslation(lang, "CoursesPage");

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScrollUp(0, 1)}
        >
          <Typography variant="h2">{t("title")}</Typography>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeaderCoursesPage;
