import { getTranslation } from "@/app/i18n";
import bgImage1 from "@/public/assets/header/bg_header_3_.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import style from "./Testimonials.style";
import TestimonialsList from "./testimonialsList/TestimonialsList";

interface ITestimonials {
  lang: string;
}

const Testimonials = async ({ lang }: ITestimonials) => {
  const { t } = await getTranslation(lang, "Testimonials");

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.backgroundImage}>
        <Image src={bgImage1} fill alt="Background Image 1" priority />
      </Box>
      <Box sx={style.backgroundImage2}>
        <Image src={bgImage1} fill alt="Background Image 1" priority />
      </Box>
      <Typography variant="body2" component={"p"}>
        {t("title")}
      </Typography>
      <Typography variant="h2" component={"p"}>
        {t("subtitle")}
      </Typography>
      <TestimonialsList />
    </Box>
  );
};

export default Testimonials;
