"use client";

import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";

import { useTranslation } from "@/app/i18n/client";

import { ArrowForward } from "@mui/icons-material";

import Image from "next/image";

import ContactUsModal from "./modal/ContactUsModal";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { motion } from "framer-motion";

import { contactUsZoomIn } from "@/utils/motionVariants";

import style from "./ContactUs.style";

interface IContactUs {
  lang: string;
}

const ContactUs = ({ lang }: IContactUs) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { t } = useTranslation(lang, "ContactUs");

  const MotionBox = motion(Box);

  const { ref } = useScrollAnimation({
    delay: 0,
    duration: 1,
    threshold: 0.1,
  });

  return (
    <Box ref={ref}>
      <MotionBox 
        sx={style.container}
        initial="hidden"
        animate="visible"
        variants={contactUsZoomIn(0.5, 1.8, [0, 0.71, 0.2, 1.01])}
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
      </MotionBox>
      <ContactUsModal open={modalOpen} handleClose={handleCloseModal} t={t} />
    </Box>
  );
};

export default ContactUs;
