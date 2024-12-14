"use client";
import { useCourse } from "@/src/context/CourseContext";
import { useSnackbar } from "@/src/context/SnackbarContext";
import { Button, SxProps, Theme } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import OfferModal from "./OfferModal";

interface IWidgetProps {
  text: string;
  invoiceUrl: string;
  sx?: SxProps<Theme>;
}

const WayForPayWidget = ({ text, invoiceUrl, sx }: IWidgetProps) => {
  const { showSnackbar } = useSnackbar();
  const [modalOpen, setModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const { course } = useCourse();

  const t = useTranslations("messages");
  const messages = useMemo(() => {
    let array = [t("successful_payment.message")];
    if (course.id === "front-end-360") {
      array.push(t("successful_payment.extra-message"));
    }
    array.push(t("successful_payment.message-end"));
    return array;
  }, [t, course.id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secure.wayforpay.com/server/pay-widget.js?ref=button";
    script.id = "widget-wfp-script";
    script.async = true;

    document.body.appendChild(script);

    const handleWidgetEvent = (event: MessageEvent) => {
      if (event.data === "WfpWidgetEventApproved") {
        setIsApproved(true);
      } else if (event.data === "WfpWidgetEventClose") {
        handleWidgetClose();
        if (isApproved) {
          setModalOpen(true);
          setIsApproved(false);
        }

        const widgetContainer = document.getElementById("wfp-container");
        widgetContainer?.remove();
      }
    };

    window.addEventListener("message", handleWidgetEvent);

    return () => {
      const existingScript = document.getElementById("widget-wfp-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      window.removeEventListener("message", handleWidgetEvent);
    };
  }, [showSnackbar, isApproved]);

  const handleWidgetClose = () => {
    const widget = new (window as any).Wayforpay();
    widget.closeit();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = async () => {
    const widgetRef = new (window as any).Wayforpay();
    widgetRef.invoice(invoiceUrl);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick} sx={sx}>
        {text}
      </Button>
      <OfferModal
        title={t("successful_payment.title")}
        messages={messages}
        button={t("successful_payment.button")}
        open={modalOpen}
        handleClose={closeModal}
      />
    </>
  );
};
export default WayForPayWidget;
