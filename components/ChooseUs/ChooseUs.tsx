"use client";

import {
  CardMembership,
  Difference,
  Groups,
  LaptopChromebook,
} from "@mui/icons-material/";

import { Box, Typography } from "@mui/material";

import ChooseUsCard from "./ChoseUsCard/ChooseUsCard";

import { motion } from "framer-motion";

import { useTranslation } from "@/app/i18n/client";

import { scrollDown, scrollRightToLeft } from "@/utils/motionVariants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import style from "./ChooseUs.style";

const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs");


  return (
    <Box 
      sx={style.mainSection}
    >
      <Box
        id="text-section"
        sx={style.textSection}
        component='div'
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
        component='div'
      >
        <ChooseUsCard
          IconComponent={Difference}
          title={t("cards.0.title")}
          description={t("cards.0.description")}
        />
        <ChooseUsCard
          IconComponent={Groups}
          title={t("cards.1.title")}
          description={t("cards.1.description")}
        />
        <ChooseUsCard
          IconComponent={LaptopChromebook}
          title={t("cards.2.title")}
          description={t("cards.2.description")}
        />
        <ChooseUsCard
          IconComponent={CardMembership}
          title={t("cards.3.title")}
          description={t("cards.3.description")}
        />
      </Box>
    </Box>
  );
};

export default ChooseUs;
