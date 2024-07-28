import { Box } from '@mui/material';

import style from './ContactUsPage.style';
import ContactUsHeader from '@/components/ContactUsPage/ContactUsHeader/ContactUsHeader';
import GetInTouch from '@/components/ContactUsPage/GetInTouch/GetInTouch';
import GoogleMapItem from '@/components/ContactUsPage/GoogleMapItem/GoogleMapItem';


const ContactUsPage = () => {
  return (
    <Box sx={style.mainPageContainer}>
      <ContactUsHeader />
      <GetInTouch />
      <GoogleMapItem />
    </Box>
  )
}

export default ContactUsPage;