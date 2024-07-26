"use client";

import { useSnackbar } from "@/context/SnackbarContext";
import validationSchema from "@/schemas/form.schema";
import { sendEmail } from "@/utils/send-email";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import style from "./ContactUsModal.style";
interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
}

export interface IInitialValues {
  name: string;
  email: string;
  message: string;
}

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactUsModal({ open, handleClose }: IContactUsModal) {
  const { showSnackbar } = useSnackbar();

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (values: IInitialValues) => {
    setIsSending(true);
    showSnackbar({ message: "Sending...", severity: "info", duration: 10000 });
    try {
      const response = await sendEmail(values);
      showSnackbar({ message: response.message, severity: "success" });
      handleClose();
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
                Send us a message
              </Typography>
              <Typography variant="subtitle2" sx={style.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
              <Box
                component={"form"}
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <Box sx={style.inputWrapper}>
                  <TextField
                    name="name"
                    label="Name"
                    type="text"
                    sx={style.input}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
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
                  label="Message"
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
                  Contact us
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
}
