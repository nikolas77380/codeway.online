"use client";

import { Box } from "@mui/material";

import { useEffect, useRef, useState } from "react";

import CourseLessons from "./CourseLessons/CourseLessons";
import KeyPointsItem from "./KeyPointsItem/KeyPointsItem";

import { useWindowSize } from "@/hooks/useWindowSize";

import { MotionBox } from "@/utils/motionElements";
import CardInfo from "./CardInfo/CardInfo";
import DescriptionItem from "./DescriptionItem/DescriptionItem";
import style from "./MainBlock.style";

const MainBlock = () => {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(width !== undefined && width < 900);
    setIsMounted(true);
  }, [width]);

  if (!isMounted) {
    return null;
  }

  return (
    <Box sx={style.mainContainer}>
      <MotionBox
        sx={style.mobileCardInfoBlock}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CardInfo />
      </MotionBox>
      <Box sx={style.mainContent}>
        <DescriptionItem />
        <KeyPointsItem />
        <CourseLessons />
      </Box>
    </Box>
  );
};

export default MainBlock;
