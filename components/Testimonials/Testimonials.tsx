import { Box, Typography } from '@mui/material'

import TestimonialCard from './TestimonialCard/TestimonialCard';

import style from './Testimonials.style'

const Testimonials = () => {
  return (
    <Box sx={style.mainSection}>
      <Box sx={style.textSection}>
        <Typography variant='h6' component='span'>
            Why Choose Us
        </Typography>
        <Typography variant='h3' component='p' className="title">
          What clients say about us.
        </Typography>
      </Box>
      <TestimonialCard />
    </Box>
  )
}

export default Testimonials