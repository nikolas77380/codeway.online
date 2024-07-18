import { Box } from '@mui/material'

import style from './MainBlock.style'
import DescriptionItem from './DescriptionItem/DescriptionItem'
import KeyPointsItem from './KeyPointsItem/KeyPointsItem'

const MainBlock = () => {
  return (
    <Box sx={style.mainContainer}>
      <DescriptionItem />
      <KeyPointsItem />
    </Box>
  )
}

export default MainBlock