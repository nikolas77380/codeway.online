"use client";
import { Box, Button, Link, Popper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./CookieDialog.style";

const CookieDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("shown")) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("shown", "true");
  };

  return (
    <Popper open={open} sx={style.popup} transition placement="bottom-start">
      <Box sx={style.container}>
        <Typography sx={style.subtitle}>
          Ми використовуємо cookie-файли для надання найбільш актуальної
          інформації. Продовжуючи використовувати сайт, Ви погоджуєтесь з
          використанням файлів cookie.{" "}
          <Link href="" sx={style.link}>
            Політика конфіденційності
          </Link>
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={style.accButton}
          onClick={handleClose}
        >
          Погоджуюсь
        </Button>
      </Box>
    </Popper>
  );
};

export default CookieDialog;
