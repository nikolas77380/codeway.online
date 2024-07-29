'use client'

import { Box, Typography } from "@mui/material";

import FaqCard from "./FaqCard/FaqCard";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { useTranslation } from "@/app/i18n/client";

import { motion } from 'framer-motion';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { scrollDown } from "@/utils/motionVariants";

import style from "./Faq.style";

interface FaqCardData {
  id: number;
  question: string;
  answer: string;
}

interface IFaq {
  lang: string;
}

const Faq =  ({ lang }: IFaq) => {

  const { t } = useTranslation(lang, "Faq");

  const dataFaqCard = t("questions", { returnObjects: true }) as FaqCardData[];

  const MotionBox = motion(Box);

  const { ref, controls } = useScrollAnimation({
    delay: 0,
    duration: 1,
  });

  return (
    <Box sx={style.mainSection} ref={ref}>
      <MotionBox
        sx={style.textSection}
        component='div'
        initial='hidden'
        animate={controls}
        variants={scrollDown(0,1)}
      >
        <Typography variant="h6" component="span">
          {t("slogan")}
        </Typography>
        <Typography variant="h3" component="p" className="title">
          {t("title")}
        </Typography>
        <Typography variant="body1" component="p" className="description">
          {t("subtitle")}
        </Typography>
      </MotionBox>
      <Box sx={style.faqCardContainer}>
        {dataFaqCard.map((card) => (
          <FaqCard
            key={card.id}
            title={card.question}
            description={card.answer}
            Icon={HelpOutlineIcon}
            delay={card.id * 0.2}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
