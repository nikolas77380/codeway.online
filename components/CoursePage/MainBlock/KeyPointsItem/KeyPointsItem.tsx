import { Box, Typography } from '@mui/material'

import CheckIcon from '@mui/icons-material/Check';

import style from './KeyPointsItem.style'

interface KeyPointsItemProps {
  keyPoints: string[];
}

const KeyPointsItem = ({ keyPoints }: KeyPointsItemProps) => {
  return (
    <Box sx={style.keyPointsContainer}>
      <Typography variant='h5' component='span'>
        Key Points
      </Typography>
      <Box sx={style.separator} />
      <Box sx={style.gridContainer}>
        {keyPoints.map((point, index) => (
          <Box sx={style.checkTextContainer} key={index}>
            <CheckIcon fontSize='medium' />
            <Typography component='p'>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={style.separator} />
    </Box>
  )
}

export default KeyPointsItem