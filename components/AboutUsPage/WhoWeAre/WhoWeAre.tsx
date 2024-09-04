import { Box, IconButton, Typography } from "@mui/material";

import Image from "next/image";

import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

import { TFunction } from "i18next";

import MotionBox from "@/components/customComponents/MotionBox";
import { aboutUsPageImageZoom, aboutUsPageScroLeftToRight } from "@/utils/motionVariants";

import style from "./WhoWeAre.style";

interface IHeaderAboutUs {
  t: TFunction;
}

const WhoWeAre = ({ t }: IHeaderAboutUs) => {
  return (
    <Box sx={style.mainContainer}>
      <MotionBox 
        initial='hidden'
        animate='visible'
        variants={aboutUsPageScroLeftToRight(0.4, 1.1)}
      >
        <Box sx={style.mainContent}>
          <Typography component="label">{t("who-we-are.slogan")}</Typography>
          <Typography variant="h3" component="span">
            {t("who-we-are.title")}
          </Typography>
          <Typography variant="body1" component="p">
            {t("who-we-are.subtitle")}
          </Typography>
          <Box sx={style.servicesContainer}>
            <Box sx={style.serviceSection}>
              <IconButton sx={style.icon}>
                <VideoCameraFrontIcon fontSize="large" />
              </IconButton>
              <Box sx={style.serviceTextSection}>
                <Typography component="span">
                  {t("who-we-are.service1-title")}
                </Typography>
                <Typography component="p">
                  {t("who-we-are.service1-desc")}
                </Typography>
              </Box>
            </Box>

            <Box sx={style.serviceSection}>
              <IconButton sx={style.icon}>
                <WorkHistoryOutlinedIcon fontSize="large" />
              </IconButton>
              <Box sx={style.serviceTextSection}>
                <Typography component="span">
                  {t("who-we-are.service2-title")}
                </Typography>
                <Typography component="p">
                  {t("who-we-are.service2-desc")}
                </Typography>
              </Box>
            </Box>

            <Box sx={style.serviceSection}>
              <IconButton sx={style.icon}>
                <CardMembershipOutlinedIcon fontSize="large" />
              </IconButton>
              <Box sx={style.serviceTextSection}>
                <Typography component="span">
                  {t("who-we-are.service3-title")}
                </Typography>
                <Typography component="p">
                  {t("who-we-are.service3-desc")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </MotionBox>
      <Box sx={style.mainContent2}>
        <Box sx={style.mainWrapper}>
          <MotionBox  
            initial='hidden'
            animate='visible'
            variants={aboutUsPageImageZoom()}
          >
            <Box sx={style.imageMainContainer}>
              <Image src="/assets/aboutUs/hero.jpg" alt="hero" fill />
            </Box>
          </MotionBox>
          <Box sx={style.memberContainer}>
            <Box sx={style.memberWrapper}>
              <Typography component="label">52k+</Typography>
              <Typography component="span">{t("who-we-are.badge")}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
