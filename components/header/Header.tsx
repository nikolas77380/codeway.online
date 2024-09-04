import { permanent } from "@/app/fonts";
import { getTranslation } from "@/app/i18n";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import style from "./Header.style";
import Person from "/public/assets/header/author_header.png";
import bgImage from "/public/assets/header/bg_header_1_.png";
import bgImage1 from "/public/assets/header/bg_header_3_.png";
import CodeIcon from "/public/assets/header/img_4.png";
import VideoIcon from "/public/assets/header/img_5.png";

interface IHeader {
  lang: string;
}

const Header = async ({ lang }: IHeader) => {
  const { t } = await getTranslation(lang, "Header");
  return (
    <Box sx={style.headerContainer}>
      <Box sx={style.contentWrapper}>
        <Box sx={style.backgroundImage}>
          <Image
            src={bgImage1}
            fill
            alt="Background Image 1"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Box>
        <Box sx={style.leftContainer}>
          <Typography sx={style.slogan}>{t("slogan")}</Typography>
          <Typography variant="h2" sx={style.title}>
            {`${t("title")} `}{" "}
            <span style={{ fontFamily: permanent.style.fontFamily }}>
              CODEWAY
            </span>{" "}
            {` ${t("title-end")} `}
          </Typography>
          <Typography variant="h6" sx={style.subtitle}>
            {t("subtitle")}
          </Typography>
          <Button variant="outlined" href="#courses" sx={style.button}>
            {t("button")}
          </Button>
        </Box>

        <Box sx={style.rightContainer}>
          <Box sx={style.mainImage}>
            <Box sx={style.backgroundImageCenter}>
              <Image
                src={bgImage}
                alt="Background Image"
                fill
                quality={10}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </Box>
            <Image
              priority
              src={Person}
              alt="person"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Box>
          <Box sx={style.imageCodeIcon}>
            <Image src={CodeIcon} alt="codeIcon" fill priority />
          </Box>
          <Box sx={style.imageCssIcon}>
            <Image src={VideoIcon} alt="videoIcon" fill priority />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
