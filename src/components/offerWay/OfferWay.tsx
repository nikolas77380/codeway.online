import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import AnimatedPath from "./animatedPath/AnimatedPath";
import style from "./OfferWay.style";

const OfferWay = () => {
  const t = useTranslations("OfferWay");

  return (
    <Box sx={style.container}>
      <AnimatedPath />
      <Typography variant="h2" sx={style.title}>
        {t("title")}
      </Typography>
      <Box id="stage1" sx={style.stage1}>
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

      <Box id="stage2" sx={style.stage2}>
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

      <Box id="stage3" sx={style.stage3}>
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

      <Box sx={style.stage45_container}>
        <Box id="stage4" sx={{ textAlign: "light", width: "50%" }}>
          <Typography variant="body2" component={"p"}>
            {t("stage4.name")}
          </Typography>
          <Typography variant="h3" component={"p"}>
            {t("stage4.title")}
          </Typography>
          <Typography
            variant="h6"
            component={"p"}
            sx={{
              "@media (min-width: 600px) and (max-width: 800px)": {
                fontSize: "1rem",
              },
            }}
          >
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
          <Typography
            variant="h6"
            component={"p"}
            sx={{
              "@media (min-width: 600px) and (max-width: 800px)": {
                fontSize: "1rem",
              },
            }}
          >
            {t("stage5.text")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferWay;
