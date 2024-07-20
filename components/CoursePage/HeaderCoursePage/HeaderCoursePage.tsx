"use client";

import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import { Groups, Info } from "@mui/icons-material";

import { useEffect } from "react";

import { useCourse } from "@/src/context/CourseContext";

import Aos from "aos";

import style from "./HeaderCoursePage.style";

const HeaderCoursePage = () => {

  const { course } = useCourse();

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-anchor-placement="top"
          data-aos-easing=""
          sx={style.topic}
        >
          {course.topic}
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top"
          variant="h3"
          sx={style.name}
        >
          {course.name}
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-anchor-placement="top"
          variant="subtitle1"
          sx={style.subtitle}
        >
          {course.shortDescription}
        </Typography>
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
