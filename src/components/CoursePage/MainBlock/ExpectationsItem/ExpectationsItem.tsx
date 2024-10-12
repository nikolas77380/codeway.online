"use client";

import { Box, Typography } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

import { useCourse } from "@/src/context/CourseContext";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { scrollLeftToRight, scrollUp } from "@/src/utils/motionVariants";
import { useTranslations } from "next-intl";
import style from "./Expectations.style";

const ExpectationsItem = () => {
  const { course } = useCourse();
  const t = useTranslations("CourseIdPage");

  return (
    <Box sx={style.container}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollLeftToRight(0.2, 1.4)}
      >
        <Typography variant="h5" component="span">
          {t("main.expectations")}
        </Typography>
      </MotionBox>
      <Box sx={style.separator} />
      <Box sx={style.gridContainer}>
        {course.expectations?.map((point, index) => (
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

export default ExpectationsItem;
