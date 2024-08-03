import { TCourse } from "@/src/mocks/mocks";
import { Box } from "@mui/material";
import CourseItem from "./CourseItem/CourseItem";
import style from "./CoursesList.style";

interface ICoursesList {
  coursesList: TCourse[];
}

const CoursesList = ({ coursesList }: ICoursesList) => {
  return (
    <Box sx={style.listWrapper}>
      {coursesList.map((item, i) => (
        <CourseItem key={i} course={item} />
      ))}
    </Box>
  );
};

export default CoursesList;
