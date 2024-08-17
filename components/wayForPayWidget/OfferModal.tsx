import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Fade, IconButton, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import style from "./OfferModal.style";

interface IContactUsModal {
  title: string;
  message: string;
  button: string;
  open: boolean;
  handleClose: () => void;
}

export default function ContactUsModal({
  title,
  message,
  button,
  open,
  handleClose,
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
            <Fade in={open}>
              <Box sx={style.container}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h3" sx={style.title}>
                    {title}
                  </Typography>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={style.closeIcon}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ color: "#94A3B8", textIndent: "2rem", mb: "25px" }}
                >
                  {message}
                </Typography>
                <Button onClick={handleClose} sx={style.button}>
                  {button}
                </Button>
              </Box>
            </Fade>
          </Modal>
        )}
      </Box>
    </>
  );
}
