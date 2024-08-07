'use client'

import { TCourse } from "@/src/mocks/mocks";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import "aos/dist/aos.css";
import Link from "next/link";
import style from "./CourseItem.style";
import { useTranslation } from "@/app/i18n/client";

interface ICourseItem {
  course: TCourse;
}
const CourseItem = ({ course }: ICourseItem) => {

  const { t } = useTranslation("CoursesList");
  
  return (
    <Paper
      sx={style.container}
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
