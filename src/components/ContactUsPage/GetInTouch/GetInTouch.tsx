import ContactInfo from "@/src/components/AboutUsPage/ContactInfo/ContactInfo";
import ContactUsForm from "@/src/components/contactUs/form/ContactUsForm";
import MotionBox from "@/src/components/customComponents/MotionBox";
import {
  aboutUsPageScroLeftToRight,
  contactUPagesscrollRightToLeft,
} from "@/src/utils/motionVariants";
import { Box, Typography } from "@mui/material";
import { TFunction } from "i18next";

import style from "./GetInTouch.style";

interface IGetInTouch {
  t: TFunction;
}

const GetInTouch = ({ t }: IGetInTouch) => {
  return (
    <Box sx={style.mainContainer}>
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={aboutUsPageScroLeftToRight(0.7, 1.2)}
      >
        <Box sx={style.mainContent}>
          <Typography variant="h3" component="span">
            {t("get-in-touch.title")}
          </Typography>
          <Box sx={style.separator} />
          <Box sx={style.servicesContainer}>
            <ContactInfo />
          </Box>
        </Box>
      </MotionBox>
      <Box sx={style.mainContent2}>
        <MotionBox
          initial="hidden"
          animate="visible"
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
