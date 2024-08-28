import { getTranslation } from "@/app/i18n";
import Author from "@/public/assets/author.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import style from "./MySection.style";

interface IMySection {
  lang: string;
}

const MySection = async ({ lang }: IMySection) => {
  const { t } = await getTranslation(lang, "MySection");

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
          <Image src={Author} alt={"author"} priority />
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
            {/* <Typography variant={"h6"} component={"span"}>
              Проєкти:
            </Typography>
            <Typography variant={"h6"} component={"p"}>
              Мінімальна вартість сайту 100к грн
            </Typography>
            <Typography variant={"h6"} component={"span"}>
              Рекорди:
            </Typography>
            <Typography variant={"h6"} component={"p"}>
              Створення проєкту з чеком у 1.5 млн грн.
            </Typography> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MySection;
