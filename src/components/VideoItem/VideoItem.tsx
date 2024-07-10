'use client'

import React, { useState } from 'react'

import { Box, IconButton, Modal } from '@mui/material'

import { PlayIcon } from './PlayIcon/PlayIcon'

import VideoPlayer from './VideoPlayer/VideoPlayer'
import ImageHeadContent from './ImageHeadContent/ImageHeadContent'

import { URL_IMG_YOUTUBE } from '@/src/mocks/VideoItem/helper'

import style from './VideoItem.style'


interface VideoItemProps {
  autoplay: boolean;
}

const VideoItem = ({ autoplay }: VideoItemProps) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={style.videoContainer}>
      <img src={`${URL_IMG_YOUTUBE}`} alt="Video Thumbnail" />
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
          <VideoPlayer onClose={handleClose} autoplay={autoplay} />
        </Box>
      </Modal>
    </Box>
  )
}

export default VideoItem