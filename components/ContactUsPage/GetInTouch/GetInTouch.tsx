import { Box, Typography } from "@mui/material";

import ContactUsForm from "@/components/contactUs/form/ContactUsForm";

import { TFunction } from "i18next";

import { MotionBox } from "@/utils/motionElements";
import { aboutUsPageScroLeftToRight, contactUPagesscrollRightToLeft } from "@/utils/motionVariants";

import style from "./GetInTouch.style";
import ContactInfo from "@/components/AboutUsPage/ContactInfo/ContactInfo";

interface IGetInTouch {
  t: TFunction;
}

const GetInTouch = ({ t }: IGetInTouch) => {
  return (
    <Box sx={style.mainContainer}>
      <MotionBox 
        sx={style.mainContent}
        initial='hidden'
        animate='visible'
        variants={aboutUsPageScroLeftToRight(0.7, 1.2)}
      >
        <Typography component="label">{t("get-in-touch.slogan")}</Typography>
        <Typography variant="h3" component="span">
          {t("get-in-touch.title")}
        </Typography>
        <Typography variant="body1" component="p">
          {t("get-in-touch.subtitle")}
        </Typography>
        <Box sx={style.separator} />
        <Box sx={style.servicesContainer}>
          <ContactInfo />
        </Box>
      </MotionBox>
      <Box sx={style.mainContent2}>
        <MotionBox 
          sx={style.container}
          initial='hidden'
          animate='visible'
          viewport={{ once: true }}
          variants={contactUPagesscrollRightToLeft(0.7, 1.2)}
        >
          <ContactUsForm />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default GetInTouch;
