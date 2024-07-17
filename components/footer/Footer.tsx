import { COMPANY, SERVICES } from "@/constants/constants";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalFireDepartmentRounded,
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
import style from "./Footer.style";
import ListWithTitle from "./ListWithTitle";

const Footer = () => {
  return (
    <>
      <Divider sx={style.divider} />
      <Box sx={style.container}>
        <Stack sx={style.contentWrapper}>
          <Grid container sx={style.mainSection}>
            <Grid item md={3}>
              <Typography variant="h3">[CodeWay]</Typography>
              <Typography variant="subtitle2">
                Jln Cempaka Wangi No 22 Jakarta - Indonesia{" "}
              </Typography>
              <Typography variant="subtitle2" sx={style.email}>
                test@mail.com
              </Typography>
              <Typography variant="subtitle2" sx={style.phone}>
                +380677773798
              </Typography>
            </Grid>
            <Grid item md={3}>
              <ListWithTitle title="Services" items={SERVICES} />
            </Grid>
            <Grid item md={3}>
              <ListWithTitle title="Company" items={COMPANY} />
            </Grid>
            <Grid item md={3}>
              <Typography>Newsletter</Typography>
              <Typography>
                Sign up our newsletter to get update information, news and free
                insight.
              </Typography>
              <TextField placeholder="Email" sx={style.input} />
              <Button
                variant="contained"
                endIcon={<LocalFireDepartmentRounded />}
              >
                Send
              </Button>
            </Grid>
          </Grid>
          <Grid container sx={style.appLinks}>
            <Grid item xs={8}>
              <Typography>
                Ready to learn on-the-go? Download our mobile app ecourse and
                start learning anytime, anywhere!
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Image
                src={"/footer/googlePlay.png"}
                alt="Google Play link"
                width={200}
                height={60}
              />
              <Image
                src={"/footer/appStore.png"}
                alt="App Store link"
                width={200}
                height={60}
              />
            </Grid>
          </Grid>
          <Grid container sx={style.socialLinks}>
            <Grid item container spacing={2} md={6}>
              <Facebook href="" />
              <Instagram href="" />
              <X href="" />
              <LinkedIn href="" />
              <YouTube href="" />
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Typography>
              Copyright© 2023 ByteSkill, All rights reserved. Powered by
              MoxCreativ.
            </Typography>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
