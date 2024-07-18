import { Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

import style from './../MainBlock.style'

const KeyPointsItem = () => {
  return (
    <Box sx={style.keyPointsContainer}>
      <Typography variant='h5' component='span'>
        Key Points
      </Typography>
      <Box sx={style.separator} />

      <Box sx={style.checkContainer}>
        <Box sx={style.checkWrapper}>
          <Box sx={style.checkTextContainer}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              Fusce himenaeos imperdiet sodales aptent dictum ex volutpat
            </Typography>
          </Box>
          <Box sx={style.checkTextContainer}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              Fusce himenaeos imperdiet sodales aptent dictum ex volutpat
            </Typography>
          </Box>
          <Box sx={style.checkTextContainer}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              Fusce himenaeos imperdiet sodales aptent dictum ex volutpat
            </Typography>
          </Box>
        </Box>

        <Box sx={style.checkWrapper}>
          <Box sx={style.checkTextContainer}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              Fusce himenaeos imperdiet sodales aptent dictum ex volutpat
            </Typography>
          </Box>
          <Box sx={style.checkTextContainer}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              Fusce himenaeos imperdiet sodales aptent dictum ex volutpat
            </Typography>
          </Box>
          <Box sx={style.checkTextContainer}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              Fusce himenaeos imperdiet sodales aptent dictum ex volutpat
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={style.separator} />
    </Box>
  )
}

export default KeyPointsItem