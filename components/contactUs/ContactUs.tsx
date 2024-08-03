"use client";

import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";

import { useTranslation } from "@/app/i18n/client";

import { ArrowForward } from "@mui/icons-material";

import Image from "next/image";

import ContactUsModal from "./modal/ContactUsModal";

import style from './ContactUs.style'
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { contactUsZoomIn } from "@/utils/motionVariants";

const ContactUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { t } = useTranslation("ContactUs");

  const MotionBox = motion(Box);

  const { ref } = useScrollAnimation({
    delay: 0.1,
    duration: 2,
    threshold: 0,
  });

  return (
    <Box ref={ref}>
      <MotionBox
        sx={style.container}
        initial='hidden'
        animate='visible'
        variants={contactUsZoomIn(0.3,1,[0, 0.5, 0.75, 1])}
      >
        <Box sx={style.backgroundOverlay}></Box>
        <Box sx={style.contentWrapper}>
          <Box>
            <Image
              src={"/assets/contactUs/img_avatars.png"}
              alt="avatars"
              width={235}
              height={70}
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
    </Box>
  );
};

export default ContactUs;
