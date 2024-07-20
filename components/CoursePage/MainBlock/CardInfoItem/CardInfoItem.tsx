import { Box, Button, Typography } from "@mui/material"

import Link from "next/link";

import CardInfoVideoPlayer from "./CardInfoVideoPlayer";
import CardInfoAvatar from "./CardInfoAvatar";
import CardInfoIncludes from "./CardInfoIncludes";

import { TCourseInfo } from "@/src/mocks/mocks"

import style from './CardInfoItem.style'

interface CardInfoItemProps {
  course: TCourseInfo;
}

const CardInfoItem = ({ course }: CardInfoItemProps) => {
  return (
    <Box sx={style.cardInfoMainContainer}>
      <Box sx={style.cardInfoContainer}>
        <CardInfoVideoPlayer course={course} />
        <Typography variant="h6" component='label'>
          Instructor
        </Typography>
        <CardInfoAvatar course={course} />
        <Typography variant="h6" component='label'>
          This course includes:
        </Typography>
        <CardInfoIncludes course={course} />
        <Link href={course.link}>
          <Button variant='contained' sx={style.cardInfoButton}>
            Enroll Now
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default CardInfoItem