import { aboutUsPageScrollUp } from "@/src/utils/motionVariants";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import MotionBox from "../customComponents/MotionBox";
import style from "./HeaderCoursesPage.style";

const HeaderCoursesPage = () => {
  const t = useTranslations("CoursesPage");

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
