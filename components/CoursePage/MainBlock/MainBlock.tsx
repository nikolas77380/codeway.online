'use client';

import { Box } from '@mui/material'

import { useEffect, useRef, useState } from 'react';

import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import CardInfoItem from './CardInfoItem/CardInfoItem';

import { motion } from 'framer-motion';

import { useWindowSize } from '@/hooks/useWindowSize';

import style from './MainBlock.style'

const MainBlock = () => {

  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const MotionBox = motion(Box);

  useEffect(() => {
    setIsMobile(width !== undefined && width < 600);
    setIsMounted(true);
  }, [width]);

  if (!isMounted) {
    return null; 
  };

  return (
    <Box sx={style.mainContainer} ref={scrollRef}>
      {isMobile && (
        <MotionBox 
          sx={style.mobileCardInfoBlock}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <CardInfoItem isMobile={isMobile} />
        </MotionBox>
      )}
      <Box sx={style.mainContent}>
        <DescriptionItem />
        <KeyPointsItem />
        <CourseLessons />
      </Box>
      {!isMobile && (
        <Box sx={style.cardInfoBlock}>
          <CardInfoItem scrollRef={scrollRef} />
        </Box>
      )}
    </Box>
  )
}

export default MainBlock