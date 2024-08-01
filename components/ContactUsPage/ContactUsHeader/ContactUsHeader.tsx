import { Box, Typography } from "@mui/material";

import { TFunction } from "i18next";
import style from "./ContactUsHeader.style";

interface IContactUsHeader {
  t: TFunction;
}

const ContactUsHeader = ({ t }: IContactUsHeader) => {
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

export default ContactUsHeader;
