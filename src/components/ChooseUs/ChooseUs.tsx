import { Box, Typography } from '@mui/material'

import ChooseUsCard from './ChoseUsCard/ChooseUsCard'

import { dataChooseUsCard } from '@/src/mocks/ChooseUsItem/dataChooseUsCard'

import style from './ChooseUs.style'

const ChooseUs = () => {
  return (
    <Box sx={style.mainSection}>
      <Box sx={style.textSection}>
        <Typography variant='h6' component='span'>
          Why Choose Us
        </Typography>
        <Typography variant='h3' component='p' className="title">
          It{"'s"} the bright one, it{"'s"} the right one, {"\n"}
          that{"'s"} education.
        </Typography>
        <Typography variant='body1' component='p' className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec{"\n"}
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
      </Box>
      <Box sx={style.cardSection}>
        {dataChooseUsCard.map(card => (
          <ChooseUsCard 
            key={card.id}
            IconComponent={card.icon}
            {...card}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ChooseUs