import CoursesList from "@/src/components/common/coursesList/CoursesList";
import { coursesInfoList } from "@/src/mocks/mocks";
import { Box, Typography } from "@mui/material";
import style from "./RelatedCoursesBlock.style";

interface IRelatedCoursesBlock {
  lang: string;
}

const RelatedCoursesBlock = ({ lang }: IRelatedCoursesBlock) => {
  return (
    <Box sx={style.container}>
      <Box sx={style.headContainer}>
        <Typography variant="h4" component="span">
          Related Courses
        </Typography>
        {/* <Link href={""}>
          <Button variant="contained" sx={style.button}>
            All courses
          </Button>
        </Link> */}
      </Box>
      <CoursesList coursesList={coursesInfoList} lang={lang} />
    </Box>
  );
};

export default RelatedCoursesBlock;
