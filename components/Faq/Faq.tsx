import { Box, Typography } from "@mui/material";

import FaqCard from "./FaqCard/FaqCard";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { useTranslation } from "@/app/i18n";
import style from "./Faq.style";

interface FaqCardData {
  id: number;
  question: string;
  answer: string;
}

interface IFaq {
  lang: string;
}

const Faq = async ({ lang }: IFaq) => {

  const { t } = await useTranslation(lang, "Faq");

  const dataFaqCard = t("questions", { returnObjects: true }) as FaqCardData[];

  return (
    <Box sx={style.mainSection}>
      <Box
        sx={style.textSection}
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
      </Box>
      <Box sx={style.faqCardContainer} data-aos-anchor-placement="top">
        {dataFaqCard.map((card) => (
          <FaqCard
            key={card.id}
            title={card.question}
            description={card.answer}
            Icon={HelpOutlineIcon}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
