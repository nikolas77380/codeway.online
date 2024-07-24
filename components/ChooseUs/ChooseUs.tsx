import { Box, Typography } from '@mui/material'

import ChooseUsCard from './ChoseUsCard/ChooseUsCard'

import { dataChooseUsCard } from '@/src/mocks/ChooseUsItem/dataChooseUsCard'

import style from './ChooseUs.style'

const ChooseUs = () => {
  return (
    <Box sx={style.mainSection}>
      <Box 
        id="text-section" 
        sx={style.textSection}
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-anchor-placement="top"
      >
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
      <Box 
        id="card-section" 
        sx={style.cardSection}
        data-aos-anchor-placement="top"
      >
        {dataChooseUsCard.map(card => (
          <ChooseUsCard 
            key={card.id}
            IconComponent={card.icon}
            {...card}
            data-aos="zoom-in"
            data-aos-delay={100 * (card.id + 1)}
            data-aos-duration="1200"
          />
        ))}
      </Box>
    </Box>
  )
}

export default ChooseUs