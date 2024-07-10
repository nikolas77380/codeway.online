"use client";
import { TCourse } from "@/src/mocks/mocks";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import style from "./CourseItem.style";

interface ICourseItem {
  course: TCourse;
}
const CourseItem = ({ course }: ICourseItem) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Paper
      sx={style.container}
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="300"
      data-aos-anchor-placement="top"
    >
      <CardMedia
        image={course.image}
        title={course.name}
        sx={{ height: 200 }}
      />
      <Box sx={style.contentWrapper}>
        <Typography variant="h6" sx={style.name}>
          {course.name}
        </Typography>
        <Box>
          <Typography sx={style.price}>{course.price}</Typography>
          <Rating
            size="small"
            value={course.rating}
            readOnly
            sx={style.rating}
          />
          <Button
            variant="contained"
            size="medium"
            href={course.link}
            sx={style.courseButton}
          >
            Enroll now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CourseItem;
