"use client";

import { Box, Fade, Modal } from "@mui/material";
import ContactUsForm from "../form/ContactUsForm";
import style from "./ContactUsModal.style";

interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
}

export default function ContactUsModal({ open, handleClose }: IContactUsModal) {
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
              <ContactUsForm />
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
}
