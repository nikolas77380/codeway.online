"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, Link, Popper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./CookieDialog.style";

interface ICookieDialog {
  lang: string;
}

const CookieDialog = ({ lang }: ICookieDialog) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation(lang, "CookieDialog");

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  return (
    <Popper open={open} sx={style.popup} transition placement="bottom-start">
      <Box sx={style.container}>
        <Typography sx={style.subtitle}>
          {t("text")}{" "}
          <Link href="cookies-policy/" sx={style.link}>
            {t("link")}
          </Link>
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={style.accButton}
          onClick={handleClose}
        >
          {t("button")}
        </Button>
      </Box>
    </Popper>
  );
};

export default CookieDialog;
