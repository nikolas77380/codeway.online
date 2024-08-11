"use client";

import { useTranslation } from "@/app/i18n/client";
import { useCourse } from "@/src/context/CourseContext";
import { courseInstructor } from "@/src/mocks/mocks";
import { MotionBox } from "@/utils/motionElements";
import { scrollRightToLeft } from "@/utils/motionVariants";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import { Avatar, Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import style from "./CardInfoItem.style";

const CardInfoVideoPlayerWithNoSSR = dynamic(
  () =>
    import("@/components/CoursePage/MainBlock/CardInfo/CardInfoVideoPlayer"),
  { ssr: false }
);

const CardInfo = () => {
  const { t } = useTranslation("CourseIdPage");

  const { course } = useCourse();

  return (
    <MotionBox
      sx={style.cardInfoMainContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollRightToLeft(0.4, 1.4)}
    >
      <Box sx={style.cardInfoContainer}>
        <CardInfoVideoPlayerWithNoSSR />
        <Typography variant="h6" component="label">
          {t("cardInfo.title")}
        </Typography>
        <Box sx={style.avatarMainContainer}>
          <Box sx={style.avatarWrapper}>
            <Avatar
              alt={courseInstructor.name}
              src={courseInstructor.image}
              component="image"
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
            <VideoChatIcon />
            <Typography component="span">{t("cardInfo.includes4")}</Typography>
          </Box>
          <Box sx={style.dashSeparator} />
          <Box sx={style.includesContainers}>
            <CardMembershipIcon />
            <Typography component="span">{t("cardInfo.includes5")}</Typography>
          </Box>
        </Box>
        <Link href={course.link}>
          <Button variant="contained" sx={style.cardInfoButton}>
            {t("cardInfo.button")}
          </Button>
        </Link>
      </Box>
    </MotionBox>
  );
};

export default CardInfo;
