import { Box, Typography } from "@mui/material";

import { getTranslation } from "@/app/i18n";
import style from "./TestimonialsBlock.style";
import TestimonialsList from "./testimonialsList/TestimonialsList";

interface ITestimonials {
  lang: string;
}

const TestimonialsBlock = async ({ lang }: ITestimonials) => {
  const { t } = await getTranslation(lang, "Testimonials");

  return (
    <Box sx={style.mainSection}>
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

export default TestimonialsBlock;
