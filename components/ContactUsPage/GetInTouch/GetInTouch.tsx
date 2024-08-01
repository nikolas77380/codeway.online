import ContactUsForm from "@/components/contactUs/form/ContactUsForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, IconButton, Typography } from "@mui/material";
import { TFunction } from "i18next";
import style from "./GetInTouch.style";

interface IGetInTouch {
  t: TFunction;
}

const GetInTouch = ({ t }: IGetInTouch) => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.mainContent}>
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
      </Box>
      <Box sx={style.mainContent2}>
        <Box sx={style.container}>
          <ContactUsForm />
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
