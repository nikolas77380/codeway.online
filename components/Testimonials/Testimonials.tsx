import { Box, Typography } from "@mui/material";

import dynamic from "next/dynamic";

import { getTranslation } from "@/app/i18n";

import style from "./Testimonials.style";

const TestimonialCardWithNoSSR = dynamic(
  () => import("@/components/Testimonials/TestimonialCard/TestimonialCard"),
  { ssr: false }
);

interface ITestimonials {
  lang: string;
}

const Testimonials = async ({ lang }: ITestimonials) => {
  const { t } = await getTranslation(lang, "Testimonials");

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
      <TestimonialCardWithNoSSR />
    </Box>
  );
};

export default Testimonials;
