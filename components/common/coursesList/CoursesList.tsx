import { TCourse } from "@/src/mocks/mocks";
import { Box } from "@mui/material";
import CourseItem from "./CourseItem/CourseItem";
import style from "./CoursesList.style";
import { MotionBox } from "@/utils/motionElements";

interface ICoursesList {
  coursesList: TCourse[];
}

const CoursesList = ({ coursesList }: ICoursesList) => {
  return (
    <Box sx={style.listWrapper}>
      {coursesList.map((item, i) => (
        <MotionBox 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        key={i}
      >
        <CourseItem course={item} />
        </MotionBox>
      ))}
    </Box>
  );
};

export default CoursesList;
