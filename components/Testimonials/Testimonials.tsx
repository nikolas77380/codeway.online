import { getTranslation } from "@/app/i18n";
import MotionBox from "@/components/customComponents/MotionBox";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimationWrapper";
import bgImage1 from "@/public/assets/header/bg_header_3_.webp";
import { courseIdHeaderScrollUp, scrollUp } from "@/utils/motionVariants";
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
    <ScrollAnimationWrapper threshold={0.2}>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollUp(0, 1)}
      >
        <Box sx={style.mainSection}>
          <Box sx={style.backgroundImage}>
            <Image
              src={bgImage1}
              fill
              alt="Background Image 1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
          <Box sx={style.backgroundImage2}>
            <Image
              src={bgImage1}
              fill
              alt="Background Image 1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={courseIdHeaderScrollUp(150, 0.1, 0.7)}
          >
            <Typography variant="body2" component={"p"}>
              {t("title")}
            </Typography>
          </MotionBox>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={courseIdHeaderScrollUp(100, 0.2, 1)}
          >
            <Typography variant="h2" component={"p"}>
              {t("subtitle")}
            </Typography>
          </MotionBox>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={courseIdHeaderScrollUp(120, 0.3, 1)}
          >
            <TestimonialsList />
          </MotionBox>
        </Box>
      </MotionBox>
    </ScrollAnimationWrapper>
  );
};

export default Testimonials;
