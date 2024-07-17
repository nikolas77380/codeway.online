'use client';

import style from './CoursePage.style'

import { useRouter, useParams } from "next/navigation";
import { Box, CardMedia, Paper, Typography, Rating, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { TCourse, coursesList } from "@/src/mocks/mocks";
import HeaderCoursePage from '@/components/CoursePage/HeaderCoursePage';

interface CoursePageProps {
  params: {
    id: number;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {

  return (
    <Box sx={style.mainPageContainer}>
      <HeaderCoursePage course={coursesList[params.id]} />
    </Box>
  )
};

export default CoursePage;