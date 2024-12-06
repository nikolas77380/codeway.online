"use client";

import { useSnackbar } from "@/src/context/SnackbarContext";
import { useKwigaRegistration } from "@/src/hooks/useKwigaRegistration";
import useReCaptcha from "@/src/hooks/useReCaptcha";
import { sendEmail } from "@/src/utils/send-email";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ContactMethodToggle from "./ContactMethodToggle";
import style from "./ContactUsForm.style";
import CustomTextField from "./CustomTextField";
import { getValidationSchema } from "./form.schema";

export interface IInitialValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IInitialValues = {
  name: "",
  email: "",
  message: "",
};

interface IContactUsForm {
  handleClose?: () => void;
  title?: string;
  subtitle?: string;
  button?: string;
  offerId?: number;
  messageTemplate?: string;
  hideMessageInput?: boolean;
  isRegisterContact?: boolean;
  openFeedbackModal?: () => void;
}

export type ContactMethod = "text" | "email";

const ContactUsForm = ({
  handleClose,
  title,
  subtitle,
  button,
  messageTemplate,
  offerId,
  hideMessageInput = false,
  isRegisterContact,
  openFeedbackModal,
}: IContactUsForm) => {
  const [isSending, setIsSending] = useState(false);

  const [contactMethod, setContactMethod] = useState<ContactMethod>(
    isRegisterContact ? "email" : "text"
  );
  const { getReCAPTCHAToken, hideReCAPTCHABadge, showReCAPTCHABadge } =
    useReCaptcha();
  const { showSnackbar } = useSnackbar();
  const t = useTranslations("ContactUs");
  const { sendKwigaResponse } = useKwigaRegistration();

  const handleContactMethodChange = (
    event: React.MouseEvent<HTMLElement>,
    newMethod: ContactMethod | null
  ) => {
    if (newMethod !== null) {
      setContactMethod(newMethod);
    }
  };

  const onSubmit = async (values: IInitialValues) => {
    setIsSending(true);
    showSnackbar({
      message: t("feedback.sending"),
      severity: "info",
      duration: 10000,
    });

    try {
      const token = await getReCAPTCHAToken();
      showReCAPTCHABadge();

      // Send email and handle response
      const emailResponse = await handleSendEmail(values, token);

      if (isRegisterContact && offerId) {
        await handleKwigaResponse(values.email);
      } else {
        handleGeneralFeedback(emailResponse.message);
        // Reset form or close modal
      }

      handleFormCloseOrReset();
    } catch (error) {
      console.error("Error in form submission:", error);
      showSnackbar({
        message: t("feedback.error"),
        severity: "error",
      });
    } finally {
      handleFinalCleanup();
    }
  };

  // Helper function to send email
  const handleSendEmail = async (values: IInitialValues, token: string) => {
    return await sendEmail({
      email: values.email,
      subject: `${t("feedback.message")} ${values.name} (${values.email})`,
      message: values.message,
      recipient: "corp_email",
      reCaptchaToken: token,
    });
  };

  // Helper function to handle Kwiga response
  const handleKwigaResponse = async (email: string) => {
    const kwigaResult = await sendKwigaResponse(email, offerId!);

    if (!kwigaResult?.success) {
      showSnackbar({
        message: t("registration.error"),
        severity: "error",
        duration: 3000,
      });
    } else {
      openFeedbackModal?.();
      handleClose?.();
    }
  };

  // Helper function to show general feedback
  const handleGeneralFeedback = (
    responseMessage: "error" | "warning" | "success" | "info"
  ) => {
    showSnackbar({
      message: t(`feedback.${responseMessage}`),
      severity: responseMessage,
      duration: 3000,
    });
  };

  // Helper function to handle form reset or modal close
  const handleFormCloseOrReset = () => {
    if (handleClose) {
      handleClose();
    } else {
      formik.resetForm();
    }
  };

  // Helper function to handle cleanup
  const handleFinalCleanup = () => {
    setTimeout(hideReCAPTCHABadge, 3000);
    setIsSending(false);
  };

  if (messageTemplate) {
    initialValues.message = messageTemplate;
  } else {
    initialValues.message = "";
  }

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema(t, contactMethod),
    onSubmit,
  });

  useEffect(() => {
    formik.setFieldTouched(contactMethod, false);
    formik.setFieldError(contactMethod, "");
  }, [contactMethod]);

  return (
    <Box sx={{ display: "grid", alignContent: "center", gap: "30px" }}>
      <Typography variant="h5" sx={style.title}>
        {title ? title : t("modal.title")}
      </Typography>
      <Typography variant="subtitle2" sx={style.subtitle}>
        {subtitle ? subtitle : t("modal.subtitle")}
      </Typography>

      <Box component={"form"} autoComplete="off" onSubmit={formik.handleSubmit}>
        <ContactMethodToggle
          contactMethod={contactMethod}
          handleContactMethodChange={handleContactMethodChange}
          isRegisterContact={isRegisterContact}
        />

        <Box sx={style.inputWrapper}>
          <CustomTextField name="name" formik={formik} sx={style.input} />
          <CustomTextField
            name={contactMethod}
            type={contactMethod}
            formik={formik}
            sx={style.input}
          />
        </Box>
        <CustomTextField
          name="message"
          formik={formik}
          sx={{
            ...style.input,
            display: hideMessageInput ? "none" : "inline-flex",
          }}
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={style.buttonSubmit}
          type="submit"
          disabled={!formik.isValid || isSending}
        >
          {button ?? t("modal.button")}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUsForm;
