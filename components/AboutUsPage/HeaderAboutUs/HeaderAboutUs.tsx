import { Box } from "@mui/material";

import { TFunction } from "i18next";

import { MotionTypography } from "@/utils/motionElements";
import { aboutUsPageScrollUp } from "@/utils/motionVariants";

import style from "./HeaderAboutUs.style";

interface IHeaderAboutUs {
  t: TFunction;
}

const HeaderAboutUs = ({ t }: IHeaderAboutUs) => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <MotionTypography 
          sx={style.name}
          initial='hidden'
          animate='visible'
          variants={aboutUsPageScrollUp(0, 1)}
        >
          {t("header.title")}
        </MotionTypography>
        <MotionTypography 
          variant="h5" 
          sx={style.subtitle}
          initial='hidden'
          animate='visible'
          variants={aboutUsPageScrollUp(0.3, 1)}
        >
          {t("header.subtitle")}
        </MotionTypography>
      </Box>
    </Box>
  );
};

export default HeaderAboutUs;
