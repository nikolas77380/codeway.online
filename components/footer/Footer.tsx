"use client";
import { useTranslation } from "@/app/i18n/client";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useMemo, useState } from "react";
import style from "./Footer.style";
import ListWithTitle from "./listWithTitle/ListWithTitle";

interface IListLinkItem {
  name: string;
  href: string;
}

const Footer = () => {
  const [email, setEmail] = useState("");

  const { t } = useTranslation("Footer");

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleClick = () => {
    // join email to subscribtion
  };

  return (
    <>
      <Divider sx={style.divider} />
      <Box sx={style.container}>
        <Stack sx={style.contentWrapper}>
          <Grid container spacing={3} sx={style.mainSection}>
            <Grid item xs={12} sm={4} md={4}>
              <Typography fontSize={"1.5rem"}>[CodeWay]</Typography>
              <Typography variant="subtitle2" sx={style.address}>
                {t("address")}{" "}
              </Typography>
              <Typography variant="subtitle2" sx={style.email}>
                test@mail.com
              </Typography>
              <Typography variant="subtitle2" sx={style.phone}>
                <Phone sx={style.phoneIcon} />
                +380677773798
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <ListWithTitle
                title={t("services.title")}
                items={
                  t("services.list", { returnObjects: true }) as IListLinkItem[]
                }
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <ListWithTitle
                title={t("companies.title")}
                items={
                  t("companies.list", {
                    returnObjects: true,
                  }) as IListLinkItem[]
                }
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <Typography variant="h5">{t("newsletter")}</Typography>
              <Typography variant="subtitle2" sx={style.signUpText}>
                {t("newsletter-sub")}
              </Typography>
              <Box sx={style.form}>
                <TextField
                  label={t("newsletter-email-label")}
                  type="email"
                  size="small"
                  sx={style.input}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={style.button}
                  endIcon={<EmailOutlined />}
                  onClick={handleClick}
                >
                  {t("newsletter-button")}
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent={"space-between"}
            sx={{ mt: "20px" }}
          >
            <Grid item xs={12} sm={3}>
              <Stack direction={"row"}>
                <Link href="">
                  <Facebook sx={style.socialIcon} />
                </Link>
                <Link href="">
                  <Instagram sx={style.socialIcon} />
                </Link>
                <Link href="">
                  <X sx={style.socialIcon} />
                </Link>
                <Link href="">
                  <LinkedIn sx={style.socialIcon} />
                </Link>
                <Link href="">
                  <YouTube sx={style.socialIcon} />
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={style.copyright}>{`${t(
                "copyright-start"
              )} ${currentYear} ${t("copyright-end")}`}</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
