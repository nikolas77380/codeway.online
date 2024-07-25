import { Box, Typography } from "@mui/material"

import style from './ContactUsHeader.style'

const ContactUsHeader = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.name}>
          Contact Us
        </Typography>
        <Typography  variant="h5" sx={style.subtitle}>
          Start the conversation to established good relationship and business.
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactUsHeader