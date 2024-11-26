"use client";

import chatBotAnimation from "@/public/animations/LottieRobot.json";
import { useModal } from "@/src/hooks/useModal";
import { ArrowForward, Close } from "@mui/icons-material";
import { Box, Button, Fade, IconButton, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import ContactUsForm from "../form/ContactUsForm";
import ContactUsModal from "../modal/ContactUsModal";
import style from "./ContactUsDialog.style";

const ContactUsDialog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const t = useTranslations("ContactUs");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <Fade in={isVisible} timeout={1000}>
        <Box sx={style.container}>
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
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#a855f7",
                ":hover": { color: "#9333EA" },
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </Box>
      </Fade>
      <ContactUsModal open={isOpen} handleClose={closeModal}>
        <ContactUsForm handleClose={closeModal} />
      </ContactUsModal>
    </>
  );
};

export default ContactUsDialog;
