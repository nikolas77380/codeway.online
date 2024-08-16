"use client";

import { Box, IconButton } from "@mui/material";

import { useState } from "react";

import Image from "next/image";

import { PlayIcon } from "@/components/Video/PlayIcon/PlayIcon";

import { useCourse } from "@/src/context/CourseContext";

import style from "./CardInfoItem.style";

const CardInfoVideoPlayer = () => {
  const { course } = useCourse();

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
          loading="lazy"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <Image
            src={course.image}
            alt="imgLesson"
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "auto",
              borderRadius: "15px",
            }}
          />
          <IconButton sx={style.playButton} onClick={handlePlayClick}>
            <PlayIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default CardInfoVideoPlayer;
