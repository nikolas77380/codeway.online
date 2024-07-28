import { Box } from '@mui/material';

import dynamic from 'next/dynamic';

import ContactUsHeader from '@/components/ContactUsPage/ContactUsHeader/ContactUsHeader';
import GetInTouch from '@/components/ContactUsPage/GetInTouch/GetInTouch';

import style from './ContactUsPage.style';

const GoogleMapItemWithNoSSR = dynamic(
  () => import('./../../../components/ContactUsPage/GoogleMapItem/GoogleMapItem'),
  { ssr: false }
);

const ContactUsPage = () => {
  return (
    <Box sx={style.mainPageContainer}>
      <ContactUsHeader />
      <GetInTouch />
      <GoogleMapItemWithNoSSR />
    </Box>
  )
}

export default ContactUsPage;