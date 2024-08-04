'use client'

import { Box, Typography } from "@mui/material";

import TestimonialCard from "./TestimonialCard/TestimonialCard";

import { getTranslation } from "@/app/i18n";
import style from "./Testimonials.style";
import { useTranslation } from "@/app/i18n/client";

const Testimonials = () => {

  const { t } =  useTranslation("Testimonials");

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.textSection}>
        <Typography variant="h6" component="span">
          {t("title")}
        </Typography>
        <Typography variant="h3" component="p" className="title">
          {t("subtitle")}
        </Typography>
      </Box>
      <TestimonialCard />
    </Box>
  );
};

export default Testimonials;
