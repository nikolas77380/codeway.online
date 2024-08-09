import React from 'react';

import { Box, Typography } from '@mui/material'

import { contactData } from '@/src/mocks/AboutUsPage/contactData';

import style from './ContactInfo.style'

const ContactInfo = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.wrapper}>
        <Typography component="label">
          Contact Information
        </Typography>
        <Box sx={style.cardContainer}>
          {contactData.map((item, index) => (
            <Box key={index}>
              <Box sx={style.textSection}>
                <Typography className='title'>{item.title}</Typography>
                <Typography className='subtitle'>{item.subtitle}</Typography>
              </Box>
              {index < contactData.length - 1 && <Box sx={style.separator}></Box>}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
};

export default ContactInfo;