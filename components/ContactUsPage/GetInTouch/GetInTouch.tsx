import ContactUsForm from "@/components/contactUs/form/ContactUsForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, IconButton, Typography } from "@mui/material";
import { TFunction } from "i18next";
import style from "./GetInTouch.style";
import { MotionBox } from "@/utils/motionElements";
import { aboutUsPageScroLeftToRight, contactUPagesscrollRightToLeft } from "@/utils/motionVariants";

interface IGetInTouch {
  t: TFunction;
}

const GetInTouch = ({ t }: IGetInTouch) => {
  return (
    <Box sx={style.mainContainer}>
      <MotionBox 
        sx={style.mainContent}
        initial='hidden'
        animate='visible'
        variants={aboutUsPageScroLeftToRight(0.4, 1.2)}
      >
        <Typography component="label">{t("get-in-touch.slogan")}</Typography>
        <Typography variant="h3" component="span">
          {t("get-in-touch.title")}
        </Typography>
        <Typography variant="body1" component="p">
          {t("get-in-touch.subtitle")}
        </Typography>
        <Box sx={style.separator} />
        <Box sx={style.servicesContainer}>
          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <LocationOnIcon fontSize="large" />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component="span">
                {t("get-in-touch.address.name")}
              </Typography>
              <Typography component="p">
                {t("get-in-touch.address.street")}
              </Typography>
              <Typography component="p">
                {t("get-in-touch.address.country")}
              </Typography>
            </Box>
          </Box>

          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <MarkEmailReadIcon fontSize="large" />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component="span">
                {t("get-in-touch.email.name")}
              </Typography>
              <Typography component="p">
                {t("get-in-touch.email.support1")}
              </Typography>
              <Typography component="p">
                {t("get-in-touch.email.support2")}
              </Typography>
            </Box>
          </Box>

          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <PhoneIcon fontSize="large" />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component="span">
                {t("get-in-touch.phone.name")}
              </Typography>
              <Typography component="p">
                {t("get-in-touch.phone.number")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </MotionBox>
      <Box sx={style.mainContent2}>
        <MotionBox 
          sx={style.container}
          initial='hidden'
          animate='visible'
          variants={contactUPagesscrollRightToLeft(0.4, 1.2)}
        >
          <ContactUsForm />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default GetInTouch;
