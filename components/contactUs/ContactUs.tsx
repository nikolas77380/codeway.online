"use client";

import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";

import Image from "next/image";

import { ArrowForward } from "@mui/icons-material";

import ContactUsModal from "./modal/ContactUsModal";

import style from "./ContactUs.style";

const ContactUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

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
            src={"/contactUs/img_avatars.png"}
            alt="avatars"
            width={235}
            height={70}
          />
        </Box>
        <Box sx={style.textWrapper}>
          <Typography sx={style.title}>Need help?</Typography>
          <Typography sx={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={style.button}
          onClick={handleOpenModal}
        >
          Contact us
        </Button>
      </Box>
      <ContactUsModal open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default ContactUs;
