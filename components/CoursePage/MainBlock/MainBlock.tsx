'use client';

import { Box, Typography } from '@mui/material'

import { useEffect, useRef, useState } from 'react';

import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import CardInfoItem from './CardInfoItem/CardInfoItem';

import { useWindowSize } from '@/hooks/useWindowSize';

import style from './MainBlock.style'
import useScrollPosition from '@/hooks/useScrollFixed';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { aboutUsPageScroLeftToRight } from '@/utils/motionVariants';


const MainBlock = () => {

  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mainBlockRef = useRef<HTMLDivElement | null>(null);
  const cardInfoRef = useRef<HTMLDivElement | null>(null);

  const { isFixed, bottom  } = useScrollPosition(mainBlockRef, cardInfoRef);

  useEffect(() => {
    setIsMobile(width !== undefined && width < 600);
    setIsMounted(true);
  }, [width]);

  if (!isMounted) {
    return null; 
  };

  return (
    <Box sx={style.mainContainer} ref={mainBlockRef}>
      {isMobile && (
        <Box sx={style.mobileCardInfoBlock}>
          <CardInfoItem />
        </Box>
      )}
      <Box sx={style.mainContent}>
        <DescriptionItem />
        <KeyPointsItem />
        <CourseLessons />
      </Box>
      {!isMobile && (
        <Box sx={style.cardInfoBlock} ref={cardInfoRef} >
          <CardInfoItem isFixed={isFixed} isBottom={bottom} />
        </Box>
      )}
    </Box>
  )
}

export default MainBlock