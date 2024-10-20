"use client";

import { Box, IconButton, Modal, Typography } from "@mui/material";

import { useState } from "react";

import Image from "next/image";

import AdsClickIcon from "@mui/icons-material/AdsClick";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityIcon from "@mui/icons-material/Visibility";

import OurValueVideoPlayer from "./OurValueVideoPlayer/OurValueVideoPlayer";

import {
  aboutUsPageScroLeftToRight,
  ourValuescrollDown,
  ourValueScrollLeftToRight,
  ourValueScrollRightToLeft,
  ourValuescrollUpv2,
} from "@/src/utils/motionVariants";

import MotionBox from "@/src/components/customComponents/MotionBox";

import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

import { useTranslations } from "next-intl";
import style from "./OurValueSection.style";

interface OurValueSectionProps {
  autoplay?: boolean;
}

const OurValueSection = ({ autoplay = false }: OurValueSectionProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const t = useTranslations("AboutUsPage");

  const { ref } = useScrollAnimation({
    delay: 0,
    duration: 2,
    threshold: 0,
  });

  return (
    <Box sx={style.mainContainer} ref={ref}>
      <Box sx={style.valueContainer}>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={aboutUsPageScroLeftToRight(0, 1)}
        >
          <Box data-testid="main-content" sx={style.mainContent}>
            <Typography component="label">{t("our-value.slogan")}</Typography>
            <Typography variant="h3" component="span">
              {t("our-value.title")}
            </Typography>
            <Box sx={style.separator} />
            <Box sx={style.valueSection}>
              <Box sx={style.valueWrapper}>
                <IconButton sx={style.icon}>
                  <VisibilityIcon fontSize="large" />
                </IconButton>
                <Box sx={style.valueTextSection}>
                  <Typography component="span">
                    {t("our-value.item1-title")}
                  </Typography>
                  <Typography component="p">
                    {t("our-value.item1-desc")}
                  </Typography>
                </Box>
              </Box>

              <Box sx={style.valueWrapper}>
                <IconButton sx={style.icon}>
                  <AdsClickIcon fontSize="large" />
                </IconButton>
                <Box sx={style.valueTextSection}>
                  <Typography component="span">
                    {t("our-value.item2-title")}
                  </Typography>
                  <Typography component="p">
                    {t("our-value.item2-desc")}
                  </Typography>
                </Box>
              </Box>

              <Box sx={style.valueWrapper}>
                <IconButton sx={style.icon}>
                  <FileCopyIcon fontSize="large" />
                </IconButton>
                <Box sx={style.valueTextSection}>
                  <Typography component="span">
                    {t("our-value.item3-title")}
                  </Typography>
                  <Typography component="p">
                    {t("our-value.item3-desc")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </MotionBox>

        <Box sx={style.mainContent2}>
          <Box sx={style.iconWrapper}>
            <IconButton sx={style.iconPlay} onClick={handleOpen}>
              <PlayArrowIcon />
            </IconButton>
          </Box>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ourValueScrollRightToLeft(300, 0, 0.4, 1)}
          >
            <Box sx={style.imgContainer}>
              <Image
                src="/assets/aboutUs/team-of-innovators.jpg"
                alt=""
                width={300}
                height={300}
              />
            </Box>
          </MotionBox>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ourValuescrollUpv2()}
          >
            <Box sx={style.imgContainer2}>
              <Image
                src="/assets/aboutUs/creative-team.jpg"
                alt=""
                width={600}
                height={600}
              />
            </Box>
          </MotionBox>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ourValueScrollLeftToRight(-810, 0, 0.4, 1)}
          >
            <Box sx={style.imgContainer3}>
              <Image
                src="/assets/aboutUs/business-team.jpg"
                alt=""
                width={300}
                height={300}
              />
            </Box>
          </MotionBox>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ourValuescrollDown()}
          >
            <Box sx={style.imgContainer4}>
              <Image
                src="/assets/aboutUs/unity-and-teamwork.jpg"
                alt=""
                width={600}
                height={600}
              />
            </Box>
          </MotionBox>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.modal}>
              <OurValueVideoPlayer onClose={handleClose} autoplay={autoplay} />
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default OurValueSection;
