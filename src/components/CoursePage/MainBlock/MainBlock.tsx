"use client";

import { Box } from "@mui/material";

import CourseLessons from "./CourseLessons/CourseLessons";
import KeyPointsItem from "./KeyPointsItem/KeyPointsItem";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { useCourse } from "@/src/context/CourseContext";
import CardInfo from "./CardInfo/CardInfo";
import DescriptionItem from "./DescriptionItem/DescriptionItem";
import ExpectationsItem from "./ExpectationsItem/ExpectationsItem";
import style from "./MainBlock.style";

const MainBlock = () => {
  const { course } = useCourse();

  return (
    <Box sx={style.mainContainer}>
      <MotionBox
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CardInfo />
      </MotionBox>
      <Box sx={style.mainContent}>
        <DescriptionItem />
        <KeyPointsItem />
        {course.expectations && <ExpectationsItem />}
        <CourseLessons />
      </Box>
    </Box>
  );
};

export default MainBlock;
