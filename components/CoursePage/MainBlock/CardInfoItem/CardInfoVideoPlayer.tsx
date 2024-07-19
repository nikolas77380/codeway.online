'use client'

import { Box, IconButton } from "@mui/material"
import { useState } from "react";

import style from './../MainBlock.style'
import { TCourseInfo } from "@/src/mocks/mocks";
import Image from "next/image";
import { PlayIcon } from "@/components/Video/PlayIcon/PlayIcon";

interface CardInfoVideoPlayerProps {
  course: TCourseInfo;
}


const CardInfoVideoPlayer = ({ course }: CardInfoVideoPlayerProps) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <Box sx={style.cardInfoWrapper}>
      {isPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src={course.videoLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <Image src={course.image} alt="imgLesson" layout="fill" objectFit="cover" />
          <IconButton sx={style.playButton} onClick={handlePlayClick}>
            <PlayIcon />
          </IconButton>
        </>
      )}
    </Box>
  )
}

export default CardInfoVideoPlayer