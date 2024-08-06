"use client";

import { useEffect } from "react";

import { Box, Typography } from "@mui/material";

import FaqCard from "./FaqCard/FaqCard";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import AOS from "aos";

import "aos/dist/aos.css";

import { useTranslation } from "@/app/i18n/client";
import style from "./Faq.style";

interface FaqCardData {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const { t } = useTranslation("Faq");

  const dataFaqCard = t("questions", { returnObjects: true }) as FaqCardData[];

  return (
    <Box sx={style.mainSection}>
      <Box
        sx={style.textSection}
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-anchor-placement="top"
        data-aos-duration="1200"
      >
        <Typography variant="body2">{t("slogan")}</Typography>
        <Typography variant="h2">{t("title")}</Typography>
        <Typography variant="h6">{t("subtitle")}</Typography>
      </Box>
      <Box sx={style.faqCardContainer} data-aos-anchor-placement="top">
        {dataFaqCard.map((card) => (
          <FaqCard
            key={card.id}
            title={card.question}
            description={card.answer}
            Icon={HelpOutlineIcon}
            data-aos="zoom-in"
            data-aos-delay={100 * (card.id + 1)}
            data-aos-duration="1200"
          />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
