import { getTranslation } from "@/app/i18n";
import { Box, Typography } from "@mui/material";
import AnimatedPath from "./animatedPath/AnimatedPath";

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
        mb: "50px",
        "& p": {
          m: "25px",
          "@media (max-width: 600px)": {
            m: "10px",
          },
        },
        "@media (max-width: 600px)": {
          height: "1200px",
          mt: "50px",
        },
        "@media (min-width:600px & max-width: 850px)": {
          mb: "250px",
        },
      }}
    >
      <AnimatedPath />

      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          mt: "50px",
          p: "25px 25px 0 25px",
          mb: "100px",
          "@media (max-width: 1050px)": {
            width: "850px",
            mb: "25px",
          },
          "@media (max-width: 900px)": {
            width: "80%",
          },
          "@media (max-width: 600px)": {
            mt: "10px",
            width: "95%",
            right: "15px",
            textAlign: "end",
          },
        }}
      >
        {t("title")}
      </Typography>

      <Box
        id="stage1"
        sx={{
          position: "absolute",
          mt: "250px",
          textAlign: "end",
          alignContent: "end",
          pt: "25px",
          mr: "150px",
          ml: "20%",
          "@media (max-width: 900px)": {
            mr: "25px",
          },
          "@media (max-width: 600px)": {
            mt: "115px",
          },
        }}
      >
        <Typography variant="body2" component={"p"}>
          {t("stage1.name")}
        </Typography>
        <Typography variant="h3" component={"p"}>
          {t("stage1.title")}
        </Typography>
        <Typography variant="h6" component={"p"}>
          {t("stage1.text")}
        </Typography>
      </Box>

      <Box
        id="stage2"
        sx={{
          position: "absolute",
          textAlign: "left",
          top: "650px",
          ml: "100px",
          mr: "20%",
          "@media (max-width: 900px)": {
            ml: "25px",
          },
          "@media (max-width: 600px)": {
            top: "400px",
          },
        }}
      >
        <Typography variant="body2" component={"p"}>
          {t("stage2.name")}
        </Typography>
        <Typography variant="h3" component={"p"}>
          {t("stage2.title")}
        </Typography>
        <Typography variant="h6" component={"p"} sx={{ mr: "30%" }}>
          {t("stage2.text")}
        </Typography>
      </Box>

      <Box
        id="stage3"
        sx={{
          position: "absolute",
          top: "1000px",
          textAlign: "end",
          pt: "50px",
          alignContent: "end",
          mr: "150px",
          ml: "20%",
          "@media (max-width: 900px)": {
            mr: "25px",
          },
          "@media (max-width: 600px)": {
            top: "550px",
          },
        }}
      >
        <Typography variant="body2" component={"p"}>
          {t("stage3.name")}
        </Typography>
        <Typography variant="h3" component={"p"}>
          {t("stage3.title")}
        </Typography>
        <Typography variant="h6" component={"p"} sx={{ ml: "30%" }}>
          {t("stage3.text")}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "1400px",
          display: "flex",
          gap: "25px",
          mr: "50px",
          ml: "50px",
          justifyContent: "space-between",
          "@media (max-width: 600px)": {
            mr: "5px",
            ml: "5px",
            top: "950px",
          },
          "@media (max-width: 400px)": {
            wordWrap: "break-word",
          },
        }}
      >
        <Box id="stage4" sx={{ textAlign: "light", width: "50%" }}>
          <Typography variant="body2" component={"p"}>
            {t("stage4.name")}
          </Typography>
          <Typography variant="h3" component={"p"}>
            {t("stage4.title")}
          </Typography>
          <Typography variant="h6" component={"p"}>
            {t("stage4.text")}
          </Typography>
        </Box>

        <Box id="stage5" sx={{ textAlign: "right", width: "50%" }}>
          <Typography variant="body2" component={"p"}>
            {t("stage5.name")}
          </Typography>
          <Typography variant="h3" component={"p"}>
            {t("stage5.title")}
          </Typography>
          <Typography variant="h6" component={"p"}>
            {t("stage5.text")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferWay;
