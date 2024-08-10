'use client'

import { Box, Typography } from "@mui/material"

import { MutableRefObject } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import dynamic from "next/dynamic";

import CardInfoAvatar from "./CardInfoAvatar";
import CardInfoIncludes from "./CardInfoIncludes";
import CardInfoLinkButton from "./CardInfoLinkButton";

import style from './CardInfoItem.style'
import { scrollRightToLeft } from "@/utils/motionVariants";

const CardInfoVideoPlayerWithNoSSR = dynamic(
  () => import("@/components/CoursePage/MainBlock/CardInfoItem/CardInfoVideoPlayer"),
  { ssr: false }
);

interface MotionCardInfoItemProps {
  scrollRef?: MutableRefObject<HTMLDivElement | null>;
  isMobile?: boolean;
}

const CardInfoItem = ({ scrollRef, isMobile }: MotionCardInfoItemProps) => {

  const MotionBox = motion(Box);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1.5], ['0%', '150%']);

  return (
    <MotionBox 
      sx={style.cardInfoMainContainer} 
      style={isMobile ? {} : { translateY }}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      variants={scrollRightToLeft(0.4, 1.4)}
    >
      <Box sx={style.cardInfoContainer}>
        <CardInfoVideoPlayerWithNoSSR />
        <Typography variant="h6" component='label'>
          Instructor
        </Typography>
        <CardInfoAvatar />
        <Typography variant="h6" component='label'>
          This course includes:
        </Typography>
        <CardInfoIncludes />
        <CardInfoLinkButton />
      </Box>
    </MotionBox>
  )
}

export default CardInfoItem