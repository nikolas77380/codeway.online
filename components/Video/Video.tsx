"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";

import Image from "next/image";

import { Box, IconButton, Modal } from "@mui/material";

import { PlayIcon } from "./PlayIcon/PlayIcon";

import ImageHeadContent from "./ImageHeadContent/ImageHeadContent";

import { URL_IMG_YOUTUBE } from "@/src/mocks/VideoItem/helper";

import style from "./Video.style";

const VideoPlayerWithNoSSR = dynamic(
  () => import("@/components/Video/VideoPlayer/VideoPlayer"),
  { ssr: false }
);

interface VideoItemProps {
  autoplay?: boolean;
}

const Video = ({ autoplay = false }: VideoItemProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={style.videoContainer}>
      <Image src={`${URL_IMG_YOUTUBE}`} fill alt="Video Thumbnail" />
      <IconButton onClick={handleOpen} sx={style.playButton}>
        <PlayIcon />
      </IconButton>
      <ImageHeadContent />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <VideoPlayerWithNoSSR onClose={handleClose} autoplay={autoplay} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Video;
