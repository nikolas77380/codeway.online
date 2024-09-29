"use client";

import { Box, Typography } from "@mui/material";

import { useCourse } from "@/src/context/CourseContext";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { scrollLeftToRight } from "@/src/utils/motionVariants";

import { useTranslation } from "@/app/i18n/client";
import style from "./DescriptionItem.style";

const DescriptionItem = () => {
  const { course } = useCourse();
  const { t } = useTranslation("CourseIdPage");

  return (
    <Box sx={style.descriptionMainContainer}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        variants={scrollLeftToRight(0, 1.2)}
        viewport={{ once: true }}
      >
        <Typography variant="h5" component="span">
          {t("main.desc")}
        </Typography>
      </MotionBox>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        variants={scrollLeftToRight(0.4, 1.4)}
        viewport={{ once: true }}
      >
        <Box sx={style.descriptionTextContainer}>
          <Typography
            variant="body1"
            component="p"
            sx={{ marginBottom: "25px" }}
          >
            {course.description}
          </Typography>
        </Box>
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
