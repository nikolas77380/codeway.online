import { Box, Typography } from "@mui/material";

import { TFunction } from "i18next";

import { aboutUsPageScrollUp } from "@/utils/motionVariants";

import MotionBox from "@/components/customComponents/MotionBox";

import style from "./HeaderAboutUs.style";

interface IHeaderAboutUs {
  t: TFunction;
}

const HeaderAboutUs = ({ t }: IHeaderAboutUs) => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionBox
          initial='hidden'
          animate='visible'
          variants={aboutUsPageScrollUp(0, 1)}
        >
          <Typography sx={style.name}>
            {t("header.title")}
          </Typography>
        </MotionBox>
        <MotionBox
          initial='hidden'
          animate='visible'
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          <Typography variant="h5" sx={style.subtitle}>
            {t("header.subtitle")}
          </Typography>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeaderAboutUs;
