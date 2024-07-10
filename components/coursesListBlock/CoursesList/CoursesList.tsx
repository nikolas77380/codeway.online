import { Box, Typography } from "@mui/material";
import CourseItem from "../CoursesItem/CourseItem";

import style from "./CoursesList.style";

import { coursesList } from "@/src/mocks/mocks";

const CoursesList = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.title}>Featured Online Course</Typography>
        <Typography sx={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
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
