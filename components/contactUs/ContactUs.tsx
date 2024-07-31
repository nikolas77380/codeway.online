"use client";
import { useTranslation } from "@/app/i18n/client";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./ContactUs.style";
import ContactUsModal from "./modal/ContactUsModal";

const ContactUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    Aos.init({});
  }, []);

  const { t } = useTranslation("ContactUs");

  return (
    <Box
      sx={style.container}
      data-aos="fade"
      data-aos-duration="1400"
      data-aos-delay="500"
      data-aos-anchor-placement="top"
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
      <ContactUsModal open={modalOpen} handleClose={handleCloseModal} t={t} />
    </Box>
  );
};

export default ContactUs;
