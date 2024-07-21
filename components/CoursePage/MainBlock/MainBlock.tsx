'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material'

import { useEffect, useRef, useState } from 'react';

import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import CardInfoItem from './CardInfoItem/CardInfoItem';

import style from './MainBlock.style'

// interface MainBlockProps {
//   keyPoints: string[];
//   description: string;
//   lessons: TCourseInfo['lessons'];
//   course: TCourseInfo;
// }

const MainBlock = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isFixed, setIsFixed] = useState(false);
  const [bottom, setIsBottom] = useState(false);

  const mainBlockRef = useRef<HTMLDivElement | null>(null);
  const cardInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainBlockRef.current && cardInfoRef.current) {
        const mainBlockTop = mainBlockRef.current.getBoundingClientRect().top;
        const mainBlockBottom = mainBlockRef.current.getBoundingClientRect().bottom;
        const cardInfoBottom = cardInfoRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;

        if (mainBlockTop <= 0 && mainBlockBottom > viewportHeight) {
          setIsFixed(true);
          setIsBottom(cardInfoBottom > mainBlockBottom);
        } else {
          setIsFixed(false);
          setIsBottom(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
          <CardInfoItem isFixed={isFixed} />
        </Box>
      )}
    </Box>
  )
}

export default MainBlock