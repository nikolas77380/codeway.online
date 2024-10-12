"use client";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { scrollDown } from "@/src/utils/motionVariants";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box, Typography } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import style from "./Faq.style";
import FaqCard from "./FaqCard/FaqCard";

interface FaqCardData {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const t = useTranslations("Faq");

  const messages = useMessages();
  const dataFaqCard = Object.keys((messages.Faq as any).questions).map(
    (key) => {
      return {
        id: Number.parseInt(key),
        question: t(`questions.${key}.question`),
        answer: t(`questions.${key}.answer`),
      };
    }
  ) as FaqCardData[];

  return (
    <Box sx={style.mainSection}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollDown(0, 1)}
      >
        <Box sx={style.textSection} component="div">
          <Typography variant="body2">{t("slogan")}</Typography>
          <Typography variant="h2">{t("title")}</Typography>
          <Typography variant="h6" component={"p"}>
            {t("subtitle")}
          </Typography>
        </Box>
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
