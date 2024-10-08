import Close from "@mui/icons-material/Close";
import { Box, Fade, IconButton } from "@mui/material";
import dynamic from "next/dynamic";
import ContactUsForm from "../form/ContactUsForm";
import style from "./ContactUsModal.style";

interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
}
export default function ContactUsModal({ open, handleClose }: IContactUsModal) {
  const Modal = dynamic(() => import("@mui/material/Modal"));
  return (
    <>
      <Box>
        {open && (
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
                <IconButton sx={style.closeButton} onClick={handleClose}>
                  <Close />
                </IconButton>
                <ContactUsForm handleClose={handleClose} />
              </Box>
            </Fade>
          </Modal>
        )}
      </Box>
    </>
  );
}
