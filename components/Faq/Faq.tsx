"use client";

import { useTranslation } from "@/app/i18n/client";
import MotionBox from "@/components/customComponents/MotionBox";
import { scrollDown } from "@/utils/motionVariants";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box, Typography } from "@mui/material";
import style from "./Faq.style";
import FaqCard from "./FaqCard/FaqCard";

interface FaqCardData {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const { t } = useTranslation("Faq");

  const dataFaqCard = t("questions", { returnObjects: true }) as FaqCardData[];

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
          <Typography variant="h6">{t("subtitle")}</Typography>
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
