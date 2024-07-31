"use client";

import { useEffect } from "react";

import {
  CardMembership,
  Difference,
  Groups,
  LaptopChromebook,
} from "@mui/icons-material/";

import { Box, Typography } from "@mui/material";

import ChooseUsCard from "./ChoseUsCard/ChooseUsCard";

import AOS from "aos";

import "aos/dist/aos.css";

import { useTranslation } from "@/app/i18n/client";
import style from "./ChooseUs.style";

const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs");
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Box sx={style.mainSection}>
      <Box
        id="text-section"
        sx={style.textSection}
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-anchor-placement="top"
      >
        <Typography variant="h6" component="span">
          {t("title")}
        </Typography>
        <Typography variant="h3" component="p" className="title">
          {t("subtitle")}
        </Typography>
        <Typography variant="body1" component="p" className="description">
          {t("text")}
        </Typography>
      </Box>
      <Box
        id="card-section"
        sx={style.cardSection}
        data-aos-anchor-placement="top"
      >
        <ChooseUsCard
          IconComponent={Difference}
          title={t("cards.0.title")}
          description={t("cards.0.description")}
          data-aos="zoom-in"
          data-aos-delay={200}
          data-aos-duration="1200"
        />
        <ChooseUsCard
          IconComponent={Groups}
          title={t("cards.1.title")}
          description={t("cards.1.description")}
          data-aos="zoom-in"
          data-aos-delay={300}
          data-aos-duration="1200"
        />
        <ChooseUsCard
          IconComponent={LaptopChromebook}
          title={t("cards.2.title")}
          description={t("cards.2.description")}
          data-aos="zoom-in"
          data-aos-delay={400}
          data-aos-duration="1200"
        />
        <ChooseUsCard
          IconComponent={CardMembership}
          title={t("cards.3.title")}
          description={t("cards.3.description")}
          data-aos="zoom-in"
          data-aos-delay={500}
          data-aos-duration="1200"
        />
      </Box>
    </Box>
  );
};

export default ChooseUs;
