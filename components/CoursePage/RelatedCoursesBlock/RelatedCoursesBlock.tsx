import CoursesList from "@/components/common/coursesList/CoursesList";
import { coursesList } from "@/src/mocks/mocks";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import style from "./RelatedCoursesBlock.style";

const RelatedCoursesBlock = () => {
  return (
    <Box sx={style.container}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h3">Related Courses</Typography>
        <Link href={""}>
          <Button variant="contained" sx={style.button}>
            All courses
          </Button>
        </Link>
      </Stack>
      <CoursesList coursesList={coursesList} />
    </Box>
  );
};

export default RelatedCoursesBlock;
