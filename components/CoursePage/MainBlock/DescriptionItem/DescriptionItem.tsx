import { Box, Typography } from '@mui/material'
import style from './../MainBlock.style'
import Image from 'next/image'

const DescriptionItem = () => {
  return (
    <Box sx={style.descriptionMainContainer}>
      <Typography variant='h5' component='span'>
        Descriptions
      </Typography>
      <Box sx={style.descriptionTextContainer}>
        <Typography variant='body1' component='p' sx={{ marginBottom: '25px' }}>
          Si est arcu litora cursus magnis. Dictum curae primis nascetur arcu dictumst vel eleifend. 
          Dis cursus massa morbi parturient dictumst rhoncus dictum est ornare sed ultricies. 
          Tristique libero pretium platea maecenas fermentum dolor eros montes diam si.
        </Typography>
        <Typography variant='body1' component='p'>
          Si est arcu litora cursus magnis. Dictum curae primis nascetur arcu dictumst vel eleifend. 
          Dis cursus massa morbi parturient dictumst rhoncus dictum est ornare sed ultricies. 
          Tristique libero pretium platea maecenas fermentum dolor eros montes diam si.
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