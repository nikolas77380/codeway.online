"use client";

import { Box } from "@mui/material";

import { useCourse } from "@/src/context/CourseContext";

import style from "./CardInfoItem.style";

const CardInfoVideoPlayer = () => {
  const { course } = useCourse();

  //const [isPlaying, setIsPlaying] = useState(false);

  //const handlePlayClick = () => {
  //  setIsPlaying(true);
  //};

  return (
    <Box sx={style.cardInfoWrapper}>
      <iframe
        src={course.videoLink}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default CardInfoVideoPlayer;
