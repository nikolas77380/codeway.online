import { useCourse } from "@/src/context/CourseContext";
import { useModal } from "@/src/hooks/useModal";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import style from "./CardInfoItem.style";

const ActionButton = () => {
  const { isOpen, openModal, closeModal } = useModal();
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

  if (course.id === "tviy-mentor" || course.isComingSoon) {
    const messagesSource = course.isComingSoon ? "modalContact" : "modalMentor";
    return (
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
            title={t(`${messagesSource}.title`)}
            subtitle={t(`${messagesSource}.subtitle`)}
            messageTemplate={t(`${messagesSource}.messageTemplate`)}
            hideMessageInput={course.isComingSoon}
          />
        </ContactUsModal>
      </>
    );
  }
  return (
    <WayForPayWidget
      text={t("cardInfo.button")}
      invoiceUrl={course.invoiceUrl}
      sx={style.cardInfoButton}
    />
  );
};

export default ActionButton;
