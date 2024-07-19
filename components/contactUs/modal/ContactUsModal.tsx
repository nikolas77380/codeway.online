"use client";

import { sendEmail } from "@/utils/send-email";
import {
  validateEmail,
  validateMessage,
  validateName,
} from "@/utils/validate-form-data";
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
import { ChangeEvent, FormEvent, useState } from "react";
import style from "./ContactUsModal.style";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
}

export default function ContactUsModal({ open, handleClose }: IContactUsModal) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [isSending, setIsSending] = useState(false);

  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));

    setNameError(validateName(formData.name));
  };
  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
    setEmailError(validateEmail(formData.email));
  };
  const handleMessageChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      message: e.target.value,
    }));
    setMessageError(validateMessage(formData.message));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const response = await sendEmail(formData);
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
              <Box component={"form"} onSubmit={handleSubmit} noValidate>
                <Box sx={style.inputWrapper}>
                  <TextField
                    name="name"
                    label="Name"
                    type="text"
                    sx={style.input}
                    onChange={handleNameChange}
                    error={formData.name.length > 0 && !!nameError}
                    helperText={formData.name.length > 0 && nameError}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    sx={style.input}
                    onChange={handleEmailChange}
                    error={formData.email.length > 0 && !!emailError}
                    helperText={formData.email.length > 0 && emailError}
                  />
                </Box>
                <TextField
                  name="message"
                  label="Message"
                  sx={style.input}
                  multiline
                  rows={4}
                  onChange={handleMessageChange}
                  error={formData.message.length > 0 && !!messageError}
                  helperText={formData.message.length > 0 && messageError}
                />
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={style.button}
                  disabled={
                    isSending ||
                    !!messageError ||
                    !!emailError ||
                    !!nameError ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                  type="submit"
                >
                  {isSending ? "Sending..." : "Contact us"}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
      <Portal>
        <Snackbar
          open={alert.open}
          autoHideDuration={6000}
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
