import CoursesList from "@/components/common/coursesList/CoursesList";
import { coursesList } from "@/src/mocks/mocks";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import style from "./RelatedCoursesBlock.style";

const RelatedCoursesBlock = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.headContainer}>
        <Typography variant="h4" component='span'>Related Courses</Typography>
        <Link href={""}>
          <Button variant="contained" sx={style.button}>
            All courses
          </Button>
        </Link>
      </Box>
      <CoursesList coursesList={coursesList} />
    </Box>
  );
};

export default RelatedCoursesBlock;
