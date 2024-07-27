"use client";

import validationSchema from "@/schemas/form.schema";
import { sendEmail } from "@/utils/send-email";
import { ArrowForward } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Fade,
  Modal,
  Portal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { TFunction } from "i18next";
import { useState } from "react";
import style from "./ContactUsModal.style";

interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
  t: TFunction<string, undefined>;
}

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

export default function ContactUsModal({
  open,
  handleClose,
  t,
}: IContactUsModal) {
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (values: IInitialValues) => {
    setIsSending(true);

    try {
      const response = await sendEmail(values);
      setAlert({ open: true, message: response.message, severity: "success" });
      handleClose();
    } catch (error) {
      if (error instanceof Error) {
        setAlert({ open: true, message: error.message, severity: "error" });
      } else {
        setAlert({
          open: true,
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
    <>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          disableScrollLock
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style.container}>
              <Typography variant="h5" sx={style.title}>
                {t("modal.title")}
              </Typography>
              <Typography variant="subtitle2" sx={style.subtitle}>
                {t("modal.subtitle")}
              </Typography>
              <Box
                component={"form"}
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
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
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
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
          </Fade>
        </Modal>
      </Box>
      <Portal>
        <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() =>
            setAlert({ open: false, message: "", severity: "success" })
          }
        >
          <Alert
            onClose={() =>
              setAlert({ open: false, message: "", severity: "success" })
            }
            severity={alert.severity}
            sx={{ width: "100%" }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      </Portal>
    </>
  );
}
