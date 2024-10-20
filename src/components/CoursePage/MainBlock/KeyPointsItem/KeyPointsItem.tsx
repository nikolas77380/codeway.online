"use client";

import { Box, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

import { useCourse } from "@/src/context/CourseContext";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { scrollLeftToRight, scrollUp } from "@/src/utils/motionVariants";

import { useTranslations } from "next-intl";
import style from "./KeyPointsItem.style";

const KeyPointsItem = () => {
  const { course } = useCourse();
  const t = useTranslations("CourseIdPage");

  return (
    <Box sx={style.keyPointsContainer}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollLeftToRight(0.2, 1.4)}
      >
        <Typography variant="h5" component="span">
          {t("main.keyPoints")}
        </Typography>
      </MotionBox>
      <Box sx={style.separator} />
      <Box sx={style.gridContainer}>
        {course.keyPoints.map((point, index) => (
          <MotionBox
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollUp(0.4, 1.4)}
          >
            <Box sx={style.checkTextContainer}>
              <CheckIcon fontSize="medium" />
              <Typography component="p">{point}</Typography>
            </Box>
          </MotionBox>
        ))}
      </Box>
      <Box sx={style.separator} />
    </Box>
  );
};

export default KeyPointsItem;
