import { Box, Typography } from "@mui/material";
import CourseItem from "../CoursesItem/CourseItem";

import style from "./CoursesList.style";

import { getTranslation } from "@/app/i18n";
import { coursesList } from "@/src/mocks/mocks";

interface ICourseList {
  lang: string;
}

const CoursesList = async ({ lang }: ICourseList) => {
  const { t } = await getTranslation(lang, "CoursesList");

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.title}>{t("title")}</Typography>
        <Typography sx={style.subtitle}>{t("subtitle")}</Typography>
        <Box sx={style.listWrapper}>
          {coursesList.map((item, i) => (
            <CourseItem key={i} course={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesList;
