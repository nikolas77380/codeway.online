"use client";

import { useSnackbar } from "@/src/context/SnackbarContext";
import { sendEmail } from "@/src/utils/send-email";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Script from "next/script";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./ContactUsForm.style";
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
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

const ContactUsForm = ({ handleClose }: IContactUsForm) => {
  const [isSending, setIsSending] = useState(false);
  const { showSnackbar } = useSnackbar();
  const { t } = useTranslation("ContactUs");

  const onSubmit = async (values: IInitialValues) => {
    setIsSending(true);
    showSnackbar({
      message: t("feedback.sending"),
      severity: "info",
      duration: 10000,
    });
    try {
      window.grecaptcha.enterprise.ready(async () => {
        const token = await window.grecaptcha.enterprise.execute(SITE_KEY, {
          action: "LOGIN",
        });
        const nodeBadge = document.querySelector(".grecaptcha-badge");
        if (nodeBadge) {
          (nodeBadge as HTMLElement).style.opacity = "1";
          (nodeBadge as HTMLElement).style.visibility = "visible";
        }
        await sendEmail({
          email: values.email,
          subject: `${t("feedback.message")} ${values.name} (${values.email})`,
          message: values.message,
          recipient: "corp_email",
          reCaptchaToken: token,
        })
          .then((response) => {
            showSnackbar({
              message: t(`feedback.${response.message}`),
              severity: response.message,
              duration: 3000,
            });
          })
          .finally(() => {
            if (handleClose) {
              handleClose();
            } else {
              formik.resetForm();
            }
            setTimeout(() => {
              const nodeBadge = document.querySelector(".grecaptcha-badge");
              if (nodeBadge) {
                (nodeBadge as HTMLElement).style.opacity = "0";
                (nodeBadge as HTMLElement).style.visibility = "hidden";
              }
            }, 3000);
            setIsSending(false);
          });
      });
    } catch (error) {
      showSnackbar({
        message: t("feedback.error"),
        severity: "error",
      });
      const nodeBadge = document.querySelector(".grecaptcha-badge");
      if (nodeBadge) {
        (nodeBadge as HTMLElement).style.display = "none";
      }
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema(t),
    onSubmit,
  });
  return (
    <Box sx={{ display: "grid", alignContent: "center", gap: "30px" }}>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}&hl=uk`}
        async
        defer
      />
      <Typography variant="h5" sx={style.title}>
        {t("modal.title")}
      </Typography>
      <Typography variant="subtitle2" sx={style.subtitle}>
        {t("modal.subtitle")}
      </Typography>

      <Box component={"form"} autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box sx={style.inputWrapper}>
          <TextField
            name="name"
            label={t("modal.nameInputLabel")}
            type="text"
            variant="outlined"
            sx={style.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            name="email"
            label={t("modal.emailInputLabel")}
            type="email"
            variant="outlined"
            sx={style.input}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        <TextField
          name="message"
          label={t("modal.messageInputLabel")}
          variant="outlined"
          sx={style.input}
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={style.button}
          type="submit"
          disabled={!formik.isValid || isSending}
        >
          {t("modal.button")}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUsForm;
