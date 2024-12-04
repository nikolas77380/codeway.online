"use client";

import PriceDisplay from "@/src/components/common/coursesList/CourseItem/PriceDisplay";
import { useCourse } from "@/src/context/CourseContext";
import { useDiscountTimer } from "@/src/hooks/useDiscountTimer";
import { courseInstructor } from "@/src/mocks/mocks";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ActionButton from "./ActionButton";
import style from "./CardInfoItem.style";
import CountdownTimer from "./CountdownTimer";
import AuthorImage from "/public/assets/header/author_header.webp";

const CardInfo = () => {
  const { course } = useCourse();
  const { timerExpired, discountActive, loading, endDate } = useDiscountTimer();
  const {
    image,
    courseDuration,
    price,
    discountPrice,
    isFree,
    discountEndDateTimer,
  } = course;
  const t = useTranslations("CourseIdPage");

  const formatDate = (date: Date) =>
    date.toLocaleDateString("uk", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  if (loading) return null;

  return (
    <Box sx={style.cardInfoMainContainer}>
      <Box sx={style.cardInfoContainer}>
        <Box sx={style.courseImageWrapper}>
          <Image src={image} alt="Курси з Front-end розробки від Codeway" />
        </Box>
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
        {!timerExpired && discountActive && discountPrice && (
          <Box sx={style.discountTimerContainer}>
            <Typography sx={style.timerCardTitle}>
              {t("cardInfo.timerTitle")}
              <br />
              <span>{endDate && formatDate(endDate)}</span>
            </Typography>
            <CountdownTimer endDate={discountEndDateTimer as string} />
          </Box>
        )}
        <PriceDisplay
          price={price}
          discountPrice={discountPrice}
          isFree={isFree}
        />
        <ActionButton />
      </Box>
    </Box>
  );
};

export default CardInfo;
