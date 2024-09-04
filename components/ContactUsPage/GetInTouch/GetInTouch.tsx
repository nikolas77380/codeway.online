import { Box, Typography } from "@mui/material";

import ContactUsForm from "@/components/contactUs/form/ContactUsForm";
import ContactInfo from "@/components/AboutUsPage/ContactInfo/ContactInfo";

import { TFunction } from "i18next";

import MotionBox from "@/components/customComponents/MotionBox";
import { aboutUsPageScroLeftToRight, contactUPagesscrollRightToLeft } from "@/utils/motionVariants";

import style from "./GetInTouch.style";

interface IGetInTouch {
  t: TFunction;
}

const GetInTouch = ({ t }: IGetInTouch) => {
  return (
    <Box sx={style.mainContainer}>
      <MotionBox 
        initial='hidden'
        animate='visible'
        variants={aboutUsPageScroLeftToRight(0.7, 1.2)}
      >
        <Box sx={style.mainContent}>
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
        </Box>
      </MotionBox>
      <Box sx={style.mainContent2}>
        <MotionBox 
          initial='hidden'
          animate='visible'
          viewport={{ once: true }}
          variants={contactUPagesscrollRightToLeft(0.7, 1.2)}
        >
          <Box sx={style.container}>
            <ContactUsForm />
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default GetInTouch;
