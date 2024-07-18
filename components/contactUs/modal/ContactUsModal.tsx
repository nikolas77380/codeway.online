import { ArrowForward } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import style from "./ContactUsModal.style";

interface IContactUsModal {
  open: boolean;
  handleClose: () => void;
}

export default function ContactUsModal({ open, handleClose }: IContactUsModal) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style.container}>
          <Typography variant="h5" sx={style.title}>
            Send us a message
          </Typography>
          <Typography variant="subtitle2" sx={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Box sx={style.inputWrapper}>
            <TextField
              label="Name"
              type="text"
              sx={style.input}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              sx={style.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <TextField
            label="Message"
            sx={style.input}
            multiline
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={style.button}
          >
            Contact us
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
