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

import Image from "next/image";

import bgImage from "/public/assets/header/bg_header_1_.png";

const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs");

  const MotionBox = motion(Box);

  const { ref, controls } = useScrollAnimation({
    delay: 0,
    duration: 2,
    threshold: 0.3,
  });

  return (
    <Box 
      sx={style.mainSection}
      ref={ref}
    >
      <Box sx={style.backgroundImageCenter}>
        <Image src={bgImage} fill alt="Background Image 1" />
      </Box>
      <MotionBox
        id="text-section"
        sx={style.textSection}
        component='div'
        initial='hidden'
        animate='visible'
        variants={scrollDown(0,1)}
      >
        <Typography variant="body2" component="span">
          {t("title")}
        </Typography>
        <Typography variant="h2" component="p" className="title">
          {t("subtitle")}
        </Typography>
        <Typography variant="h6" component="p" className="description">
          {t("text")}
        </Typography>
      </MotionBox>
      <MotionBox
        id="card-section"
        sx={style.cardSection}
        component='div'
        initial='hidden'
        animate={controls}
        variants={scrollRightToLeft(0.3,2)}
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
      </MotionBox>
    </Box>
  );
};

export default ChooseUs;
