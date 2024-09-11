"use client";

import { URL_IMG_YOUTUBE } from "@/src/mocks/VideoItem/helper";
import { Box, IconButton } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import ImageHeadContent from "./ImageHeadContent/ImageHeadContent";
import { PlayIcon } from "./PlayIcon/PlayIcon";
import style from "./Video.style";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

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
