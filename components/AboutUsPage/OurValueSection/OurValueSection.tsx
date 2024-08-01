'use client'

import { Box, IconButton, Modal, Typography } from '@mui/material'

import { useState } from 'react';

import Image from 'next/image';

import VisibilityIcon from '@mui/icons-material/Visibility';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import OurValueVideoPlayer from './OurValueVideoPlayer/OurValueVideoPlayer';

import style from './OurValueSection.style'
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ourValuescrollDown } from '@/utils/motionVariants';

interface OurValueSectionProps {
  autoplay?: boolean;
}

const OurValueSection = ({ autoplay = false }: OurValueSectionProps) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MotionBox = motion(Box);

  const { ref } = useScrollAnimation({
    delay: 0,
    duration: 1,
    threshold: 0,
  });

  return (
    <Box sx={style.mainContainer} ref={ref}>
      <Box sx={style.valueContainer}>
        <Box sx={style.mainContent}>
          <Typography component='label'>
            Our Value
          </Typography>
          <Typography variant="h3" component='span'>
            We talk a lot about hope helping and teamwork.
          </Typography>
          <Box sx={style.separator} />
          <Box sx={style.valueSection}>
            <Box sx={style.valueWrapper}>
              <IconButton sx={style.icon}>
                <VisibilityIcon fontSize='large' />
              </IconButton>
              <Box sx={style.valueTextSection}>
                <Typography component='span'>
                  Our vision
                </Typography>
                <Typography component='p'>
                  Placerat vehicula ligula etiam quam hendrerit consectetur mattis nec non
                </Typography>
              </Box>
            </Box>

            <Box sx={style.valueWrapper}>
              <IconButton sx={style.icon}>
                <AdsClickIcon fontSize='large' />
              </IconButton>
              <Box sx={style.valueTextSection}>
                <Typography component='span'>
                  Our Mission
                </Typography>
                <Typography component='p'>
                  Placerat vehicula ligula etiam quam hendrerit consectetur mattis nec non
                </Typography>
              </Box>
            </Box>

            <Box sx={style.valueWrapper}>
              <IconButton sx={style.icon}>
                <FileCopyIcon fontSize='large' />
              </IconButton>
              <Box sx={style.valueTextSection}>
                <Typography component='span'>
                  Our Motto
                </Typography>
                <Typography component='p'>
                  Placerat vehicula ligula etiam quam hendrerit consectetur mattis nec non
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>

        <Box sx={style.mainContent2}>
          <Box sx={style.iconWrapper}>
            <IconButton sx={style.iconPlay} onClick={handleOpen}>
              <PlayArrowIcon />
            </IconButton>
          </Box>
          <Box sx={style.imgContainer}>
            <Image src='/assets/aboutUs/team-of-innovators.jpg' alt='' width={300} height={300} />
          </Box>
          <Box sx={style.imgContainer2}>
            <Image src='/assets/aboutUs/creative-team.jpg' alt='' width={600} height={600} />
          </Box>
          <Box sx={style.imgContainer3}>
            <Image src='/assets/aboutUs/business-team.jpg' alt='' width={300} height={300} />
          </Box>
          <MotionBox 
            sx={style.imgContainer4}
            initial="hidden"
            animate="visible"
            variants={ourValuescrollDown()}
          >
            <Image src='/assets/aboutUs/unity-and-teamwork.jpg' alt='' width={600} height={600} />
          </MotionBox>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.modal}>
              <OurValueVideoPlayer onClose={handleClose} autoplay={autoplay} />
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  )
}

export default OurValueSection