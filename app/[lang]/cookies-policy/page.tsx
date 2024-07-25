import { useTranslation } from "@/app/i18n";
import { Box, Typography } from "@mui/material";
import style from "./page.style";

interface ICookiesPolicyPage {
  params: {
    lang: string;
  };
}

export default async function CookiesPolicyPage({
  params: { lang },
}: ICookiesPolicyPage) {
  const { t } = await useTranslation(lang, "CookiesPolicyPage");

  return (
    <Box sx={style.container}>
      <Typography variant="h1" sx={style.title}>
        {t("title")}
      </Typography>
      <Typography sx={style.subtitle}>{t("subtitle")}</Typography>

      <Typography sx={style.subtitle}>{t("paragraph1")}</Typography>

      <Typography sx={style.subtitle}>{t("paragraph2")}</Typography>

      <Typography sx={style.subtitle}>{t("paragraph3")}</Typography>
    </Box>
  );
}