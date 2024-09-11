"use client";

import { Groups, Info } from "@mui/icons-material";
import { Box, Divider, Rating, Stack, Typography } from "@mui/material";

import { useCourse } from "@/src/context/CourseContext";

import { useTranslation } from "@/app/i18n/client";

import { courseIdHeaderScrollUp } from "@/src/utils/motionVariants";

import MotionBox from "@/src/components/customComponents/MotionBox";

import style from "./HeaderCoursePage.style";

const HeaderCoursePage = () => {
  const { course } = useCourse();
  const { t } = useTranslation("CourseIdPage");

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={courseIdHeaderScrollUp(50, 0.2, 0.7)}
        >
          <Typography sx={style.topic}>{course.topic}</Typography>
        </MotionBox>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={courseIdHeaderScrollUp(80, 0, 1)}
        >
          <Typography sx={style.name} variant="h2">
            {course.name}
          </Typography>
        </MotionBox>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={courseIdHeaderScrollUp(50, 0.2, 0.7)}
        >
          <Typography sx={style.subtitle} variant="h6">
            {course.shortDescription}
          </Typography>
        </MotionBox>
        <Rating
          size="medium"
          value={course.rating}
          readOnly
          sx={style.rating}
        />
        <Stack
          direction={"row"}
          spacing={2}
          divider={<Divider orientation="vertical" sx={style.divider} />}
        >
          <Typography sx={style.extraInfo}>
            <Groups sx={style.icon} />{" "}
            {`${course.students} ${t("header.students")}`}
          </Typography>
          <Typography sx={style.extraInfo}>
            <Info sx={style.icon} />
            {` ${t("header.lastUpdated")} ${course.lastUpdated}`}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeaderCoursePage;
