import Close from "@mui/icons-material/Close";
import { Box, Fade, IconButton } from "@mui/material";
import dynamic from "next/dynamic";
import style from "./ContactUsModal.style";

interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
export default function ContactUsModal({
  open,
  handleClose,
  children,
}: IContactUsModal) {
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
            <Fade in={open} timeout={500}>
              <Box sx={style.container}>
                <IconButton sx={style.closeButton} onClick={handleClose}>
                  <Close />
                </IconButton>
                {children}
              </Box>
            </Fade>
          </Modal>
        )}
      </Box>
    </>
  );
}
