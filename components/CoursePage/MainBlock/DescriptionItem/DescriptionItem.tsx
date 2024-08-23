"use client";

import { Box, Typography } from "@mui/material";

import { useCourse } from "@/src/context/CourseContext";

import { MotionBox, MotionTypography } from "@/utils/motionElements";
import { scrollLeftToRight } from "@/utils/motionVariants";

import { useTranslation } from "@/app/i18n/client";
import style from "./DescriptionItem.style";

const DescriptionItem = () => {
  const { course } = useCourse();
  const { t } = useTranslation("CourseIdPage");

  return (
    <Box sx={style.descriptionMainContainer}>
      <MotionTypography
        variant="h5"
        component="span"
        initial="hidden"
        whileInView="visible"
        variants={scrollLeftToRight(0, 1.2)}
        viewport={{ once: true }}
      >
        {t("main.desc")}
      </MotionTypography>
      <MotionBox
        sx={style.descriptionTextContainer}
        initial="hidden"
        whileInView="visible"
        variants={scrollLeftToRight(0.4, 1.4)}
        viewport={{ once: true }}
      >
        <Typography variant="body1" component="p" sx={{ marginBottom: "25px" }}>
          {course.description}
        </Typography>
      </MotionBox>
      {/* <MotionBox
        sx={style.descriptionImage}
        initial="hidden"
        whileInView="visible"
        variants={teamCardsZoomIn()}
        viewport={{ once: true }}
      >
        <Image
          src="/coursePage/descriptionImg.jpg"
          alt="descImg"
          width={400}
          height={400}
        />
      </MotionBox> */}
    </Box>
  );
};

export default DescriptionItem;
