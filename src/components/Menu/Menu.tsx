import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Logo from "./Logo/Logo";
import style from "./Menu.style";

const Menu = async () => {
  const t = useTranslations("Menu");

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
