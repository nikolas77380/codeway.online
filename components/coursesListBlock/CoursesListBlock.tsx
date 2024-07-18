import { Box, Typography } from "@mui/material";

import { coursesList } from "@/src/mocks/mocks";
import CoursesList from "../common/coursesList/CoursesList";
import style from "./CoursesListBlock.style";

const CoursesListBlock = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.title}>Featured Online Course</Typography>
        <Typography sx={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <CoursesList coursesList={coursesList} />
      </Box>
    </Box>
  );
};

export default CoursesListBlock;
