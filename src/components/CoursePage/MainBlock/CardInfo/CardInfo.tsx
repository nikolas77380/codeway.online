"use client";

import { useTranslation } from "@/app/i18n/client";
import { useCourse } from "@/src/context/CourseContext";
import { courseInstructor } from "@/src/mocks/mocks";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import style from "./CardInfoItem.style";
import AuthorImage from "/public/assets/header/author_header.webp";
const CardInfoVideoPlayerWithNoSSR = dynamic(
  () =>
    import(
      "@/src/components/CoursePage/MainBlock/CardInfo/CardInfoVideoPlayer"
    ),
  { ssr: false }
);

const CardInfo = () => {
  const { t } = useTranslation("CourseIdPage");

  const { course } = useCourse();

  return (
    <Box sx={style.cardInfoMainContainer}>
      <Box sx={style.cardInfoContainer}>
        <CardInfoVideoPlayerWithNoSSR />
        <Typography variant="h6" component="label">
          {t("cardInfo.title")}
        </Typography>
        <Box sx={style.avatarMainContainer}>
          <Box sx={style.avatarWrapper}>
            <Image
              alt="Викладач курсу та ментор"
              src={AuthorImage}
              width={55}
              height={65}
              style={{ borderRadius: "40%" }}
            />
          </Box>
          <Box sx={style.avatarTextContainer}>
            <Typography component="label">{courseInstructor.name}</Typography>
            <Typography component="span">{courseInstructor.rank}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" component="label">
          {t("cardInfo.title2")}
        </Typography>
        <Box sx={style.includesMainContainer}>
          <Box sx={style.includesContainers}>
            <PlayCircleIcon />
            <Typography component="span">
              {course.courseDuration} {t("cardInfo.includes1")}
            </Typography>
          </Box>
          <Box sx={style.dashSeparator} />
          <Box sx={style.includesContainers}>
            <ExitToAppIcon />
            <Typography component="span">{t("cardInfo.includes2")}</Typography>
          </Box>
          <Box sx={style.dashSeparator} />
          <Box sx={style.includesContainers}>
            <TapAndPlayIcon />
            <Typography component="span">{t("cardInfo.includes3")}</Typography>
          </Box>
          <Box sx={style.dashSeparator} />
          <Box sx={style.includesContainers}>
            <CardMembershipIcon />
            <Typography component="span">{t("cardInfo.includes4")}</Typography>
          </Box>
          <Box sx={style.dashSeparator} />
        </Box>
        {course.discountPrice ? (
          <Box sx={style.discountPriceContainer}>
            <Typography variant="h6" className="discount-price">
              {course.discountPrice}
            </Typography>
            <Typography variant="body1" className="original-price">
              {course.price}
            </Typography>
          </Box>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "end" }}>
            {course.price}
          </Typography>
        )}
        {/* <WayForPayWidget

          text={t("cardInfo.button")}
          invoiceUrl={course.invoiceUrl}
          sx={{
            width: "100%",
            mt: "15px",
            backgroundColor: "#FFF",
            color: "#a855f7",
            borderRadius: "15px",
            "&:hover": {
              color: "#FFF",
            },
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default CardInfo;
