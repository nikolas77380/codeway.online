"use client";

import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";

import { useTranslation } from "@/app/i18n/client";

import { ArrowForward } from "@mui/icons-material";

import ContactUsModal from "./modal/ContactUsModal";

import { motion } from "framer-motion";

import { contactUsZoomIn } from "@/utils/motionVariants";

import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import chatBotAnimation from '@/public/animations/LottieRobot.json';

import style from './ContactUs.style'

const ContactUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { t } = useTranslation("ContactUs");

  const MotionBox = motion(Box);

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };

  return (
      <MotionBox
        sx={style.container}
        initial={hasAnimated ? false : "hidden"}
        whileInView={!hasAnimated ? "visible" : undefined}
        viewport={{once:true}}
        onAnimationComplete={handleAnimationComplete}
        variants={contactUsZoomIn(0.3,1,[0, 0.5, 0.75, 1])}
      >
        <Box sx={style.backgroundOverlay}></Box>
        <Box sx={style.contentWrapper}>
          <Box sx={style.lottieContainer}>
            <Lottie
              loop
              animationData={chatBotAnimation}
              play
              className="lottie-robot"
            />
          </Box>
          <Box sx={style.textWrapper}>
            <Typography sx={style.title}>{t("title")}</Typography>
            <Typography sx={style.subtitle}>{t("subtitle")}</Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={style.button}
            onClick={handleOpenModal}
          >
            {t("button")}
          </Button>
        </Box>
        <ContactUsModal open={modalOpen} handleClose={handleCloseModal} />
      </MotionBox>
  );
};

export default ContactUs;
