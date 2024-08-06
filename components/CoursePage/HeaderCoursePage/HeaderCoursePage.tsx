"use client";

import { Box, Divider, Rating, Stack, Typography, TypographyProps } from "@mui/material";
import { Groups, Info } from "@mui/icons-material";

import { useCourse } from "@/src/context/CourseContext";

import style from "./HeaderCoursePage.style";

import { courseIdHeaderScrollUp } from "@/utils/motionVariants";
import { motion, MotionProps } from "framer-motion";

const HeaderCoursePage = () => {

  const { course } = useCourse();

  const MotionTypography = motion<TypographyProps & MotionProps>(Typography);

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionTypography 
          sx={style.topic}
          initial='hidden'
          animate='visible'
          variants={courseIdHeaderScrollUp(50, 0.2, 0.7)}
        >
          {course.topic}
        </MotionTypography>
        <MotionTypography 
          sx={style.name}
          initial='hidden'
          animate='visible'
          variants={courseIdHeaderScrollUp(80, 0, 1)}
        >
          {course.name}
        </MotionTypography>
        <MotionTypography 
          variant="subtitle1" 
          sx={style.subtitle}
          initial='hidden'
          animate='visible'
          variants={courseIdHeaderScrollUp(50, 0.2, 0.7)}
        >
          {course.shortDescription}
        </MotionTypography>
        <Rating size="medium" value={course.rating} readOnly sx={style.rating} />
        <Stack
          direction={"row"}
          spacing={2}
          divider={<Divider orientation="vertical" sx={style.divider} />}
        >
          <Typography sx={style.extraInfo}>
            <Groups sx={style.icon} /> {`${course.students} students`}
          </Typography>
          <Typography sx={style.extraInfo}>
            <Info sx={style.icon} />
            {` Last updated ${course.lastUpdated}`}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeaderCoursePage;
