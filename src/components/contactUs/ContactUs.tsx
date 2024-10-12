"use client";

import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";

import { ArrowForward } from "@mui/icons-material";

import ContactUsModal from "./modal/ContactUsModal";

import { contactUsZoomIn } from "@/src/utils/motionVariants";

import chatBotAnimation from "@/public/animations/LottieRobot.json";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";

import { useModal } from "@/src/hooks/useModal";
import { useTranslations } from "next-intl";
import MotionBox from "../customComponents/MotionBox";
import style from "./ContactUs.style";
import ContactUsForm from "./form/ContactUsForm";

const ContactUs = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { isOpen, openModal, closeModal } = useModal();

  const t = useTranslations("ContactUs");

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };

  return (
    <MotionBox
      initial={hasAnimated ? false : "hidden"}
      whileInView={!hasAnimated ? "visible" : undefined}
      viewport={{ once: true }}
      onAnimationComplete={handleAnimationComplete}
      variants={contactUsZoomIn(0.5, 1, [0, 0.5, 0.7, 1])}
    >
      <Box sx={style.container}>
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
            onClick={openModal}
          >
            {t("button")}
          </Button>
        </Box>
        <ContactUsModal open={isOpen} handleClose={closeModal}>
          <ContactUsForm handleClose={closeModal} />
        </ContactUsModal>
      </Box>
    </MotionBox>
  );
};

export default ContactUs;
