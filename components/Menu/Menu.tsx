"use client";

import { Box, Typography } from "@mui/material";

import Link from "next/link";

import { useTranslation } from "@/app/i18n/client";

import Logo from "./Logo/Logo";

import style from "./Menu.style";

interface IMenu {
  lang: string;
}

const Menu = ({ lang }: IMenu) => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const pathname = usePathname();
  // const router = useRouter();
  const { t } = useTranslation("Menu");

  // const menuRef = useRef<HTMLDivElement | null>(null);

  // const toggleMenu = () => {
  // setMenuOpen(!menuOpen);
  // };

  // const handleClickOutside = (event: MouseEvent) => {
  // if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  // setMenuOpen(false);
  // }
  // };

  // useEffect(() => {
  // if (menuOpen) {
  // document.addEventListener("mousedown", handleClickOutside);
  // } else {
  // document.removeEventListener("mousedown", handleClickOutside);
  // }
  // return () => {
  // document.removeEventListener("mousedown", handleClickOutside);
  // };
  // }, [menuOpen]);

  // const handleLanguageChange = (e: SelectChangeEvent) => {
  //   router.push(`/${e.target.value}${pathname.slice(3)}`);
  // };

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.menuSection}>
        <Logo />
        <Box sx={{ display: "flex", gap: "20px" }}>
          {/* <Select
            defaultValue={lang}
            displayEmpty
            onChange={handleLanguageChange}
            inputProps={{ MenuProps: { disableScrollLock: true } }}
            sx={{
              alignSelf: "flex-end",
              color: "#fff",
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            {languages.map((lng) => (
              <MenuItem key={lng} value={lng}>
                {lng.toUpperCase()}
              </MenuItem>
            ))}
          </Select> */}
          <Box sx={style.routeSectionDesktop}>
            {/* <Link href={"/courses"} sx={style.logoLink}>
              <Typography sx={style.textRoute}>{t("course")}</Typography>
            </Link> */}
            <Link href={"/contact-us"}>
              <Typography sx={style.textRoute}>{t("contact")}</Typography>
            </Link>
            {/* <Link href={"/about-us"} sx={style.logoLink}>
              <Typography sx={style.textRoute}>{t("about")}</Typography>
            </Link> */}
          </Box>

          {/* <IconButton onClick={toggleMenu} sx={style.burgerIcon}>
            {menuOpen ? (
              <CloseIcon sx={style.icon} />
            ) : (
              <MenuIcon sx={style.icon} />
            )}
          </IconButton> */}
        </Box>
      </Box>

      {/* <Modal open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={style.modalContainer}>
          {menuOpen && (
            <Box sx={style.mobileMenu} ref={menuRef}>
              <Link href={"/courses"} sx={style.mobileMenuItem}>
                {t("course")}
              </Link>
              <Link href={"/contact-us"} sx={style.mobileMenuItem}>
                {t("contact")}
              </Link>
              <Link href={"/about-us"} sx={style.mobileMenuItem}>
                {t("about")}
              </Link>
            </Box>
          )}
        </Box>
      </Modal> */}
    </Box>
  );
};

export default Menu;
