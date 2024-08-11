import { getTranslation } from "@/app/i18n";

import { Box, Typography } from "@mui/material";

import { coursesInfoList } from "@/src/mocks/mocks";
import CoursesList from "../common/coursesList/CoursesList";
import style from "./CoursesListBlock.style";

interface ICoursesListBlock {
  lang: string;
}

const CoursesListBlock = async ({ lang }: ICoursesListBlock) => {
  const { t } = await getTranslation(lang, "CoursesList");

  return (
    <Box id="courses" sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography variant="h2" sx={style.title}>
          {t("title")}
        </Typography>
        <Typography variant="h6" sx={style.subtitle}>
          {t("subtitle")}
        </Typography>
        <CoursesList coursesList={coursesInfoList} lang={lang} />
      </Box>
    </Box>
  );
};

export default CoursesListBlock;
