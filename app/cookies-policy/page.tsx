import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import style from "./page.style";

export async function generateMetadata() {
  const t = await getTranslations("CookiesPolicyPage");

  return {
    title: t("meta.title"),
  };
}

export default function CookiesPolicyPage() {
  const t = useTranslations("CookiesPolicyPage");

  return (
    <Box sx={style.container}>
      <Typography variant="h1" sx={style.title}>
        {t("title")}
      </Typography>
      <Typography sx={style.subtitle}>{t("subtitle")}</Typography>

      <Typography sx={style.subtitle}>{t("paragraph1")}</Typography>

      <Typography sx={style.subtitle}>{t("paragraph2")}</Typography>
    </Box>
  );
}
