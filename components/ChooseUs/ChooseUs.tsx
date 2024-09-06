"use client";

import { useTranslation } from "@/app/i18n/client";
import MotionBox from "@/components/customComponents/MotionBox";
import {
  scrollDown,
  scrollLeftToRight,
  scrollRightToLeft,
  scrollUp,
} from "@/utils/motionVariants";
import {
  CardMembership,
  Difference,
  Groups,
  LaptopChromebook,
} from "@mui/icons-material/";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import style from "./ChooseUs.style";
import ChooseUsCard from "./ChoseUsCard/ChooseUsCard";
import bgImage from "/public/assets/header/bg_header_1_.webp";

const ChooseUs = () => {
  const { t } = useTranslation("ChooseUs");

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.backgroundImage}>
        <Image
          src={bgImage}
          alt="Background Image"
          fill
          quality={1}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Box>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollDown(0, 1)}
        style={{ zIndex: 2 }}
      >
        <Box id="text-section" sx={style.textSection} component="div">
          <Typography variant="body2" component="span">
            {t("title")}
          </Typography>
          <Typography variant="h2" component="p" className="title">
            {t("subtitle")}
          </Typography>
          <Typography variant="h6" component="p" className="description">
            {t("text")}
          </Typography>
        </Box>
      </MotionBox>

      <Box sx={style.cardSection}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollLeftToRight(0.3, 2)}
          style={{ zIndex: 2 }}
        >
          <Box id="card-section" component="div">
            <ChooseUsCard
              IconComponent={Difference}
              title={t("cards.0.title")}
              description={t("cards.0.description")}
            />
          </Box>
        </MotionBox>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollUp(0.3, 2)}
          style={{ zIndex: 2 }}
        >
          <Box id="card-section" component="div">
            <ChooseUsCard
              IconComponent={Groups}
              title={t("cards.1.title")}
              description={t("cards.1.description")}
            />
          </Box>
        </MotionBox>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollUp(0.3, 2)}
          style={{ zIndex: 2 }}
        >
          <Box id="card-section" component="div">
            <ChooseUsCard
              IconComponent={LaptopChromebook}
              title={t("cards.2.title")}
              description={t("cards.2.description")}
            />
          </Box>
        </MotionBox>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollRightToLeft(0.3, 2)}
          style={{ zIndex: 2 }}
        >
          <Box id="card-section" component="div">
            <ChooseUsCard
              IconComponent={CardMembership}
              title={t("cards.3.title")}
              description={t("cards.3.description")}
            />
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ChooseUs;
