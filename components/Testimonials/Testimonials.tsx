'use client';

import { Box, Typography } from "@mui/material";

import TestimonialCard from "./TestimonialCard/TestimonialCard";

import { getTranslation } from "@/app/i18n";
import style from "./Testimonials.style";

interface ITestimonials {
  lang: string;
}

const Testimonials = async({ lang }: ITestimonials) => {

  const { t } = await getTranslation(lang, "Testimonials");

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
