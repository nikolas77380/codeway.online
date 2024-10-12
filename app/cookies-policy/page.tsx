import { Box, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import style from "./page.style";

export async function generateMetadata() {
  const t = await getTranslations("CookiesPolicyPage");

  return {
    title: t("meta.title"),
  };
}

export default async function CookiesPolicyPage() {
  const t = await getTranslations("CookiesPolicyPage");

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
