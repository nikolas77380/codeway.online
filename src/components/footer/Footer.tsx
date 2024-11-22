"use client";
import { useModal } from "@/src/hooks/useModal";
import OfferContractText from "@/src/mocks/OfferContractText";
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
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ContactUsModal from "../contactUs/modal/ContactUsModal";
import style from "./Footer.style";
import ListWithTitle from "./listWithTitle/ListWithTitle";
import bgImage1 from "/public/assets/header/bg_header_3_.webp";

interface IListLinkItem {
  name: string;
  href: string;
}
const Footer = () => {
  const [email, setEmail] = useState("");

  const { isOpen, openModal, closeModal } = useModal();

  const t = useTranslations("Footer");
  const messages = useMessages();
  const servicesList = Object.keys((messages.Footer as any).services.list).map(
    (key) => {
      const name = t(`services.list.${key}.name`);
      const href = t(`services.list.${key}.href`);
      return {
        name,
        href: name === "Договір оферти" ? undefined : href,
        onClick: name === "Договір оферти" ? openModal : undefined,
      };
    }
  ) as IListLinkItem[];
  const companiesList = Object.keys(
    (messages.Footer as any).companies.list
  ).map((key) => {
    return {
      name: t(`companies.list.${key}.name`),
      href: t(`companies.list.${key}.href`),
    };
  }) as IListLinkItem[];
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleClick = () => {
    // join email to subscribtion
  };

  return (
    <>
      <Divider sx={style.divider} />
      <Box sx={style.container}>
        <Box sx={style.backgroundImage}>
          <Image
            src={bgImage1}
            alt="Background Image 1"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Box>
        <Stack sx={style.contentWrapper}>
          <Grid
            container
            spacing={3}
            alignContent={"center"}
            justifyContent={"space-between"}
            sx={style.mainSection}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Typography fontSize={"1.5rem"}>[CodeWay]</Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                sx={style.address}
              >
                {t("address")}{" "}
              </Typography>
              <Typography variant="subtitle2" component={"p"} sx={style.email}>
                <a
                  style={{ textDecoration: "none", color: "#FFF" }}
                  href="mailto:info@codeway.online"
                >
                  info@codeway.online
                </a>
              </Typography>
              <Typography variant="subtitle2" component={"p"} sx={style.phone}>
                <Phone sx={style.phoneIcon} />
                <a
                  style={{ textDecoration: "none", color: "#FFF" }}
                  href="tel:+380632881111"
                >
                  +380632881111
                </a>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <ListWithTitle title={t("services.title")} items={servicesList} />
            </Grid>
            <ContactUsModal open={isOpen} handleClose={closeModal}>
              <Box sx={style.offerContractTextContainer}>
                <OfferContractText />
              </Box>
            </ContactUsModal>
            {/*<Grid item xs={6} sm={4} md={2}>
              <ListWithTitle
                title={t("companies.title")}
                items={companiesList}
              />
            </Grid>*/}
            <Grid item sm={12} md={4}>
              <Typography variant="h5" component={"p"}>
                {t("newsletter")}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                sx={style.signUpText}
              >
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
            sx={{ mt: "20px", zIndex: 2 }}
          >
            <Grid item xs={12} sm={3}>
              <Stack direction={"row"}>
                <Link href="" aria-label="Facebook">
                  <Facebook sx={style.socialIcon} />
                </Link>
                <Link href="" aria-label="Instagram">
                  <Instagram sx={style.socialIcon} />
                </Link>
                <Link href="" aria-label="X">
                  <X sx={style.socialIcon} />
                </Link>
                <Link href="" aria-label="LinkedIn">
                  <LinkedIn sx={style.socialIcon} />
                </Link>
                <Link href="" aria-label="YouTube">
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
