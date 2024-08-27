import { getTranslation } from "@/app/i18n";
import bgImage1 from "@/public/assets/header/bg_header_3_.png";
import { MotionTypography } from "@/utils/motionElements";
import { courseIdHeaderScrollUp } from "@/utils/motionVariants";
import { Box } from "@mui/material";
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
        <Image src={bgImage1} fill alt="Background Image 1" />
      </Box>
      <Box sx={style.backgroundImage2}>
        <Image src={bgImage1} fill alt="Background Image 1" />
      </Box>
      <MotionTypography
        variant="body2"
        component={"p"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={courseIdHeaderScrollUp(50, 0.2, 0.7)}
      >
        {t("title")}
      </MotionTypography>
      <MotionTypography
        variant="h2"
        component={"p"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={courseIdHeaderScrollUp(80, 0, 1)}
      >
        {t("subtitle")}
      </MotionTypography>
      <TestimonialsList />
    </Box>
  );
};

export default Testimonials;
