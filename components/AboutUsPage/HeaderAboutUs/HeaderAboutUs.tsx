import { Box, Typography } from "@mui/material";

import { TFunction } from "i18next";
import style from "./HeaderAboutUs.style";

interface IHeaderAboutUs {
  t: TFunction;
}

const HeaderAboutUs = ({ t }: IHeaderAboutUs) => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.name}>{t("header.title")}</Typography>
        <Typography variant="h5" sx={style.subtitle}>
          {t("header.subtitle")}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderAboutUs;
