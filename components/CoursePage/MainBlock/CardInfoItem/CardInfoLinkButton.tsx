'use client';

import { Button } from "@mui/material";

import Link from "next/link";

import { useCourse } from "@/src/context/CourseContext";

import style from './CardInfoItem.style'

const CardInfoLinkButton = () => {

  const { course } = useCourse();

  return (
    <Link href={course.link}>
      <Button variant='contained' sx={style.cardInfoButton}>
        Enroll Now
      </Button>
    </Link>
  )
}

export default CardInfoLinkButton