import { Box, Typography } from "@mui/material";

import { useTranslation } from "@/app/i18n";
import dynamic from 'next/dynamic';
import style from "./Testimonials.style";

interface ITestimonials {
  lang: string;
}

const Testimonials = async ({ lang }: ITestimonials) => {
  const { t } = await useTranslation(lang, "Testimonials");
  const TestimonialCard = dynamic(() => import('@/components/Testimonials/TestimonialCard/TestimonialCard'), { ssr: false });
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
