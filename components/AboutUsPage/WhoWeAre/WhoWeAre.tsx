import { Box, IconButton, Typography } from "@mui/material"

import Image from "next/image";

import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';

import style from './WhoWeAre.style'

const WhoWeAre = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.mainContent}>
        <Typography component='label'>
          Who We Are
        </Typography>
        <Typography variant="h3" component='span'>
          Primary Instruction, Higher Department Of Education.
        </Typography>
        <Typography variant="body1" component='p'>
          Leo phasellus platea pede dictum nisl felis enim. Potenti platea ultrices sed efficitur 
          luctus per sagittis aptent netus non himenaeos. Aenean rutrum tempor aptent sociosqu nam 
          vivamus id.
        </Typography>
        <Box sx={style.servicesContainer}>
          
          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <VideoCameraFrontIcon fontSize='large' />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component='span'>
                Online Course & Webinar
              </Typography>
              <Typography component='p'>
                Placerat vehicula ligula etiam quam hendrerit consectetur mattis nec non
              </Typography>
            </Box>
          </Box>

          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <WorkHistoryOutlinedIcon fontSize='large' />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component='span'>
                Bootcamp Programs
              </Typography>
              <Typography component='p'>
                Placerat vehicula ligula etiam quam hendrerit consectetur mattis nec non
              </Typography>
            </Box>
          </Box>

          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <CardMembershipOutlinedIcon fontSize='large' />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component='span'>
                Certifications & Career Mentorship
              </Typography>
              <Typography component='p'>
                Placerat vehicula ligula etiam quam hendrerit consectetur mattis nec non
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
      <Box sx={style.mainContent2}>
      <Box sx={style.mainWrapper}>
        <Box sx={style.imageMainContainer}>
          <Image src='/aboutUs/hero.jpg' alt="hero" fill />
        </Box>
        <Box sx={style.memberContainer}>
          <Box sx={style.memberWrapper}>
            <Typography component='label'>
              52k+
            </Typography>
            <Typography component='span'>
              Member Active
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default WhoWeAre