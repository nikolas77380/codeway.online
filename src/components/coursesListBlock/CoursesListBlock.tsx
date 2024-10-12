import { coursesInfoList } from "@/src/mocks/mocks";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import CoursesList from "../common/coursesList/CoursesList";
import style from "./CoursesListBlock.style";

const CoursesListBlock = () => {
  const t = useTranslations("CoursesList");
  return (
    <Box id="courses" sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography variant="h2" sx={style.title}>
          {t("title")}
        </Typography>
        <Typography variant="h6" sx={style.subtitle} component={"p"}>
          {t("subtitle")}
        </Typography>
        <CoursesList coursesList={coursesInfoList} />
      </Box>
    </Box>
  );
};

export default CoursesListBlock;
