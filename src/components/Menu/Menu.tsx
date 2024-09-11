import { getTranslation } from "@/app/i18n";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Logo from "./Logo/Logo";
import style from "./Menu.style";

interface IMenu {
  lang: string;
}

const Menu = async ({ lang }: IMenu) => {
  const { t } = await getTranslation(lang, "Menu");

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.menuSection}>
        <Logo />
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={style.routeSectionDesktop}>
            <Link href={"/contact-us"}>
              <Typography sx={style.textRoute}>{t("contact")}</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
