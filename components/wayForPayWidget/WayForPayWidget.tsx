"use client";
import { useSnackbar } from "@/context/SnackbarContext";
import { Button, SxProps, Theme } from "@mui/material";
import { useEffect } from "react";

interface IWidgetProps {
  text: string;
  invoiceUrl: string;
  sx?: SxProps<Theme>;
}

const WayForPayWidget = ({ text, invoiceUrl, sx }: IWidgetProps) => {
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secure.wayforpay.com/server/pay-widget.js?ref=button";
    script.id = "widget-wfp-script";
    script.async = true;

    document.body.appendChild(script);

    const handleWidgetEvent = (event: MessageEvent) => {
      if (event.data === "WfpWidgetEventApproved") {
        showSnackbar({
          message:
            "Payment Approved! We sand an invitation for course to your email. Please check it",
          severity: "success",
        });
      }
    };

    window.addEventListener("message", handleWidgetEvent);

    return () => {
      // const existingScript = document.getElementById("widget-wfp-script");
      // if (existingScript) {
      //   document.body.removeChild(existingScript);
      // }
      window.removeEventListener("message", handleWidgetEvent);
    };
  }, [showSnackbar]);

  const handleClick = async () => {
    const wayforpay = new (window as any).Wayforpay();
    wayforpay.invoice(invoiceUrl);
  };

  return (
    <Button variant="outlined" onClick={handleClick} sx={sx}>
      {text}
    </Button>
  );
};
export default WayForPayWidget;
