"use client";

import { useEffect, useRef, useState } from "react";

import {
  Box,
  IconButton,
  Link,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { useTranslation } from "@/app/i18n/client";
import { languages } from "@/app/i18n/settings";
import { usePathname, useRouter } from "next/navigation";
import style from "./Menu.style";

interface IMenu {
  lang: string;
}

const Menu = ({ lang }: IMenu) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation("Menu");

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLanguageChange = (e: SelectChangeEvent) => {
    router.push(`/${e.target.value}${pathname.slice(3)}`);
  };

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.menuSection}>
        <Box>
          <Link href="/" sx={style.logoLink}>
            <Typography sx={style.logo}>Codeway</Typography>
          </Link>
        </Box>
        <Box sx={style.routeSectionDesktop}>
          <Select
            defaultValue={lang}
            displayEmpty
            onChange={handleLanguageChange}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
            sx={{
              color: "#fff",
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            {languages.map((lng) => (
              <MenuItem key={lng} value={lng}>
                {lng}
              </MenuItem>
            ))}
          </Select>
          <Link href={""} sx={style.logoLink}>
            <Typography sx={style.textRoute}>{t("course")}</Typography>
          </Link>
          <Link href={""} sx={style.logoLink}>
            <Typography sx={style.textRoute}>{t("contact")}</Typography>
          </Link>
          <Link href={""} sx={style.logoLink}>
            <Typography sx={style.textRoute}>{t("about")}</Typography>
          </Link>
        </Box>

        <IconButton onClick={toggleMenu} sx={style.burgerIcon}>
          {menuOpen ? (
            <CloseIcon sx={style.icon} />
          ) : (
            <MenuIcon sx={style.icon} />
          )}
        </IconButton>
      </Box>

      <Modal open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={style.modalContainer}>
          {menuOpen && (
            <Box sx={style.mobileMenu} ref={menuRef}>
              <Link href={""} sx={style.mobileMenuItem}>
                {t("course")}
              </Link>
              <Link href={""} sx={style.mobileMenuItem}>
                {t("contact")}
              </Link>
              <Link href={""} sx={style.mobileMenuItem}>
                {t("about")}
              </Link>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Menu;
