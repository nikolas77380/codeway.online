import { Box, Typography } from '@mui/material';

import style from './HeaderAboutUs.style'

const HeaderAboutUs = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.name}>
          About Us
        </Typography>
        <Typography  variant="h5" sx={style.subtitle}>
          Join our community of learners and start your journey towards success.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderAboutUs