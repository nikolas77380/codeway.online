"use client";
import { useTranslation } from "@/app/i18n/client";
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
import Link from "next/link";
import { useEffect } from "react";
import style from "./CourseItem.style";

interface ICourseItem {
  course: TCourse;
}
const CourseItem = ({ course }: ICourseItem) => {
  const { t } = useTranslation("CoursesList");

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
          <Link href={`/courses/${course.id}`}>
            <Button variant="contained" size="medium" sx={style.courseButton}>
              {t("button")}
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default CourseItem;
