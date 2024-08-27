import { getTranslation } from "@/app/i18n";
import { Box, Typography } from "@mui/material";
import AnimatedPath from "./AnimatedPath";

interface IOfferWay {
  lang: string;
}

const OfferWay = async ({ lang }: IOfferWay) => {
  const { t } = await getTranslation(lang, "OfferWay");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1300px",
        m: "auto",
        height: "1650px",
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mt: "50px",
          p: "25px 25px 0 25px",
          mb: "100px",
          "@media (max-width: 1050px)": {
            width: "850px",
            mb: "25px",
          },
          "@media (max-width: 900px)": {
            width: 1,
            mb: "25px",
          },
          "@media (max-width: 380px)": {
            textAlign: "end",
          },
        }}
      >
        {t("title")}
      </Typography>
      <AnimatedPath />
      <Box
        sx={{
          textAlign: "end",
          alignContent: "end",
          pt: "25px",
          mr: "150px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          "@media (max-width: 900px)": {
            mr: "25px",
          },
        }}
      >
        <Typography variant="body2">{t("stage1.name")}</Typography>
        <Typography variant="h3">{t("stage1.title")}</Typography>
        <Typography variant="h6" sx={{ mt: "15px ", ml: "30%" }}>
          {t("stage1.text")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          textAlign: "left",
          alignContent: "flex-start",
          mt: "225px",
          ml: "150px",
          "@media (max-width: 1050px)": {
            mt: "150px",
          },
          "@media (max-width: 900px)": {
            ml: "25px",
          },
          "@media (max-width: 380px)": {
            mt: "100px",
          },
        }}
      >
        <Typography variant="body2">{t("stage2.name")}</Typography>
        <Typography variant="h3">{t("stage2.title")}</Typography>
        <Typography variant="h6" sx={{ mr: "30%" }}>
          {t("stage2.text")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          mt: "175px",
          textAlign: "end",
          pt: "50px",
          alignContent: "end",
          mr: "150px",
          "@media (max-width: 900px)": {
            mt: "100px",
            mr: "25px",
          },
          "@media (max-width: 380px)": {
            mt: "50px",
          },
        }}
      >
        <Typography variant="body2">{t("stage3.name")}</Typography>
        <Typography variant="h3">{t("stage3.title")}</Typography>
        <Typography variant="h6" sx={{ ml: "30%" }}>
          {t("stage3.text")}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "200px",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 1000px)": {
            mt: "170px",
          },
          "@media (max-width: 900px)": {
            mt: "125px",
          },
          "@media (max-width: 380px)": {
            mt: "100px",
          },
        }}
      >
        <Box sx={{ textAlign: "end", width: "50%" }}>
          <Typography variant="body2" sx={{ m: "25px" }}>
            {t("stage4.name")}
          </Typography>
          <Typography variant="h3" sx={{ m: "25px" }}>
            {t("stage4.title")}
          </Typography>
          <Typography variant="h6" sx={{ m: "25px " }}>
            {t("stage4.text")}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "50%" }}>
          <Typography variant="body2" sx={{ m: "25px" }}>
            {t("stage5.name")}
          </Typography>
          <Typography variant="h3" sx={{ m: "25px" }}>
            {t("stage5.title")}
          </Typography>
          <Typography variant="h6" sx={{ m: "25px " }}>
            {t("stage5.text")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferWay;
