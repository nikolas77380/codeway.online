import Author from "@/public/assets/author6.webp";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import style from "./MySection.style";

const MySection = () => {
  const t = useTranslations("MySection");

  return (
    <Box sx={style.container}>
      <Box
        sx={{
          position: "relative",
          width: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "49%",
            "@media (max-width: 900px)": {
              left: "-450px",
            },
          }}
        >
          <Image src={Author} alt={"Автор курсу"} priority />
        </Box>
        <Box
          sx={{
            width: "49%",
            mt: "50px",
            textAlign: "center",
            position: "relative",
            "@media (max-width: 900px)": {
              width: "90%",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: "25px",
              "@media (min-width: 600px)": {
                fontSize: "1.2rem",
              },
            }}
          >
            {t("slogan")}
          </Typography>
          <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
            {t("title")}
          </Typography>
          <Box sx={style.achievements}>
            <Typography variant={"h6"} component={"span"}>
              {t("exp.name")}
            </Typography>
            <Typography variant={"h6"} component={"p"}>
              {t("exp.text")}
            </Typography>
            <Typography variant={"h6"} component={"span"}>
              {t("ach.name")}
            </Typography>
            <Typography variant={"h6"} component={"p"}>
              {t("ach.text")}
            </Typography>
            <Typography variant={"h6"} component={"span"}>
              {t("partners.name")}
            </Typography>
            <Typography variant={"h6"} component={"p"}>
              {t("partners.text")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MySection;
