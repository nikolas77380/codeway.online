import OfferModal from "@/src/components/wayForPayWidget/OfferModal";
import { useCourse } from "@/src/context/CourseContext";
import { useModal } from "@/src/hooks/useModal";
import { TCourseInfo } from "@/src/mocks/mocks";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import style from "./CardInfoItem.style";

enum CourseType {
  MENTOR = "tviy-mentor",
  COMING_SOON = "coming_soon",
  FREE = "free",
  DEFAULT = "default",
}

const getMessagesSource = (course: TCourseInfo): string => {
  if (course.isComingSoon) return "modalContact";
  if (course.isFree) return "modalFree";
  if (course.id === CourseType.MENTOR) return "modalMentor";
  return CourseType.DEFAULT;
};

const ActionButton = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: feedbackModal,
    openModal: openFeedbackModal,
    closeModal: closeFeedbackModal,
  } = useModal();

  const t = useTranslations("CourseIdPage");
  const { course } = useCourse();

  const ContactUsModal = dynamic(
    () => import("@/src/components/contactUs/modal/ContactUsModal")
  );
  const ContactUsForm = dynamic(
    () => import("@/src/components/contactUs/form/ContactUsForm")
  );
  const WayForPayWidget = dynamic(
    () => import("@/src/components/wayForPayWidget/WayForPayWidget")
  );

  const messagesSource = useMemo(() => getMessagesSource(course), [course]);

  return (
    <>
      {messagesSource == CourseType.DEFAULT ? (
        <WayForPayWidget
          text={t("cardInfo.button")}
          invoiceUrl={course.invoiceUrl}
          sx={style.cardInfoButton}
        />
      ) : (
        <>
          <Button
            variant="contained"
            onClick={openModal}
            sx={style.cardInfoButton}
          >
            {t(`${messagesSource}.button`)}
          </Button>
          <ContactUsModal open={isOpen} handleClose={closeModal}>
            <ContactUsForm
              handleClose={closeModal}
              openFeedbackModal={openFeedbackModal}
              title={t(`${messagesSource}.title`)}
              subtitle={t(`${messagesSource}.subtitle`)}
              button={t(`${messagesSource}.button`)}
              messageTemplate={t(`${messagesSource}.messageTemplate`, {
                courseName: course.name,
              })}
              hideMessageInput={course.isComingSoon || course.isFree}
              isRegisterContact={course.isFree}
              offerId={course.isFree ? course.offerId : undefined}
            />
          </ContactUsModal>
          <OfferModal
            title={t("successful_free_registration.title")}
            message={t("successful_free_registration.message")}
            button={t("successful_free_registration.button")}
            open={feedbackModal}
            handleClose={closeFeedbackModal}
          />
        </>
      )}
    </>
  );
};

export default ActionButton;
