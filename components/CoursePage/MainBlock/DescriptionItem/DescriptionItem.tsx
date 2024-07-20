import { Box, Typography } from '@mui/material'

import Image from 'next/image'

import style from './DescriptionItem.style'

interface DescriptionItemProps {
  description: string;
}

const DescriptionItem = ({ description }:DescriptionItemProps ) => {
  return (
    <Box sx={style.descriptionMainContainer}>
      <Typography variant='h5' component='span'>
        Descriptions
      </Typography>
      <Box sx={style.descriptionTextContainer}>
        <Typography variant='body1' component='p' sx={{ marginBottom: '25px' }}>
          {description}
        </Typography>
      </Box>
      <Box sx={style.descriptionImage}>
        <Image 
          src='/coursePage/descriptionImg.jpg'
          alt='descImg'
          width={400}
          height={400}
        />
      </Box>
    </Box>
  )
}

export default DescriptionItem