"use client";
import { COMPANY, SERVICES } from "@/constants/constants";
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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./Footer.style";
import ListWithTitle from "./listWithTitle/ListWithTitle";

const Footer = () => {
  const [email, setEmail] = useState("");

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
                Jln Cempaka Wangi No 22 Jakarta - Indonesia{" "}
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
              <ListWithTitle title="Services" items={SERVICES} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <ListWithTitle title="Company" items={COMPANY} />
            </Grid>
            <Grid item sm={12} md={4}>
              <Typography variant="h5">Newsletter</Typography>
              <Typography variant="subtitle2" sx={style.signUpText}>
                Sign up our newsletter to get update information, news and free
                insight.
              </Typography>
              <Box sx={style.form}>
                <TextField
                  label="Email"
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
                  Sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={style.appLinks}>
            <Grid item xs={12} sm={8}>
              <Typography variant={"h5"} sx={style.appLinksTitle} p={"10px"}>
                Ready to learn on-the-go? Download our mobile app ecourse and
                start learning anytime, anywhere!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} sx={style.storeImg}>
              <Link href={""}>
                <Image
                  src={"/footer/googlePlay.png"}
                  alt="Google Play link"
                  width={160}
                  height={50}
                />
              </Link>
              <Link href={""}>
                <Image
                  src={"/footer/appStore.png"}
                  alt="App Store link"
                  width={160}
                  height={50}
                />
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent={"space-between"}>
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
              <Typography sx={style.copyright}>
                Copyright© 2023 ByteSkill, All rights reserved. Powered by
                MoxCreativ.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
