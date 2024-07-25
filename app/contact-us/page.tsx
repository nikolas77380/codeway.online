import { Box } from '@mui/material';

import style from './ContactUsPage.style';
import ContactUsHeader from '@/components/ContactUsPage/ContactUsHeader/ContactUsHeader';
import GetInTouch from '@/components/ContactUsPage/GetInTouch/GetInTouch';

const ContactUsPage = () => {
  return (
    <Box sx={style.mainPageContainer}>
      <ContactUsHeader />
      <GetInTouch />
    </Box>
  )
}

export default ContactUsPage;