"use client";

import { useTranslation } from "@/app/i18n/client";
import ContactUsForm from "@/src/components/contactUs/form/ContactUsForm";
import ContactUsModal from "@/src/components/contactUs/modal/ContactUsModal";
import WayForPayWidget from "@/src/components/wayForPayWidget/WayForPayWidget";
import { useCourse } from "@/src/context/CourseContext";
import { useModal } from "@/src/hooks/useModal";
import { courseInstructor } from "@/src/mocks/mocks";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import style from "./CardInfoItem.style";
import CountdownTimer from "./CountdownTimer";
import AuthorImage from "/public/assets/header/author_header.webp";
const CardInfoVideoPlayerWithNoSSR = dynamic(
  () =>
    import(
      "@/src/components/CoursePage/MainBlock/CardInfo/CardInfoVideoPlayer"
    ),
  { ssr: false }
);

const CardInfo = () => {
  const [timerExpired, setTimerExpired] = useState(false);

  const { isOpen, openModal, closeModal } = useModal();
  const { t } = useTranslation("CourseIdPage");
  const { course } = useCourse();

  const endDate = useMemo(() => {
    return course.discountEndDateTimer
      ? new Date(course.discountEndDateTimer)
      : null;
  }, [course.discountEndDateTimer]);

  useEffect(() => {
    localStorage.setItem("discountActive", "true");

    const timer = setInterval(() => {
      const now = new Date();
      if (endDate && now >= endDate) {
        setTimerExpired(true);
        localStorage.setItem("discountActive", "false");
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <Box
      sx={{
        ...style.cardInfoMainContainer,
        // height: timerExpired ? "750px" : "860px",
        // transition: "height 0.3s ease",
      }}
    >
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
        {!timerExpired && course.discountPrice ? (
          <Box sx={style.discountPriceBlock}>
            <Box sx={style.timerCard}>
              <Box sx={style.discountTimerContainer}>
                <Typography sx={style.timerCardTitle}>
                  {t("cardInfo.timerTitle")}
                  <br />
                  <span>
                    {endDate?.toLocaleDateString("uk", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </Typography>
                <CountdownTimer
                  endDate={course.discountEndDateTimer as string}
                />
              </Box>
            </Box>
            <Box sx={style.discountPriceContainer}>
              <Typography variant="h6" className="discount-price">
                {course.discountPrice}
              </Typography>
              <Typography variant="body1" className="original-price">
                {course.price}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" sx={style.price}>
            {course.price}
          </Typography>
        )}
        {course.id === "tviy-mentor" ? (
          <>
            <Button
              variant="contained"
              onClick={openModal}
              sx={style.cardInfoButton}
            >
              {t("cardInfo.buttonMentor")}
            </Button>
            <ContactUsModal open={isOpen} handleClose={closeModal}>
              <ContactUsForm
                handleClose={closeModal}
                title={t("modal.title")}
                subtitle={t("modal.subtitle")}
                messageTemplate={t("modal.messageTemplate")}
              />
            </ContactUsModal>
          </>
        ) : (
          <WayForPayWidget
            text={t("cardInfo.button")}
            invoiceUrl={course.invoiceUrl}
            sx={style.cardInfoButton}
          />
        )}
      </Box>
    </Box>
  );
};

export default CardInfo;
