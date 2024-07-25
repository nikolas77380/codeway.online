import { Box, IconButton, Typography } from '@mui/material'
import style from './GetInTouch.style'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneIcon from '@mui/icons-material/Phone';
import GetInTouchForm from './GetInTouchForm/GetInTouchForm';

const GetInTouch = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.mainContent}>
        <Typography component='label'>
          Get in Touch
        </Typography>
        <Typography variant="h3" component='span'>
          Get in touch and let us know how we can help.
        </Typography>
        <Typography variant="body1" component='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Box sx={style.separator} />
        <Box sx={style.servicesContainer}>
          
          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <LocationOnIcon fontSize='large' />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component='span'>
                Head Office
              </Typography>
              <Typography component='p'>
                Jln Cempaka Wangi No 22
              </Typography>
              <Typography component='p'>
                Jakarta - Indonesia
              </Typography>
            </Box>
          </Box>

          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <MarkEmailReadIcon fontSize='large' />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component='span'>
                Email us
              </Typography>
              <Typography component='p'>
                support@yourdomain.tld
              </Typography>
              <Typography component='p'>
                hello@yourdomain.tld
              </Typography>
            </Box>
          </Box>

          <Box sx={style.serviceSection}>
            <IconButton sx={style.icon}>
              <PhoneIcon fontSize='large' />
            </IconButton>
            <Box sx={style.serviceTextSection}>
              <Typography component='span'>
                Let's Talk
              </Typography>
              <Typography component='p'>
                Phone : +6221.2002.2012
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
      <Box sx={style.mainContent2}>
        <GetInTouchForm />
      </Box>
    </Box>
  )
}

export default GetInTouch