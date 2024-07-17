'use client';

import style from './CoursePage.style'

import { useRouter, useParams } from "next/navigation";
import { Box, CardMedia, Paper, Typography, Rating, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { TCourse, coursesList } from "@/src/mocks/mocks";
import HeaderCoursePage from '@/components/CoursePage/HeaderCoursePage/HeaderCoursePage';
import MainBlock from '@/components/CoursePage/MainBlock/MainBlock';
import TestimonialsBlock from '@/components/CoursePage/TestimonialsBlock/TestimonialsBlock';
import RelatedCoursesBlock from '@/components/CoursePage/RelatedCoursesBlock/RelatedCoursesBlock';

interface CoursePageProps {
  params: {
    id: number;
  };
}

const CoursePage = ({ params }: CoursePageProps) => {

  return (
    <Box sx={style.mainPageContainer}>
      <HeaderCoursePage course={coursesList[params.id]} />
      <MainBlock />
      <TestimonialsBlock />
      <RelatedCoursesBlock />
    </Box>
  )
};

export default CoursePage;