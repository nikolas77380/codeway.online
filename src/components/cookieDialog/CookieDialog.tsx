"use client";
import { Box, Button, Link, Popper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import style from "./CookieDialog.style";

const CookieDialog = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations("CookieDialog");

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("cookiesAccepted", "true");
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
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
