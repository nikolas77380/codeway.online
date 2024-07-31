"use client";

import { useTranslation } from "@/app/i18n/client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import style from "./Header.style";

const Header = () => {
  const { t } = useTranslation("Header");
  return (
    <Box sx={style.headerContainer}>
      <Box sx={style.contentWrapper}>
        <Box sx={style.leftContainer}>
          <Typography sx={style.slogan}>{t("slogan")}</Typography>
          <Typography variant="h1" sx={style.title}>
            {t("title")}
          </Typography>
          <Typography variant="subtitle1" sx={style.subtitle}>
            {t("subtitle")}
          </Typography>
          <Button variant="contained" sx={style.button}>
            {t("button")}
          </Button>
        </Box>

        <Box sx={style.rightContainer}>
          <Box sx={style.mainImage}>
            <Image
              priority
              src={"/assets/header/img_2.png"}
              alt="person"
              fill={true}
              sizes="(max-width:1200px) 480px, 580px"
            />
          </Box>
          <Box sx={style.imageSkills}>
            <Image
              src={"/assets/header/img_3.png"}
              alt="skills"
              fill={true}
              sizes="(max-width:900px) 120px, (max-width:1200px) 150px, 210px"
            />
          </Box>
          <Box sx={style.imageCodeIcon}>
            <Image
              src={"/assets/header/img_4.png"}
              alt="codeIcon"
              fill={true}
              sizes="(max-width:900px) 250px, (max-width:1200px) 75px, 108px"
            />
          </Box>
          <Box sx={style.imageVideoIcon}>
            <Image
              src={"/assets/header/img_5.png"}
              alt="videoIcon"
              fill={true}
              sizes="(max-width:1200px) 75px, 108px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
