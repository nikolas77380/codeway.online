import { getTranslation } from "@/app/i18n";

import { coursesList } from "@/src/mocks/mocks";

import { Box, Typography } from "@mui/material";

import CoursesList from "../common/coursesList/CoursesList";

import style from "./CoursesListBlock.style";

interface ICoursesListBlock {
  lang: string;
}

const CoursesListBlock = async ({ lang }: ICoursesListBlock) => {
  const { t } = await getTranslation(lang, "CoursesList");

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.title}>{t("title")}</Typography>
        <Typography sx={style.subtitle}>{t("subtitle")}</Typography>
        <CoursesList coursesList={coursesList} />
      </Box>
    </Box>
  );
};

export default CoursesListBlock;
