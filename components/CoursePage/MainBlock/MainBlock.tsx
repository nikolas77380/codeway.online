'use client'

import { Box, Button, Typography } from '@mui/material'

import style from './MainBlock.style'
import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'
import CourseLessons from './CourseLessons/CourseLessons';
import { TCourseInfo } from '@/src/mocks/mocks';
import CardInfoItem from './CardInfoItem/CardInfoItem';
import { useEffect, useRef, useState } from 'react'
import CardInfoVideoPlayer from './CardInfoItem/CardInfoVideoPlayer'
import CardInfoAvatar from './CardInfoItem/CardInfoAvatar'
import CardInfoIncludes from './CardInfoItem/CardInfoIncludes'
import Link from 'next/link'

interface MainBlockProps {
  keyPoints: string[];
  description: string;
  lessons: TCourseInfo['lessons'];
  course: TCourseInfo;
}

const MainBlock = ({ keyPoints, description, lessons, course }: MainBlockProps) => {

  const cardInfoRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardInfoRef.current && mainContainerRef.current) {
        const cardInfoTop = cardInfoRef.current.getBoundingClientRect().top;
        const mainContainerTop = mainContainerRef.current.getBoundingClientRect().top;

        setIsSticky(cardInfoTop <= 0 && mainContainerTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={style.mainContainer} ref={mainContainerRef}>
      <Box sx={style.mainContent}>
        <DescriptionItem description={description} />
        <KeyPointsItem keyPoints={keyPoints} />
        <CourseLessons lessons={lessons} />
      </Box>
      <Box 
        sx={{
          ...style.cardInfoBlock,
          position: isSticky ? 'fixed' : 'relative',
          top: isSticky ? '0px' : 'auto',
          right: isSticky ? '0px' : 'auto',
          transition: 'position 0.3s ease',
        }}
        ref={cardInfoRef}
      >
        <CardInfoItem course={course} />
      </Box>
    </Box>
  )
}

export default MainBlock