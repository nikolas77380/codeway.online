import { TCourse } from "@/src/mocks/mocks";
import { MotionBox } from "@/utils/motionElements";
import { Box } from "@mui/material";
import CourseItem from "./CourseItem/CourseItem";
import style from "./CoursesList.style";

interface ICoursesList {
  coursesList: TCourse[];
  lang: string;
}

const CoursesList = ({ coursesList, lang }: ICoursesList) => {
  return (
    <Box sx={style.listWrapper}>
      {coursesList.map((item, i) => (
        <MotionBox
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={i}
        >
          <CourseItem course={item} lang={lang} />
        </MotionBox>
      ))}
    </Box>
  );
};

export default CoursesList;
