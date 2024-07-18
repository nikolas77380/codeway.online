import { Box, Typography } from '@mui/material'
import style from './../MainBlock.style'
import Image from 'next/image'

interface DescriptionItemProps {
  shortDescription: string;
}

const DescriptionItem = ({ shortDescription }:DescriptionItemProps ) => {
  return (
    <Box sx={style.descriptionMainContainer}>
      <Typography variant='h5' component='span'>
        Descriptions
      </Typography>
      <Box sx={style.descriptionTextContainer}>
        <Typography variant='body1' component='p' sx={{ marginBottom: '25px' }}>
          {shortDescription}
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