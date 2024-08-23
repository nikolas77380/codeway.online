"use client";

import { useSnackbar } from "@/context/SnackbarContext";
import validationSchema from "@/schemas/form.schema";
import { sendEmail } from "@/utils/send-email";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./ContactUsForm.style";

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

const ContactUsForm = ({ handleClose }: IContactUsForm) => {
  const [isSending, setIsSending] = useState(false);

  const { showSnackbar } = useSnackbar();

  const { t } = useTranslation("ContactUs");

  const onSubmit = async (values: IInitialValues) => {
    setIsSending(true);
    showSnackbar({ message: "Sending...", severity: "info", duration: 10000 });
    try {
      const response = await sendEmail({
        email: values.email,
        subject: `Message from ${values.name} (${values.email})`,
        message: values.message,
        recipient: "corp_email",
      });
      showSnackbar({ message: response.message, severity: "success" });
      if (handleClose) {
        handleClose();
      }
    } catch (error) {
      if (error instanceof Error) {
        showSnackbar({ message: error.message, severity: "error" });
      } else {
        showSnackbar({
          message: "An unknown error occurred",
          severity: "error",
        });
      }
    } finally {
      setIsSending(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Box sx={{ display: "grid", alignContent: "center", gap: "30px" }}>
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
