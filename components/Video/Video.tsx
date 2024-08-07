"use client";

import { useState } from "react";

import Image from "next/image";

import { Box, IconButton } from "@mui/material";

import { PlayIcon } from "./PlayIcon/PlayIcon";

import ImageHeadContent from "./ImageHeadContent/ImageHeadContent";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

import { URL_IMG_YOUTUBE } from "@/src/mocks/VideoItem/helper";

import dynamic from "next/dynamic";
import style from "./Video.style";

interface VideoItemProps {
  autoplay?: boolean;
}

const Video = ({ autoplay = false }: VideoItemProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Modal = dynamic(() => import("@mui/material/Modal"));

  return (
    <Box sx={style.videoContainer}>
      <Image src={`${URL_IMG_YOUTUBE}`} fill alt="Video Thumbnail" />
      <IconButton onClick={handleOpen} sx={style.playButton}>
        <PlayIcon />
      </IconButton>
      <ImageHeadContent />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.modal}>
            <VideoPlayer onClose={handleClose} autoplay={autoplay} />
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Video;
