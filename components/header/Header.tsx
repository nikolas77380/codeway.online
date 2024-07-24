"use client";

import { useTranslation } from "@/app/i18n/client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import style from "./Header.style";

interface IHeader {
  lang: string;
}

const Header = ({ lang }: IHeader) => {
  const { t } = useTranslation(lang, "Header");
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
            <Image src={"/header/img_2.png"} alt="person" fill={true} />
          </Box>
          <Box sx={style.imageSkills}>
            <Image src={"/header/img_3.png"} alt="skills" fill={true} />
          </Box>
          <Box sx={style.imageCodeIcon}>
            <Image src={"/header/img_4.png"} alt="codeIcon" fill={true} />
          </Box>
          <Box sx={style.imageVideoIcon}>
            <Image src={"/header/img_5.png"} alt="videoIcon" fill={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
