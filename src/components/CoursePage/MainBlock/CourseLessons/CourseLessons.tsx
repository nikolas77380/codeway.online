"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  Typography,
} from "@mui/material";

import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useCourse } from "@/src/context/CourseContext";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { scrollLeftToRight, scrollUp } from "@/src/utils/motionVariants";

import { useTranslations } from "next-intl";
import style from "./CourseLessons.style";

const CourseLessons = () => {
  const { course } = useCourse();

  const t = useTranslations("CourseIdPage");

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={style.mainCourseLessonsContainer}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        variants={scrollLeftToRight(0.6, 1.4)}
        viewport={{ once: true }}
      >
        <Typography variant="h5" component="span">
          {t("main.courseLessons")}
        </Typography>
      </MotionBox>
      {course.lessons.map((lesson, index) => (
        <MotionBox
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollUp(index * 0.1, 1)}
        >
          <Box sx={style.accordionMainContainer}>
            <Accordion
              sx={style.accordion}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              TransitionComponent={Collapse}
              TransitionProps={{
                unmountOnExit: true,
                timeout: 800,
                easing: "easeInOut",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      ...style.accordionArrowContainer,
                      backgroundColor:
                        expanded === `panel${index}` ? "#fff" : "#a855f7",
                    }}
                  >
                    <KeyboardArrowDownIcon
                      sx={{
                        ...style.accordionArrowColor,
                        color:
                          expanded === `panel${index}` ? "#a855f7" : "#fff",
                      }}
                    />
                  </Box>
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={style.accordionSummary}
              >
                <Typography component="span">{lesson.lessonTopic}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={style.accordionDetails}>
                {/* {lesson.lessonsDescription.map((list, i) => (
                  <Box key={i} sx={style.listLessonsContainer}>
                    <Typography component="span">
                      {i + 1 + ". " + list}
                    </Typography>
                  </Box>
                ))} */}
                <Box sx={style.listLessonsContainer}>
                  <Typography component="span">
                    {lesson.lessonsDescription}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </MotionBox>
      ))}
    </Box>
  );
};

export default CourseLessons;
