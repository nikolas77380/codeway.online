import { TCourse } from "@/src/mocks/mocks";
import { Box } from "@mui/material";
import CourseItem from "./CourseItem/CourseItem";
import style from "./CoursesList.style";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimationWrapper";
import { MotionBox } from "@/utils/motionElements";
import { ourValueScrollRightToLeft } from "@/utils/motionVariants";

interface ICoursesList {
  coursesList: TCourse[];
}

const CoursesList = ({ coursesList }: ICoursesList) => {
  return (
    <ScrollAnimationWrapper threshold={0.1}>
    <MotionBox 
      sx={style.listWrapper}
      initial='hidden'
      animate='visible'
      variants={ourValueScrollRightToLeft(1000, 0, 0.1, 1.7)}
    >
      {coursesList.map((item, i) => (
        <CourseItem key={i} course={item} />
      ))}
    </MotionBox>
    </ScrollAnimationWrapper>
  );
};

export default CoursesList;
